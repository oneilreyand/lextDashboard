// src/utils/dateConverter.js

const dayNames = [
  'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
];

const monthNames = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const dateConverter = (isoString) => {
  const date = new Date(isoString);

  const dayName = dayNames[date.getUTCDay()];
  const day = date.getUTCDate();
  const monthName = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${dayName}, ${day} ${monthName} ${year}`;
};

export default dateConverter;
