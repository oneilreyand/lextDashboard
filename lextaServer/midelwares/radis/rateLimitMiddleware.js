const { getAsync, setAsync } = require('./radisConfig'); // Pastikan path dan nama file sesuai dengan konfigurasi Anda
const logger = require('./loger');
const rateLimitDuration = 1500; // Durasi dalam detik untuk rate limiting (misalnya, 60 detik)
const maxRequestsPerDuration = 5; // Jumlah maksimum permintaan dalam durasi tersebut

const rateLimitMiddleware = async (req, res, next) => {
  const ip = req.ip; // Gunakan IP pengguna sebagai identifikasi

  try {
  
    const currentRequests = await getAsync(ip);

    if (!currentRequests) {
      // Jika belum ada permintaan sebelumnya dari IP ini
      await setAsync(ip, JSON.stringify({ count: 1, expiry: Date.now() + rateLimitDuration * 1000 }), 'EX', rateLimitDuration);
    } else {
      // Jika sudah ada permintaan sebelumnya
      const { count, expiry } = JSON.parse(currentRequests);

      if (count >= maxRequestsPerDuration) {
        // Jika sudah melebihi batas permintaan
        const remainingTimeInSeconds = Math.ceil((expiry - Date.now()) / 1000);
        const remainingTimeInMinutes = Math.floor(remainingTimeInSeconds / 60);
        const remainingTimeInSecs = remainingTimeInSeconds % 60;
        return res.status(429).json({ error: 'Too many requests', remainingTimeInMinutes, remainingTimeInSecs });
      }

      // Update jumlah permintaan dan waktu kadaluarsa
      await setAsync(ip, JSON.stringify({ count: count + 1, expiry }), 'EX', Math.ceil((expiry - Date.now()) / 1000));
    }
    logger.info(`Rate limit applied for IP ${req.ip}`);
    next(); // Lanjutkan ke rute utama jika belum mencapai batas
  } catch (error) {
    console.error('Redis error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = rateLimitMiddleware;
