import {
    layoutGridSvg,
    settingsSvg,
    // capsullSvg,
    userSvg,
    walletSvg,
    dataSvg,
    // aidBagSvg,
    listSquareSvg,
    airPlaneSvg,
    alarmSvg,
} from '../assets/index'; // Importing the SVG as a URL

const menu = [
    {
        id: 1,
        title: 'Dashboar',
        icon: layoutGridSvg,
        path: '/dashboard'
    },
    {
        id: 2,
        title: 'Jammah',
        icon: userSvg,
        path: '/jamaah'
    },
    {
        id: 3,
        title: 'Pendaftaran Jamaah',
        icon: listSquareSvg,
        path: '/pendaftaranJamaah'
    },
    {
        id: 4,
        title: 'Manivest',
        icon: airPlaneSvg,
        path: '/manivest'
    },
    {
        id: 5,
        title: 'Schedule',
        icon: alarmSvg,
        path: '/schedule'
    },
    // {
    //     id: 4,
    //     title: 'Apotek',
    //     icon: capsullSvg,
    //     path: '/apotek'
    // },
    {
        id: 6,
        title: 'Kasir',
        icon: walletSvg,
        path: '/kasir'
    },
    // {
    //     id: 7,
    //     title: 'Bpjs',
    //     icon: aidBagSvg,
    //     path: '/bpjs'
    // },
    {
        id: 8,
        title: 'Laporan',
        icon: dataSvg,
        path: '/laporan'
    },
    {
        id: 9,
        title: 'setting',
        icon: settingsSvg,
        path: '/setting'
    },
];

const statusFlow = [
    { status: 'Registrasi', color: '#3498db' },   // Light Blue
    { status: 'Pemeriksaan Awal', color: '#e67e22' },   // Carrot Orange
    { status: 'Konsultasi Dokter', color: '#2ecc71' },  // Emerald Green
    { status: 'Selesai Konsultasi Dokter Tanpa Obat', color: '#9b59b6' },  // Amethyst Purple
    { status: 'Resep Dikeluarkan', color: '#e74c3c' },  // Alizarin Red
    { status: 'Pembayayaran Cashier', color: '#f39c12' },   // Orange
    { status: 'Pendaftaran Apotek', color: '#95a5a6' },   // Concrete Gray
    { status: 'Penyiapan Obat', color: '#f1c40f' },   // Sunflower Yellow
    { status: 'Obat Diterima', color: '#1abc9c' }   // Turquoise
];

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const poliklinik = ['Umum', 'Gigi', 'Anak', 'Kandungan', 'THT', 'Kulit', 'Jantung'];
  const paymentMethods = ['Tunai', 'BPJS'];
  const doctors = ['Dr. Surya', 'Dr. Putri', 'Dr. Ahmad', 'Dr. Budi', 'Dr. Rina'];
  const randomNames = [
    "Budi Doe",
    "Cici Smith",
    "Irfan Johnson",
    "Emily Marbun",
    "William Susanto",
    "Sarah Nasution",
    "Joko Susilo",
    "Aditya Wijaya Putra",
    "Budi Santoso Adi",
    "Cahaya Ratna Sari",
    "Dian Anggraeni Putri",
    "Eka Prasetya Utama",
    "Fitri Ayu Lestari",
    "Gita Pramesti Dewi",
    "Hadi Kurniawan Budi",
    "Ika Paramita Wati",
    "Joko Suryono Putra",
    "Kurniawan hertanto",
    "Nanda Kusuma dewi",
    "Satya Wicaksana",
    "Ratu Nazly"];
    const randomStreets = ["Main St", "Elm St", "Oak St", "Pine St", "Cedar St", "Maple St", "Birch St", "Walnut St", "Ash St"];
  const randomCities = ["Springfield", "Riverside", "Greenville", "Centerville", "Fairview"];
  const randomStates = ["CA", "NY", "TX", "FL", "PA"];

  function generateEmail(name) {
    return name.toLowerCase().split(" ").join(".") + "@example.com";
  }
  
  function generateAddress() {
    const streetNumber = Math.floor(Math.random() * 9999) + 1;
    const street = getRandomElement(randomStreets);
    const city = getRandomElement(randomCities);
    const state = getRandomElement(randomStates);
    const zip = Math.floor(Math.random() * 90000) + 10000;
    return `${streetNumber} ${street}, ${city}, ${state} ${zip}`;
  }
  
  function generateRandomUser() {
    const name = getRandomElement(randomNames);
    const email = generateEmail(name);
    const address = generateAddress();
    return { name, email, address };
  }
  
  const dataTable = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: generateRandomUser().name,
    email: generateRandomUser().email,
    age: Math.floor(Math.random() * 50) + 20,
    gender: index % 2 === 0 ? 'M' : 'F',
    phone: Math.floor(Math.random() * 9000000000) + 1000000000,
    address: generateRandomUser().address,
    avatar: `https://i.pravatar.cc/150?u=${generateRandomUser().name}.svg`,
    birthDate: `${Math.floor(Math.random() * 30) + 1970}-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
    poli: getRandomElement(poliklinik),
    appointmentDate: `2024-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
    paymentMethod: getRandomElement(paymentMethods),
    doctorName: getRandomElement(doctors),
    mrNo: `MR${index + 1}`,
    status: getRandomElement(statusFlow)
}));

export {menu, dataTable}