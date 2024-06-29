import {
    layoutGridSvg,
    settingsSvg,
    capsullSvg,
    userSvg,
    walletSvg,
    dataSvg,
    aidBagSvg,
    listSquareSvg,
    vaccineSvg
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
        title: 'Pasien',
        icon: userSvg,
        path: '/pasien'
    },
    {
        id: 3,
        title: 'Rawat Jalan',
        icon: listSquareSvg,
        path: '/rawatJalan'
    },
    {
        id: 4,
        title: 'Rawat Inap',
        icon: listSquareSvg,
        path: '/rawatInap'
    },
    {
        id: 5,
        title: 'Lab',
        icon: vaccineSvg,
        path: '/lab'
    },
    {
        id: 4,
        title: 'Apotek',
        icon: capsullSvg,
        path: '/apotek'
    },
    {
        id: 6,
        title: 'Kasir',
        icon: walletSvg,
        path: '/kasir'
    },
    {
        id: 7,
        title: 'Bpjs',
        icon: aidBagSvg,
        path: '/bpjs'
    },
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

export {menu}