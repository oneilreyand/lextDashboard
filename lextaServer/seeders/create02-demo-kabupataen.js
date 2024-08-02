'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Kabupatens', [
        {
          id: 1110,
          provinsiId: 11,
          nama: "ACEH SINGKIL",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 1111,
          provinsiId: 11,
          nama: "BIREUEN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 1112,
          provinsiId: 11,
          nama: "ACEH BARAT DAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 1113,
          provinsiId: 11,
          nama: "GAYO LUES",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "13"
        },
        {
          id: 1114,
          provinsiId: 11,
          nama: "ACEH JAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "14"
        },
        {
          id: 1115,
          provinsiId: 11,
          nama: "NAGAN RAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "15"
        },
        {
          id: 1116,
          provinsiId: 11,
          nama: "ACEH TAMIANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "16"
        },
        {
          id: 1117,
          provinsiId: 11,
          nama: "BENER MERIAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "17"
        },
        {
          id: 1118,
          provinsiId: 11,
          nama: "PIDIE JAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "18"
        },
        {
          id: 1171,
          provinsiId: 11,
          nama: "KOTA BANDA ACEH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 1172,
          provinsiId: 11,
          nama: "KOTA SABANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 1173,
          provinsiId: 11,
          nama: "KOTA LHOKSEUMAWE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "73"
        },
        {
          id: 1174,
          provinsiId: 11,
          nama: "KOTA LANGSA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "74"
        },
        {
          id: 1175,
          provinsiId: 11,
          nama: "KOTA SUBULUSSALAM",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "75"
        },
        {
          id: 1101,
          provinsiId: 11,
          nama: "ACEH SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 1102,
          provinsiId: 11,
          nama: "ACEH TENGGARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 1103,
          provinsiId: 11,
          nama: "ACEH TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 1104,
          provinsiId: 11,
          nama: "ACEH TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 1105,
          provinsiId: 11,
          nama: "ACEH BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 1106,
          provinsiId: 11,
          nama: "ACEH BESAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 1107,
          provinsiId: 11,
          nama: "PIDIE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 1108,
          provinsiId: 11,
          nama: "ACEH UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 1109,
          provinsiId: 11,
          nama: "SIMEULUE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 1210,
          provinsiId: 12,
          nama: "LABUHANBATU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 1211,
          provinsiId: 12,
          nama: "DAIRI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 1212,
          provinsiId: 12,
          nama: "TOBA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 1213,
          provinsiId: 12,
          nama: "MANDAILING NATAL",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "13"
        },
        {
          id: 1214,
          provinsiId: 12,
          nama: "NIAS SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "14"
        },
        {
          id: 1215,
          provinsiId: 12,
          nama: "PAKPAK BHARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "15"
        },
        {
          id: 1216,
          provinsiId: 12,
          nama: "HUMBANG HASUNDUTAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "16"
        },
        {
          id: 1217,
          provinsiId: 12,
          nama: "SAMOSIR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "17"
        },
        {
          id: 1218,
          provinsiId: 12,
          nama: "SERDANG BEDAGAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "18"
        },
        {
          id: 1219,
          provinsiId: 12,
          nama: "BATU BARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "19"
        },
        {
          id: 1220,
          provinsiId: 12,
          nama: "PADANG LAWAS UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "20"
        },
        {
          id: 1221,
          provinsiId: 12,
          nama: "PADANG LAWAS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "21"
        },
        {
          id: 1222,
          provinsiId: 12,
          nama: "LABUHANBATU SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "22"
        },
        {
          id: 1223,
          provinsiId: 12,
          nama: "LABUHANBATU UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "23"
        },
        {
          id: 1224,
          provinsiId: 12,
          nama: "NIAS UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "24"
        },
        {
          id: 1225,
          provinsiId: 12,
          nama: "NIAS BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "25"
        },
        {
          id: 1271,
          provinsiId: 12,
          nama: "KOTA MEDAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 1272,
          provinsiId: 12,
          nama: "KOTA PEMATANGSIANTAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 1273,
          provinsiId: 12,
          nama: "KOTA SIBOLGA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "73"
        },
        {
          id: 1274,
          provinsiId: 12,
          nama: "KOTA TANJUNG BALAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "74"
        },
        {
          id: 1275,
          provinsiId: 12,
          nama: "KOTA BINJAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "75"
        },
        {
          id: 1276,
          provinsiId: 12,
          nama: "KOTA TEBING TINGGI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "76"
        },
        {
          id: 1277,
          provinsiId: 12,
          nama: "KOTA PADANG SIDEMPUAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "77"
        },
        {
          id: 1278,
          provinsiId: 12,
          nama: "KOTA GUNUNGSITOLI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "78"
        },
        {
          id: 1201,
          provinsiId: 12,
          nama: "TAPANULI TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 1202,
          provinsiId: 12,
          nama: "TAPANULI UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 1203,
          provinsiId: 12,
          nama: "TAPANULI SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 1204,
          provinsiId: 12,
          nama: "NIAS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 1205,
          provinsiId: 12,
          nama: "LANGKAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 1206,
          provinsiId: 12,
          nama: "KARO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 1207,
          provinsiId: 12,
          nama: "DELI SERDANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 1208,
          provinsiId: 12,
          nama: "SIMALUNGUN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 1209,
          provinsiId: 12,
          nama: "ASAHAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 1310,
          provinsiId: 13,
          nama: "DHARMASRAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 1311,
          provinsiId: 13,
          nama: "SOLOK SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 1312,
          provinsiId: 13,
          nama: "PASAMAN BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 1371,
          provinsiId: 13,
          nama: "KOTA PADANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 1372,
          provinsiId: 13,
          nama: "KOTA SOLOK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 1373,
          provinsiId: 13,
          nama: "KOTA SAWAHLUNTO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "73"
        },
        {
          id: 1374,
          provinsiId: 13,
          nama: "KOTA PADANG PANJANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "74"
        },
        {
          id: 1375,
          provinsiId: 13,
          nama: "KOTA BUKITTINGGI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "75"
        },
        {
          id: 1376,
          provinsiId: 13,
          nama: "KOTA PAYAKUMBUH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "76"
        },
        {
          id: 1377,
          provinsiId: 13,
          nama: "KOTA PARIAMAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "77"
        },
        {
          id: 1301,
          provinsiId: 13,
          nama: "PESISIR SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 1302,
          provinsiId: 13,
          nama: "SOLOK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 1303,
          provinsiId: 13,
          nama: "SIJUNJUNG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 1304,
          provinsiId: 13,
          nama: "TANAH DATAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 1305,
          provinsiId: 13,
          nama: "PADANG PARIAMAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 1306,
          provinsiId: 13,
          nama: "AGAM",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 1307,
          provinsiId: 13,
          nama: "LIMA PULUH KOTA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 1308,
          provinsiId: 13,
          nama: "PASAMAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 1309,
          provinsiId: 13,
          nama: "KEPULAUAN MENTAWAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 1410,
          provinsiId: 14,
          nama: "KEPULAUAN MERANTI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 1471,
          provinsiId: 14,
          nama: "KOTA PEKANBARU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 1472,
          provinsiId: 14,
          nama: "KOTA DUMAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 1401,
          provinsiId: 14,
          nama: "KAMPAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 1402,
          provinsiId: 14,
          nama: "INDRAGIRI HULU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 1403,
          provinsiId: 14,
          nama: "BENGKALIS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 1404,
          provinsiId: 14,
          nama: "INDRAGIRI HILIR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 1405,
          provinsiId: 14,
          nama: "PELALAWAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 1406,
          provinsiId: 14,
          nama: "ROKAN HULU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 1407,
          provinsiId: 14,
          nama: "ROKAN HILIR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 1408,
          provinsiId: 14,
          nama: "SIAK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 1409,
          provinsiId: 14,
          nama: "KUANTAN SINGINGI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 1571,
          provinsiId: 15,
          nama: "KOTA JAMBI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 1572,
          provinsiId: 15,
          nama: "KOTA SUNGAI PENUH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 1501,
          provinsiId: 15,
          nama: "KERINCI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 1502,
          provinsiId: 15,
          nama: "MERANGIN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 1503,
          provinsiId: 15,
          nama: "SAROLANGUN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 1504,
          provinsiId: 15,
          nama: "BATANGHARI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 1505,
          provinsiId: 15,
          nama: "MUARO JAMBI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 1506,
          provinsiId: 15,
          nama: "TANJUNG JABUNG BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 1507,
          provinsiId: 15,
          nama: "TANJUNG JABUNG TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 1508,
          provinsiId: 15,
          nama: "BUNGO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 1509,
          provinsiId: 15,
          nama: "TEBO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 1610,
          provinsiId: 16,
          nama: "OGAN ILIR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 1611,
          provinsiId: 16,
          nama: "EMPAT LAWANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 1612,
          provinsiId: 16,
          nama: "PENUKAL ABAB LEMATANG ILIR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 1613,
          provinsiId: 16,
          nama: "MUSI RAWAS UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "13"
        },
        {
          id: 1671,
          provinsiId: 16,
          nama: "KOTA PALEMBANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 1672,
          provinsiId: 16,
          nama: "KOTA PAGAR ALAM",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 1673,
          provinsiId: 16,
          nama: "KOTA LUBUKLINGGAU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "73"
        },
        {
          id: 1674,
          provinsiId: 16,
          nama: "KOTA PRABUMULIH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "74"
        },
        {
          id: 1601,
          provinsiId: 16,
          nama: "OGAN KOMERING ULU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 1602,
          provinsiId: 16,
          nama: "OGAN KOMERING ILIR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 1603,
          provinsiId: 16,
          nama: "MUARA ENIM",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 1604,
          provinsiId: 16,
          nama: "LAHAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 1605,
          provinsiId: 16,
          nama: "MUSI RAWAS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 1606,
          provinsiId: 16,
          nama: "MUSI BANYUASIN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 1607,
          provinsiId: 16,
          nama: "BANYUASIN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 1608,
          provinsiId: 16,
          nama: "OGAN KOMERING ULU TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 1609,
          provinsiId: 16,
          nama: "OGAN KOMERING ULU SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 1771,
          provinsiId: 17,
          nama: "KOTA BENGKULU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 1701,
          provinsiId: 17,
          nama: "BENGKULU SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 1702,
          provinsiId: 17,
          nama: "REJANG LEBONG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 1703,
          provinsiId: 17,
          nama: "BENGKULU UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 1704,
          provinsiId: 17,
          nama: "KAUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 1705,
          provinsiId: 17,
          nama: "SELUMA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 1706,
          provinsiId: 17,
          nama: "MUKO MUKO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 1707,
          provinsiId: 17,
          nama: "LEBONG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 1708,
          provinsiId: 17,
          nama: "KEPAHIANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 1709,
          provinsiId: 17,
          nama: "BENGKULU TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 1810,
          provinsiId: 18,
          nama: "PRINGSEWU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 1811,
          provinsiId: 18,
          nama: "MESUJI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 1812,
          provinsiId: 18,
          nama: "TULANG BAWANG BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 1813,
          provinsiId: 18,
          nama: "PESISIR BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "13"
        },
        {
          id: 1871,
          provinsiId: 18,
          nama: "KOTA BANDAR LAMPUNG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 1872,
          provinsiId: 18,
          nama: "KOTA METRO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 1801,
          provinsiId: 18,
          nama: "LAMPUNG SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 1802,
          provinsiId: 18,
          nama: "LAMPUNG TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 1803,
          provinsiId: 18,
          nama: "LAMPUNG UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 1804,
          provinsiId: 18,
          nama: "LAMPUNG BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 1805,
          provinsiId: 18,
          nama: "TULANG BAWANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 1806,
          provinsiId: 18,
          nama: "TANGGAMUS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 1807,
          provinsiId: 18,
          nama: "LAMPUNG TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 1808,
          provinsiId: 18,
          nama: "WAY KANAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 1809,
          provinsiId: 18,
          nama: "PESAWARAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 1971,
          provinsiId: 19,
          nama: "KOTA PANGKAL PINANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 1901,
          provinsiId: 19,
          nama: "BANGKA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 1902,
          provinsiId: 19,
          nama: "BELITUNG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 1903,
          provinsiId: 19,
          nama: "BANGKA SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 1904,
          provinsiId: 19,
          nama: "BANGKA TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 1905,
          provinsiId: 19,
          nama: "BANGKA BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 1906,
          provinsiId: 19,
          nama: "BELITUNG TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 2171,
          provinsiId: 21,
          nama: "KOTA BATAM",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 2172,
          provinsiId: 21,
          nama: "KOTA TANJUNG PINANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 2101,
          provinsiId: 21,
          nama: "BINTAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 2102,
          provinsiId: 21,
          nama: "KARIMUN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 2103,
          provinsiId: 21,
          nama: "NATUNA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 2104,
          provinsiId: 21,
          nama: "LINGGA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 2105,
          provinsiId: 21,
          nama: "KEPULAUAN ANAMBAS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 3171,
          provinsiId: 31,
          nama: "JAKARTA PUSAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 3172,
          provinsiId: 31,
          nama: "JAKARTA UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 3173,
          provinsiId: 31,
          nama: "JAKARTA BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "73"
        },
        {
          id: 3174,
          provinsiId: 31,
          nama: "JAKARTA SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "74"
        },
        {
          id: 3175,
          provinsiId: 31,
          nama: "JAKARTA TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "75"
        },
        {
          id: 3101,
          provinsiId: 31,
          nama: "KEPULAUAN SERIBU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 3210,
          provinsiId: 32,
          nama: "MAJALENGKA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 3211,
          provinsiId: 32,
          nama: "SUMEDANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 3212,
          provinsiId: 32,
          nama: "INDRAMAYU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 3213,
          provinsiId: 32,
          nama: "SUBANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "13"
        },
        {
          id: 3214,
          provinsiId: 32,
          nama: "PURWAKARTA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "14"
        },
        {
          id: 3215,
          provinsiId: 32,
          nama: "KARAWANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "15"
        },
        {
          id: 3216,
          provinsiId: 32,
          nama: "BEKASI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "16"
        },
        {
          id: 3217,
          provinsiId: 32,
          nama: "BANDUNG BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "17"
        },
        {
          id: 3218,
          provinsiId: 32,
          nama: "PANGANDARAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "18"
        },
        {
          id: 3271,
          provinsiId: 32,
          nama: "KOTA BOGOR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 3272,
          provinsiId: 32,
          nama: "KOTA SUKABUMI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 3273,
          provinsiId: 32,
          nama: "KOTA BANDUNG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "73"
        },
        {
          id: 3274,
          provinsiId: 32,
          nama: "KOTA CIREBON",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "74"
        },
        {
          id: 3275,
          provinsiId: 32,
          nama: "KOTA BEKASI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "75"
        },
        {
          id: 3276,
          provinsiId: 32,
          nama: "KOTA DEPOK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "76"
        },
        {
          id: 3277,
          provinsiId: 32,
          nama: "KOTA CIMAHI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "77"
        },
        {
          id: 3278,
          provinsiId: 32,
          nama: "KOTA TASIKMALAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "78"
        },
        {
          id: 3279,
          provinsiId: 32,
          nama: "KOTA BANJAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "79"
        },
        {
          id: 3201,
          provinsiId: 32,
          nama: "BOGOR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 3202,
          provinsiId: 32,
          nama: "SUKABUMI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 3203,
          provinsiId: 32,
          nama: "CIANJUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 3204,
          provinsiId: 32,
          nama: "BANDUNG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 3205,
          provinsiId: 32,
          nama: "GARUT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 3206,
          provinsiId: 32,
          nama: "TASIKMALAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 3207,
          provinsiId: 32,
          nama: "CIAMIS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 3208,
          provinsiId: 32,
          nama: "KUNINGAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 3209,
          provinsiId: 32,
          nama: "CIREBON",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 3310,
          provinsiId: 33,
          nama: "KLATEN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 3311,
          provinsiId: 33,
          nama: "SUKOHARJO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 3312,
          provinsiId: 33,
          nama: "WONOGIRI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 3313,
          provinsiId: 33,
          nama: "KARANGANYAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "13"
        },
        {
          id: 3314,
          provinsiId: 33,
          nama: "SRAGEN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "14"
        },
        {
          id: 3315,
          provinsiId: 33,
          nama: "GROBOGAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "15"
        },
        {
          id: 3316,
          provinsiId: 33,
          nama: "BLORA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "16"
        },
        {
          id: 3317,
          provinsiId: 33,
          nama: "REMBANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "17"
        },
        {
          id: 3318,
          provinsiId: 33,
          nama: "PATI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "18"
        },
        {
          id: 3319,
          provinsiId: 33,
          nama: "KUDUS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "19"
        },
        {
          id: 3320,
          provinsiId: 33,
          nama: "JEPARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "20"
        },
        {
          id: 3321,
          provinsiId: 33,
          nama: "DEMAK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "21"
        },
        {
          id: 3322,
          provinsiId: 33,
          nama: "SEMARANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "22"
        },
        {
          id: 3323,
          provinsiId: 33,
          nama: "TEMANGGUNG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "23"
        },
        {
          id: 3324,
          provinsiId: 33,
          nama: "KENDAL",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "24"
        },
        {
          id: 3325,
          provinsiId: 33,
          nama: "BATANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "25"
        },
        {
          id: 3326,
          provinsiId: 33,
          nama: "PEKALONGAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "26"
        },
        {
          id: 3327,
          provinsiId: 33,
          nama: "PEMALANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "27"
        },
        {
          id: 3328,
          provinsiId: 33,
          nama: "TEGAL",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "28"
        },
        {
          id: 3329,
          provinsiId: 33,
          nama: "BREBES",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "29"
        },
        {
          id: 3371,
          provinsiId: 33,
          nama: "KOTA MAGELANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 3372,
          provinsiId: 33,
          nama: "KOTA SURAKARTA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 3373,
          provinsiId: 33,
          nama: "KOTA SALATIGA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "73"
        },
        {
          id: 3374,
          provinsiId: 33,
          nama: "KOTA SEMARANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "74"
        },
        {
          id: 3375,
          provinsiId: 33,
          nama: "KOTA PEKALONGAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "75"
        },
        {
          id: 3376,
          provinsiId: 33,
          nama: "KOTA TEGAL",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "76"
        },
        {
          id: 3301,
          provinsiId: 33,
          nama: "CILACAP",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 3302,
          provinsiId: 33,
          nama: "BANYUMAS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 3303,
          provinsiId: 33,
          nama: "PURBALINGGA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 3304,
          provinsiId: 33,
          nama: "BANJARNEGARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 3305,
          provinsiId: 33,
          nama: "KEBUMEN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 3306,
          provinsiId: 33,
          nama: "PURWOREJO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 3307,
          provinsiId: 33,
          nama: "WONOSOBO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 3308,
          provinsiId: 33,
          nama: "MAGELANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 3309,
          provinsiId: 33,
          nama: "BOYOLALI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 3471,
          provinsiId: 34,
          nama: "KOTA YOGYAKARTA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 3401,
          provinsiId: 34,
          nama: "KULON PROGO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 3402,
          provinsiId: 34,
          nama: "BANTUL",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 3403,
          provinsiId: 34,
          nama: "GUNUNGKIDUL",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 3404,
          provinsiId: 34,
          nama: "SLEMAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 3510,
          provinsiId: 35,
          nama: "BANYUWANGI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 3511,
          provinsiId: 35,
          nama: "BONDOWOSO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 3512,
          provinsiId: 35,
          nama: "SITUBONDO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 3513,
          provinsiId: 35,
          nama: "PROBOLINGGO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "13"
        },
        {
          id: 3514,
          provinsiId: 35,
          nama: "PASURUAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "14"
        },
        {
          id: 3515,
          provinsiId: 35,
          nama: "SIDOARJO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "15"
        },
        {
          id: 3516,
          provinsiId: 35,
          nama: "MOJOKERTO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "16"
        },
        {
          id: 3517,
          provinsiId: 35,
          nama: "JOMBANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "17"
        },
        {
          id: 3518,
          provinsiId: 35,
          nama: "NGANJUK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "18"
        },
        {
          id: 3519,
          provinsiId: 35,
          nama: "MADIUN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "19"
        },
        {
          id: 3520,
          provinsiId: 35,
          nama: "MAGETAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "20"
        },
        {
          id: 3521,
          provinsiId: 35,
          nama: "NGAWI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "21"
        },
        {
          id: 3522,
          provinsiId: 35,
          nama: "BOJONEGORO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "22"
        },
        {
          id: 3523,
          provinsiId: 35,
          nama: "TUBAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "23"
        },
        {
          id: 3524,
          provinsiId: 35,
          nama: "LAMONGAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "24"
        },
        {
          id: 3525,
          provinsiId: 35,
          nama: "GRESIK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "25"
        },
        {
          id: 3526,
          provinsiId: 35,
          nama: "BANGKALAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "26"
        },
        {
          id: 3527,
          provinsiId: 35,
          nama: "SAMPANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "27"
        },
        {
          id: 3528,
          provinsiId: 35,
          nama: "PAMEKASAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "28"
        },
        {
          id: 3529,
          provinsiId: 35,
          nama: "SUMENEP",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "29"
        },
        {
          id: 3571,
          provinsiId: 35,
          nama: "KOTA KEDIRI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 3572,
          provinsiId: 35,
          nama: "KOTA BLITAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 3573,
          provinsiId: 35,
          nama: "KOTA MALANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "73"
        },
        {
          id: 3574,
          provinsiId: 35,
          nama: "KOTA PROBOLINGGO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "74"
        },
        {
          id: 3575,
          provinsiId: 35,
          nama: "KOTA PASURUAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "75"
        },
        {
          id: 3576,
          provinsiId: 35,
          nama: "KOTA MOJOKERTO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "76"
        },
        {
          id: 3577,
          provinsiId: 35,
          nama: "KOTA MADIUN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "77"
        },
        {
          id: 3578,
          provinsiId: 35,
          nama: "KOTA SURABAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "78"
        },
        {
          id: 3579,
          provinsiId: 35,
          nama: "KOTA BATU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "79"
        },
        {
          id: 3501,
          provinsiId: 35,
          nama: "PACITAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 3502,
          provinsiId: 35,
          nama: "PONOROGO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 3503,
          provinsiId: 35,
          nama: "TRENGGALEK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 3504,
          provinsiId: 35,
          nama: "TULUNGAGUNG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 3505,
          provinsiId: 35,
          nama: "BLITAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 3506,
          provinsiId: 35,
          nama: "KEDIRI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 3507,
          provinsiId: 35,
          nama: "MALANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 3508,
          provinsiId: 35,
          nama: "LUMAJANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 3509,
          provinsiId: 35,
          nama: "JEMBER",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 3671,
          provinsiId: 36,
          nama: "KOTA TANGERANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 3672,
          provinsiId: 36,
          nama: "KOTA CILEGON",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 3673,
          provinsiId: 36,
          nama: "KOTA SERANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "73"
        },
        {
          id: 3674,
          provinsiId: 36,
          nama: "KOTA TANGERANG SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "74"
        },
        {
          id: 3601,
          provinsiId: 36,
          nama: "PANDEGLANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 3602,
          provinsiId: 36,
          nama: "LEBAK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 3603,
          provinsiId: 36,
          nama: "TANGERANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 3604,
          provinsiId: 36,
          nama: "SERANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 5171,
          provinsiId: 51,
          nama: "KOTA DENPASAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 5101,
          provinsiId: 51,
          nama: "JEMBRANA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 5102,
          provinsiId: 51,
          nama: "TABANAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 5103,
          provinsiId: 51,
          nama: "BADUNG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 5104,
          provinsiId: 51,
          nama: "GIANYAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 5105,
          provinsiId: 51,
          nama: "KLUNGKUNG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 5106,
          provinsiId: 51,
          nama: "BANGLI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 5107,
          provinsiId: 51,
          nama: "KARANGASEM",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 5108,
          provinsiId: 51,
          nama: "BULELENG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 5271,
          provinsiId: 52,
          nama: "KOTA MATARAM",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 5272,
          provinsiId: 52,
          nama: "KOTA BIMA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 5201,
          provinsiId: 52,
          nama: "LOMBOK BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 5202,
          provinsiId: 52,
          nama: "LOMBOK TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 5203,
          provinsiId: 52,
          nama: "LOMBOK TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 5204,
          provinsiId: 52,
          nama: "SUMBAWA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 5205,
          provinsiId: 52,
          nama: "DOMPU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 5206,
          provinsiId: 52,
          nama: "BIMA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 5207,
          provinsiId: 52,
          nama: "SUMBAWA BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 5208,
          provinsiId: 52,
          nama: "LOMBOK UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 5310,
          provinsiId: 53,
          nama: "MANGGARAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 5311,
          provinsiId: 53,
          nama: "SUMBA TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 5312,
          provinsiId: 53,
          nama: "SUMBA BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 5313,
          provinsiId: 53,
          nama: "LEMBATA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "13"
        },
        {
          id: 5314,
          provinsiId: 53,
          nama: "ROTE NDAO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "14"
        },
        {
          id: 5315,
          provinsiId: 53,
          nama: "MANGGARAI BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "15"
        },
        {
          id: 5316,
          provinsiId: 53,
          nama: "NAGEKEO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "16"
        },
        {
          id: 5317,
          provinsiId: 53,
          nama: "SUMBA TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "17"
        },
        {
          id: 5318,
          provinsiId: 53,
          nama: "SUMBA BARAT DAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "18"
        },
        {
          id: 5319,
          provinsiId: 53,
          nama: "MANGGARAI TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "19"
        },
        {
          id: 5320,
          provinsiId: 53,
          nama: "SABU RAIJUA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "20"
        },
        {
          id: 5321,
          provinsiId: 53,
          nama: "MALAKA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "21"
        },
        {
          id: 5371,
          provinsiId: 53,
          nama: "KOTA KUPANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 5301,
          provinsiId: 53,
          nama: "KUPANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 5302,
          provinsiId: 53,
          nama: "TIMOR TENGAH SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 5303,
          provinsiId: 53,
          nama: "TIMOR TENGAH UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 5304,
          provinsiId: 53,
          nama: "BELU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 5305,
          provinsiId: 53,
          nama: "ALOR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 5306,
          provinsiId: 53,
          nama: "FLORES TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 5307,
          provinsiId: 53,
          nama: "SIKKA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 5308,
          provinsiId: 53,
          nama: "ENDE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 5309,
          provinsiId: 53,
          nama: "NGADA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 6110,
          provinsiId: 61,
          nama: "MELAWI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 6111,
          provinsiId: 61,
          nama: "KAYONG UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 6112,
          provinsiId: 61,
          nama: "KUBU RAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 6171,
          provinsiId: 61,
          nama: "KOTA PONTIANAK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 6172,
          provinsiId: 61,
          nama: "KOTA SINGKAWANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 6101,
          provinsiId: 61,
          nama: "SAMBAS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 6102,
          provinsiId: 61,
          nama: "MEMPAWAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 6103,
          provinsiId: 61,
          nama: "SANGGAU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 6104,
          provinsiId: 61,
          nama: "KETAPANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 6105,
          provinsiId: 61,
          nama: "SINTANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 6106,
          provinsiId: 61,
          nama: "KAPUAS HULU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 6107,
          provinsiId: 61,
          nama: "BENGKAYANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 6108,
          provinsiId: 61,
          nama: "LANDAK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 6109,
          provinsiId: 61,
          nama: "SEKADAU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 6210,
          provinsiId: 62,
          nama: "GUNUNG MAS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 6211,
          provinsiId: 62,
          nama: "PULANG PISAU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 6212,
          provinsiId: 62,
          nama: "MURUNG RAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 6213,
          provinsiId: 62,
          nama: "BARITO TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "13"
        },
        {
          id: 6271,
          provinsiId: 62,
          nama: "KOTA PALANGKARAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 6201,
          provinsiId: 62,
          nama: "KOTAWARINGIN BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 6202,
          provinsiId: 62,
          nama: "KOTAWARINGIN TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 6203,
          provinsiId: 62,
          nama: "KAPUAS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 6204,
          provinsiId: 62,
          nama: "BARITO SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 6205,
          provinsiId: 62,
          nama: "BARITO UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 6206,
          provinsiId: 62,
          nama: "KATINGAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 6207,
          provinsiId: 62,
          nama: "SERUYAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 6208,
          provinsiId: 62,
          nama: "SUKAMARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 6209,
          provinsiId: 62,
          nama: "LAMANDAU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 6310,
          provinsiId: 63,
          nama: "TANAH BUMBU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 6311,
          provinsiId: 63,
          nama: "BALANGAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 6371,
          provinsiId: 63,
          nama: "KOTA BANJARMASIN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 6372,
          provinsiId: 63,
          nama: "KOTA BANJARBARU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 6301,
          provinsiId: 63,
          nama: "TANAH LAUT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 6302,
          provinsiId: 63,
          nama: "KOTABARU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 6303,
          provinsiId: 63,
          nama: "BANJAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 6304,
          provinsiId: 63,
          nama: "BARITO KUALA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 6305,
          provinsiId: 63,
          nama: "TAPIN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 6306,
          provinsiId: 63,
          nama: "HULU SUNGAI SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 6307,
          provinsiId: 63,
          nama: "HULU SUNGAI TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 6308,
          provinsiId: 63,
          nama: "HULU SUNGAI UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 6309,
          provinsiId: 63,
          nama: "TABALONG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 6411,
          provinsiId: 64,
          nama: "MAHAKAM ULU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 6471,
          provinsiId: 64,
          nama: "KOTA BALIKPAPAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 6472,
          provinsiId: 64,
          nama: "KOTA SAMARINDA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 6474,
          provinsiId: 64,
          nama: "KOTA BONTANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "74"
        },
        {
          id: 6401,
          provinsiId: 64,
          nama: "PASER",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 6402,
          provinsiId: 64,
          nama: "KUTAI KARTANEGARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 6403,
          provinsiId: 64,
          nama: "BERAU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 6407,
          provinsiId: 64,
          nama: "KUTAI BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 6408,
          provinsiId: 64,
          nama: "KUTAI TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 6409,
          provinsiId: 64,
          nama: "PENAJAM PASER UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 6571,
          provinsiId: 65,
          nama: "KOTA TARAKAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 6501,
          provinsiId: 65,
          nama: "BULUNGAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 6502,
          provinsiId: 65,
          nama: "MALINAU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 6503,
          provinsiId: 65,
          nama: "NUNUKAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 6504,
          provinsiId: 65,
          nama: "TANA TIDUNG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 7110,
          provinsiId: 71,
          nama: "BOLAANG MONGONDOW TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 7111,
          provinsiId: 71,
          nama: "BOLAANG MONGONDOW SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 7171,
          provinsiId: 71,
          nama: "KOTA MANADO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 7172,
          provinsiId: 71,
          nama: "KOTA BITUNG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 7173,
          provinsiId: 71,
          nama: "KOTA TOMOHON",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "73"
        },
        {
          id: 7174,
          provinsiId: 71,
          nama: "KOTA KOTAMOBAGU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "74"
        },
        {
          id: 7101,
          provinsiId: 71,
          nama: "BOLAANG MONGONDOW",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 7102,
          provinsiId: 71,
          nama: "MINAHASA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 7103,
          provinsiId: 71,
          nama: "KEPULAUAN SANGIHE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 7104,
          provinsiId: 71,
          nama: "KEPULAUAN TALAUD",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 7105,
          provinsiId: 71,
          nama: "MINAHASA SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 7106,
          provinsiId: 71,
          nama: "MINAHASA UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 7107,
          provinsiId: 71,
          nama: "MINAHASA TENGGARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 7108,
          provinsiId: 71,
          nama: "BOLAANG MONGONDOW UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 7109,
          provinsiId: 71,
          nama: "KEP. SIAU TAGULANDANG BIARO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 7210,
          provinsiId: 72,
          nama: "SIGI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 7211,
          provinsiId: 72,
          nama: "BANGGAI LAUT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 7212,
          provinsiId: 72,
          nama: "MOROWALI UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 7271,
          provinsiId: 72,
          nama: "KOTA PALU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 7201,
          provinsiId: 72,
          nama: "BANGGAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 7202,
          provinsiId: 72,
          nama: "POSO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 7203,
          provinsiId: 72,
          nama: "DONGGALA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 7204,
          provinsiId: 72,
          nama: "TOLI TOLI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 7205,
          provinsiId: 72,
          nama: "BUOL",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 7206,
          provinsiId: 72,
          nama: "MOROWALI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 7207,
          provinsiId: 72,
          nama: "BANGGAI KEPULAUAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 7208,
          provinsiId: 72,
          nama: "PARIGI MOUTONG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 7209,
          provinsiId: 72,
          nama: "TOJO UNA UNA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 7310,
          provinsiId: 73,
          nama: "PANGKAJENE KEPULAUAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 7311,
          provinsiId: 73,
          nama: "BARRU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 7312,
          provinsiId: 73,
          nama: "SOPPENG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 7313,
          provinsiId: 73,
          nama: "WAJO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "13"
        },
        {
          id: 7314,
          provinsiId: 73,
          nama: "SIDENRENG RAPPANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "14"
        },
        {
          id: 7315,
          provinsiId: 73,
          nama: "PINRANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "15"
        },
        {
          id: 7316,
          provinsiId: 73,
          nama: "ENREKANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "16"
        },
        {
          id: 7317,
          provinsiId: 73,
          nama: "LUWU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "17"
        },
        {
          id: 7318,
          provinsiId: 73,
          nama: "TANA TORAJA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "18"
        },
        {
          id: 7322,
          provinsiId: 73,
          nama: "LUWU UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "22"
        },
        {
          id: 7324,
          provinsiId: 73,
          nama: "LUWU TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "24"
        },
        {
          id: 7326,
          provinsiId: 73,
          nama: "TORAJA UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "26"
        },
        {
          id: 7371,
          provinsiId: 73,
          nama: "KOTA MAKASSAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 7372,
          provinsiId: 73,
          nama: "KOTA PARE PARE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 7373,
          provinsiId: 73,
          nama: "KOTA PALOPO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "73"
        },
        {
          id: 7301,
          provinsiId: 73,
          nama: "KEPULAUAN SELAYAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 7302,
          provinsiId: 73,
          nama: "BULUKUMBA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 7303,
          provinsiId: 73,
          nama: "BANTAENG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 7304,
          provinsiId: 73,
          nama: "JENEPONTO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 7305,
          provinsiId: 73,
          nama: "TAKALAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 7306,
          provinsiId: 73,
          nama: "GOWA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 7307,
          provinsiId: 73,
          nama: "SINJAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 7308,
          provinsiId: 73,
          nama: "BONE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 7309,
          provinsiId: 73,
          nama: "MAROS",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 7410,
          provinsiId: 74,
          nama: "BUTON UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 7411,
          provinsiId: 74,
          nama: "KOLAKA TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 7412,
          provinsiId: 74,
          nama: "KONAWE KEPULAUAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 7413,
          provinsiId: 74,
          nama: "MUNA BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "13"
        },
        {
          id: 7414,
          provinsiId: 74,
          nama: "BUTON TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "14"
        },
        {
          id: 7415,
          provinsiId: 74,
          nama: "BUTON SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "15"
        },
        {
          id: 7471,
          provinsiId: 74,
          nama: "KOTA KENDARI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 7472,
          provinsiId: 74,
          nama: "KOTA BAU BAU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 7401,
          provinsiId: 74,
          nama: "KOLAKA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 7402,
          provinsiId: 74,
          nama: "KONAWE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 7403,
          provinsiId: 74,
          nama: "MUNA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 7404,
          provinsiId: 74,
          nama: "BUTON",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 7405,
          provinsiId: 74,
          nama: "KONAWE SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 7406,
          provinsiId: 74,
          nama: "BOMBANA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 7407,
          provinsiId: 74,
          nama: "WAKATOBI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 7408,
          provinsiId: 74,
          nama: "KOLAKA UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 7409,
          provinsiId: 74,
          nama: "KONAWE UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 7571,
          provinsiId: 75,
          nama: "KOTA GORONTALO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 7501,
          provinsiId: 75,
          nama: "GORONTALO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 7502,
          provinsiId: 75,
          nama: "BOALEMO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 7503,
          provinsiId: 75,
          nama: "BONE BOLANGO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 7504,
          provinsiId: 75,
          nama: "POHUWATO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 7505,
          provinsiId: 75,
          nama: "GORONTALO UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 7601,
          provinsiId: 76,
          nama: "PASANGKAYU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 7602,
          provinsiId: 76,
          nama: "MAMUJU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 7603,
          provinsiId: 76,
          nama: "MAMASA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 7604,
          provinsiId: 76,
          nama: "POLEWALI MANDAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 7605,
          provinsiId: 76,
          nama: "MAJENE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 7606,
          provinsiId: 76,
          nama: "MAMUJU TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 8171,
          provinsiId: 81,
          nama: "KOTA AMBON",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 8172,
          provinsiId: 81,
          nama: "KOTA TUAL",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 8101,
          provinsiId: 81,
          nama: "MALUKU TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 8102,
          provinsiId: 81,
          nama: "MALUKU TENGGARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 8103,
          provinsiId: 81,
          nama: "KEPULAUAN TANIMBAR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 8104,
          provinsiId: 81,
          nama: "BURU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 8105,
          provinsiId: 81,
          nama: "SERAM BAGIAN TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 8106,
          provinsiId: 81,
          nama: "SERAM BAGIAN BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 8107,
          provinsiId: 81,
          nama: "KEPULAUAN ARU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 8108,
          provinsiId: 81,
          nama: "MALUKU BARAT DAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 8109,
          provinsiId: 81,
          nama: "BURU SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "09"
        },
        {
          id: 8271,
          provinsiId: 82,
          nama: "KOTA TERNATE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 8272,
          provinsiId: 82,
          nama: "KOTA TIDORE KEPULAUAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "72"
        },
        {
          id: 8201,
          provinsiId: 82,
          nama: "HALMAHERA BARAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 8202,
          provinsiId: 82,
          nama: "HALMAHERA TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 8203,
          provinsiId: 82,
          nama: "HALMAHERA UTARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 8204,
          provinsiId: 82,
          nama: "HALMAHERA SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 8205,
          provinsiId: 82,
          nama: "KEPULAUAN SULA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 8206,
          provinsiId: 82,
          nama: "HALMAHERA TIMUR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 8207,
          provinsiId: 82,
          nama: "PULAU MOROTAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 8208,
          provinsiId: 82,
          nama: "PULAU TALIABU",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 9110,
          provinsiId: 91,
          nama: "SARMI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "10"
        },
        {
          id: 9111,
          provinsiId: 91,
          nama: "KEEROM",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 9115,
          provinsiId: 91,
          nama: "WAROPEN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "15"
        },
        {
          id: 9119,
          provinsiId: 91,
          nama: "SUPIORI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "19"
        },
        {
          id: 9120,
          provinsiId: 91,
          nama: "MAMBERAMO RAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "20"
        },
        {
          id: 9171,
          provinsiId: 91,
          nama: "KOTA JAYAPURA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 9103,
          provinsiId: 91,
          nama: "JAYAPURA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 9105,
          provinsiId: 91,
          nama: "KEPULAUAN YAPEN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 9106,
          provinsiId: 91,
          nama: "BIAK NUMFOR",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 9211,
          provinsiId: 92,
          nama: "MANOKWARI SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "11"
        },
        {
          id: 9212,
          provinsiId: 92,
          nama: "PEGUNUNGAN ARFAK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "12"
        },
        {
          id: 9202,
          provinsiId: 92,
          nama: "MANOKWARI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 9203,
          provinsiId: 92,
          nama: "FAK FAK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 9206,
          provinsiId: 92,
          nama: "TELUK BINTUNI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 9207,
          provinsiId: 92,
          nama: "TELUK WONDAMA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 9208,
          provinsiId: 92,
          nama: "KAIMANA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 9301,
          provinsiId: 93,
          nama: "MERAUKE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 9302,
          provinsiId: 93,
          nama: "BOVEN DIGOEL",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 9303,
          provinsiId: 93,
          nama: "MAPPI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 9304,
          provinsiId: 93,
          nama: "ASMAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 9401,
          provinsiId: 94,
          nama: "NABIRE",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 9402,
          provinsiId: 94,
          nama: "PUNCAK JAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 9403,
          provinsiId: 94,
          nama: "PANIAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 9404,
          provinsiId: 94,
          nama: "MIMIKA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 9405,
          provinsiId: 94,
          nama: "PUNCAK",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 9406,
          provinsiId: 94,
          nama: "DOGIYAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 9407,
          provinsiId: 94,
          nama: "INTAN JAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 9408,
          provinsiId: 94,
          nama: "DEIYAI",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 9501,
          provinsiId: 95,
          nama: "JAYAWIJAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 9502,
          provinsiId: 95,
          nama: "PEGUNUNGAN BINTANG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 9503,
          provinsiId: 95,
          nama: "YAHUKIMO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 9504,
          provinsiId: 95,
          nama: "TOLIKARA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 9505,
          provinsiId: 95,
          nama: "MAMBERAMO TENGAH",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        },
        {
          id: 9506,
          provinsiId: 95,
          nama: "YALIMO",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "06"
        },
        {
          id: 9507,
          provinsiId: 95,
          nama: "LANNY JAYA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "07"
        },
        {
          id: 9508,
          provinsiId: 95,
          nama: "NDUGA",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "08"
        },
        {
          id: 9671,
          provinsiId: 96,
          nama: "KOTA SORONG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "71"
        },
        {
          id: 9601,
          provinsiId: 96,
          nama: "SORONG",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "01"
        },
        {
          id: 9602,
          provinsiId: 96,
          nama: "SORONG SELATAN",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "02"
        },
        {
          id: 9603,
          provinsiId: 96,
          nama: "RAJA AMPAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "03"
        },
        {
          id: 9604,
          provinsiId: 96,
          nama: "TAMBRAUW",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "04"
        },
        {
          id: 9605,
          provinsiId: 96,
          nama: "MAYBRAT",
          createdAt: "2024-07-28T06:16:53.615Z",
          updatedAt: "2024-07-28T06:16:53.615Z",
          kode: "05"
        }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Kabupatens', null, {});
  },
};
