const { getAsync, setAsync } = require('./radisConfig'); // Pastikan path dan nama file sesuai dengan konfigurasi Anda
const logger = require('./loger');

const loginRateLimitDuration = 120; // Durasi dalam detik untuk rate limiting (2 menit)
const maxLoginAttempts = 2; // Jumlah maksimum upaya login yang diizinkan

const loginRateLimitMiddleware = async (req, res, next) => {
  const ip = req.ip; // Gunakan IP pengguna sebagai identifikasi

  try {
    const currentAttempts = await getAsync(ip);

    if (!currentAttempts) {
      // Jika belum ada upaya login sebelumnya dari IP ini
      await setAsync(ip, JSON.stringify({ count: 1, expiry: Date.now() + loginRateLimitDuration * 1000 }), 'EX', loginRateLimitDuration);
      next();
    } else {
      // Jika sudah ada upaya login sebelumnya
      const { count, expiry } = JSON.parse(currentAttempts);

      if (count >= maxLoginAttempts) {
        // Jika sudah melebihi batas upaya login
        const remainingTimeInSeconds = Math.ceil((expiry - Date.now()) / 1000);
        const remainingTimeInMinutes = Math.floor(remainingTimeInSeconds / 60);
        const remainingTimeInSecs = remainingTimeInSeconds % 60;
        return res.status(428).json({ error: 'Anda telah melakukan kesalahan dalam login sebanyak tiga kali, waktu login berikutnya adalah', remainingTimeInMinutes, remainingTimeInSecs });
      }

      // Update jumlah upaya login dan waktu kadaluarsa
      await setAsync(ip, JSON.stringify({ count: count + 1, expiry }), 'EX', Math.ceil((expiry - Date.now()) / 1000));
      next();
    }
    logger.info(`Login rate limit applied for IP ${req.ip}`);
  } catch (error) {
    console.error('Redis error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = loginRateLimitMiddleware;
