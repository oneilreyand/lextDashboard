import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/index.jsx';
import Modal from '../../components/Modal/index.jsx';
import Pagination from '../../components/Pagenation/index.jsx';
import SearchComponent from '../../components/SearchInput/index.jsx';
import SlideModal from '../../components/SlideModal/index.jsx';
import DynamicInput from '../../components/DynamicInput/index.jsx';
import MenuItem from '../../components/MenuItem/index.jsx';
import ButtonIcon from '../../components/ButtonIcon/index.jsx';
import isEmpty from '../../utils/chekEmptyObj/index.jsx';
import Spiner from '../../components/Spiner/index.jsx'
import capitalizeWords from '../../utils/capitalizeWords.jsx';
import { 
  Container,
  Grid,
  GridItem,
  ButtonContainer,
  ScrollableTableContainer
} from '../../utils/GlobalStyle/lextaCore.jsx';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '../../components/Table/index.jsx';
import { TruncateText } from '../../utils/index.jsx';
import { getCabangByTravelId, deleteCabang, createCabang, updateCabang } from '../../store/action/cabangAction.jsx';
import { dateConverter } from '../../utils/index.jsx';
import {
  getProvinsiById,
  getKabupatenById,
  getKecamatanById,
  getAllProvinsi,
  kabupatenProvinsiId,
  kecamatanKabupatenId,
} from '../../store/action/wilayahIndonesia.jsx';
import {
  chartSvg,
  trashSvg,
} from '../../assets/index.jsx';

const CabangComponent = () => {
  const dispatch = useDispatch();
  const cabangData = useSelector((state) => state.cabang.dataCabang);
  const user = useSelector((state) => state.auth.user);

  //PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [isSideModalOpen, setSideModalIsOpen] = useState(false);
  const [isOpenModalDelConfrm, setIsOpenModalDelConfirm] = useState(false)
  const [isLoadingSearch, setIsloadingSearch] = useState(false);
  const [isEditCabang, setIseditCabang] = useState(true)
  const [isEditCabangLoading, setIsEditCabangLoading] = useState(false);
  const [isAddCabangLoading, setIsAddCabangLoading] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [dataCabang, setDataCabang] = useState({});
  const [idCabangDelete, setIdCabangDelete] = useState('')
  const [listProvinsi, setListProvinsi] = useState([]);
  const [listKabupaten, setListKabupaten] = useState([]);
  const [listKecamatan, setListKecamatan] = useState([]);
  const [dataProvinsi, setDataProvinsi] = useState({});
  const [dataKabupaten, setDataKabupaten] = useState({})
  const [dataKecamatan, setDataKecamatan] = useState({});
  const [disabledProfileKabupaten, setIsDisabledProfileKabupaten] = useState(true)
  const [disabledProfileKecamatan, setIsDisabledProfileKecamatan] = useState(true)
  const [newDataProvinsi, setNewDataProfinsi] = useState({});
  const [newDataKabupaten, setNewDataKabupaten] = useState({});
  const [newDataKecamatan, setNewDataKecamatan] = useState({});
  const [disabledKabupaten, setIsDisabledKabupaten] = useState(true)
  const [disabledKecamatan, setIsDisabledKecamatan] = useState(true)
  



  useEffect(() => {
    if (user.travelId) {
      dispatch(getCabangByTravelId(user.travelId));
      dispatch(getAllProvinsi()).then(res => {
        setListProvinsi(res);
      })
    }
  }, [dispatch, user.travelId]);


  const populateDataPropinsi = (provinsiId) => {
    if(provinsiId) {
      dispatch(getProvinsiById(provinsiId)).then((res) => {
        setDataProvinsi(res);
      })
    }
  }

  const populateDataKabupaten = (kabupatenId) => {
    if(kabupatenId) {
      dispatch(getKabupatenById(kabupatenId)).then((res) => {
        setDataKabupaten(res);
      })
    }
  }

  const populateDataKecamatan = (kecamatanId) => {
    if(kecamatanId) {
      dispatch(getKecamatanById(kecamatanId)).then((res) => {
        setDataKecamatan(res);
      })
    }
  }

  useEffect(() => {
    setFilteredData(cabangData);
  }, [cabangData]);

  const [isPendaftaranOpen, setIsPendaftaranOpen] = useState(false);

  const [inputValues, setInputValues] = useState({
    email: '',
    cabangName: '',
    phoneNumber: '',
    cabangEmail: '',
    officePhoneNumber: '',
    cabangAddress: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    cabangName: '',
    phoneNumber: '',
    cabangEmail: '',
    officePhoneNumber: '',
    cabangAddress: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
  });

  const clearError = {
    email: '',
    cabangName: '',
    phoneNumber: '',
    cabangEmail: '',
    officePhoneNumber: '',
    cabangAddress: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
  }

  const [editErrors, setEditErrors] = useState({
    name: '',
    officePhoneNumber: '',
    address: '',
    dataProvinsi: '',
    dataKabupaten: '',
    dataKecamatan: '',
  });

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

 

  const handleCancel = () => {
    setIsPendaftaranOpen(false);

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });

    if (value) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSearch = async (keyword) => {
    setIsloadingSearch(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = cabangData.filter(item =>
          Object.values(item).some(val =>
            String(val).toLowerCase().includes(keyword.toLowerCase())
          )
        );
        setFilteredData(filtered.length > 0 ? filtered : cabangData);
        setCurrentPage(1);
        setIsloadingSearch(false);
        resolve();
      }, 2000);
    });
  };

  const handleOpenSideModal = (datum) => {
    setDataCabang(datum);
    setSideModalIsOpen(true);
    if(datum.provinsi){
      populateDataPropinsi(datum.provinsi)
    }
    if(datum.kota) {
      populateDataKabupaten(datum.kota)
    }
    if(datum.kecamatan) {
      populateDataKecamatan(datum.kecamatan)
    }
  };

  const handleCloseSideModal = () => {
    setSideModalIsOpen(false);
    setIseditCabang(true);
    setIsDisabledProfileKecamatan(true);
    setIsDisabledProfileKabupaten(true);
  };

  const handleOpenPendaftaran = () => {
    setIsPendaftaranOpen(true);
  };

  const handleClosePendaftaran = () => {
    setIsPendaftaranOpen(false);
  };

  // CABANG PROFILE CONTENT
  const cabangProfile = () =>{
    return (
     <div style={{ width: '100%' }}>
        <DynamicInput 
          label="Cabang Name"
          placeholder="Sahabat Umrah Cabang Utama" 
          name="name"
          value={capitalizeWords(dataCabang.name)} 
          onChange={handleChangeEdit} 
          disabled={isEditCabang}
          error={editErrors.name}
        />
        {/* <DynamicInput 
          label="Cabang Email"
          placeholder="sahabat_cabang_utama@umrah.com" 
          value={dataCabang.cabangEmail} 
          name="cabangEmail"
          onChange={handleChangeEdit} 
          // error={errors.cabangEmail}
          disabled={isEditCabang}
        /> */}
        <DynamicInput 
          label="Cabang Phone Number"
          placeholder="0812345678900" 
          name="officePhoneNumber"
          value={dataCabang.officePhoneNumber} 
          onChange={handleChangeEdit} 
          type={'number'}
          error={editErrors.officePhoneNumber}
          disabled={isEditCabang}
        />
        <DynamicInput 
          label="Address"
          placeholder="Jl. Sahabat umrah no.1" 
          name="address"
          value={capitalizeWords(dataCabang.address)} 
          onChange={handleChangeEdit} 
          error={editErrors.address}
          disabled={isEditCabang}
        />
        <DynamicInput 
          label="Provinsi"
          name="dataProvinsi"
          value={dataProvinsi && dataProvinsi.nama ?dataProvinsi.nama : ''} 
          error={editErrors.dataProvinsi}
          disabled={isEditCabang}
        >
           {listProvinsi.map((e, i) => (
            <MenuItem 
            key={`${i}+1`}
            onClick={() => handleChangeProvinsiProfile(e)} 
          >
            {e.nama}
          </MenuItem>
          ))}
        </DynamicInput>
         <DynamicInput 
          label="Kota/Kabupaten"
          name="dataKabupaten"
          value={dataKabupaten && dataKabupaten.nama ?dataKabupaten.nama : ''} 
          onChange={handleChange} 
          error={editErrors.dataKabupaten}
          disabled = {disabledProfileKabupaten}
        >
           {listKabupaten.map((e, i) => (
          <MenuItem 
            key={`${i}+1`}
            onClick={() => handleChangeKabupatenProfile(e)}
          >
            {e.nama}
          </MenuItem>
          ))}
        </DynamicInput>
         <DynamicInput 
          label="Kecamatan"
          name="dataKecamatan"
          value={dataKecamatan && dataKecamatan.nama ?dataKecamatan.nama : ''} 
          onChange={handleChange} 
          error={editErrors.dataKecamatan}
          disabled = {disabledProfileKecamatan}
        >
          {listKecamatan.map((e, i) => (
          <MenuItem 
            key={`${i}+1`}
            onClick={() => handleChangeKecamatanProfile(e)}
            >
            {e.nama}
          </MenuItem>
          ))}
        </DynamicInput>
        <div style={{ marginTop: '4rem' }}/>
        {isEditCabang &&
          <Button
            onClick={() => handleEdit()}
            iconPosition='right'
            >
            Edit
          </Button>
        }
        {!isEditCabang &&
          <>
            <Button
              iconPosition='right'
              onClick={() => handleSimpanEditCabang()}
              icon = {
                isEditCabangLoading && 
                <Spiner 
                  size={15}
                  color={'secondary'}
                />
              }
            >
              Simpan
            </Button>
            <Button
              iconPosition='right'
              onClick={() => handleCloseSideModal()}
              variant='outline'
            >
              Batal
            </Button>
          </>
        }
      </div>
    )
  }
  // CABANG DETAIL CONTENT
  const CabangDetail = () => {
    return (
      <div>detail cabang</div>
    )
  }

  // ngerubah data data kecamatan di form tambah cabang
  const handleChangeNewProvinsi = (e) => {
    setNewDataProfinsi(e);
    setIsDisabledKabupaten(false);
    setIsDisabledKecamatan(true);
    dispatch(kabupatenProvinsiId(e.id)).then(res => {
      setListKabupaten(res);
      setNewDataKabupaten({});
    })
  }

  // ngerubah data data kabupaten di form tambah cabang
  const handleChangeNewKabupaten = (e) => {
    setNewDataKabupaten(e);
    setIsDisabledKecamatan(false);
    dispatch(kecamatanKabupatenId(e.id)).then(res => {
      setListKecamatan(res);
      setNewDataKecamatan({});
    })
  }

  // ngerubah data data kecamatan di form tambah cabang
  const handleChangeNewKecamatan = (e) => {
    setNewDataKecamatan(e)
  }

  const addCabangForm = () => {
    return (
      <div style={{ width: '100%' }}>
        <DynamicInput 
          label="Cabang Name"
          placeholder="Sahabat Umrah Cabang" 
          name="cabangName"
          value={capitalizeWords(inputValues.cabangName)} 
          onChange={handleChange} 
          error={errors.cabangName}
        />
        {/* <DynamicInput 
          label="Cabang Email"
          placeholder="sahabat@umrah.cabang.com" 
          value={inputValues.cabangEmail} 
          name="cabangEmail"
          onChange={handleChange} 
          error={errors.cabangEmail}
        /> */}
        <DynamicInput 
          label="Cabang Phone Number"
          placeholder="0812345678900" 
          name="cabangPhoneNumber"
          value={inputValues.cabangPhoneNumber} 
          onChange={handleChange} 
          type={'number'}
          error={errors.cabangPhoneNumber}
        />
        <DynamicInput 
          label="Alamat Cabang"
          placeholder="Jl. Cabang utama" 
          name="cabangAddress"
          value={capitalizeWords(inputValues.cabangAddress)} 
          onChange={handleChange} 
          error={errors.cabangAddress}
        />
        <DynamicInput 
          label="Provinsi"
          placeholder="provinsi" 
          value={newDataProvinsi.nama} 
          name="provinsi"
          error={errors.newDataProvinsi}
          >
          {listProvinsi.map((e, i) => (
            <MenuItem 
            key={`${i}+1`}
            onClick={() => handleChangeNewProvinsi(e)} 
          >
            {e.nama}
          </MenuItem>
          ))}
        </DynamicInput>
        <DynamicInput 
          label="Kota/Kabupaten"
          placeholder="kota/kabupaten" 
          value={newDataKabupaten.nama} 
          name="kabupaten"
          error={errors.newDataProvinsi}
          disabled={disabledKabupaten}
        >
          {listKabupaten.map((e, i) => (
          <MenuItem 
            key={`${i}+1`}
            onClick={() => handleChangeNewKabupaten(e)}
          >
            {e.nama}
          </MenuItem>
          ))}
        </DynamicInput>
        <DynamicInput 
          label="Kecamatan"
          placeholder="Kecamatan" 
          value={newDataKecamatan.nama} 
          name="kecamatan"
          error={errors.newDataKecamatan}
          disabled={disabledKecamatan}
        >
          {listKecamatan.map((e, i) => (
          <MenuItem 
            key={`${i}+1`}
            onClick={() => handleChangeNewKecamatan(e)}
            >
            {e.nama}
          </MenuItem>
          ))}
        </DynamicInput>
      </div>
    )
  }

  const handleDeleteCabang = async () => {
    try {
      await dispatch(deleteCabang(idCabangDelete))
      await dispatch(getCabangByTravelId(user.travelId));
      setIsOpenModalDelConfirm(!isOpenModalDelConfrm);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteContentInfo = () => {
    return(
      <div>
        Yakin ingin menghapus cabang ini!!
        <Button onClick={() => handleDeleteCabang()}>ya</Button>
      </div>
    )
  }

  // const validateEmail = (email) => {
  //   // Simple email validation regex
  //   // eslint-disable-next-line no-useless-escape
  //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
  //   return re.test(String(email).toLowerCase());
  // };

  // ADD CABANG
  const handleAddCabang = async () => {
    const newErrors = {};
    let hasErrors = false;

    // Validasi email
    // if (!inputValues.cabangEmail) {
    //   newErrors.cabangEmail = 'Field ini tidak boleh kosong';
    //   hasErrors = true;
    // } else if (!validateEmail(inputValues.cabangEmail)) {
    //   newErrors.email = 'Email tidak valid';
    //   hasErrors = true;
    // }

     // Validasi nama cabang
     if (!inputValues.cabangName) {
      newErrors.cabangName = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }

     // Validasi nama nomor telepon cabang
     if (!inputValues.cabangPhoneNumber) {
      newErrors.cabangPhoneNumber = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }

     // Validasi nama nomor alamat cabang
     if (!inputValues.cabangAddress) {
      newErrors.cabangAddress = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }

     // Validasi nama nomor provinsi cabang
     if (isEmpty(newDataProvinsi)) {
      newErrors.newDataProvinsi = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }

     // Validasi nama nomor kota cabang
     if (isEmpty(newDataKabupaten)) {
      newErrors.newDataKabupaten = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }

     // Validasi nama nomor kecamatans cabang
     if (isEmpty(newDataKecamatan)) {
      newErrors.newDataKecamatan = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }

    console.log(newErrors, 'newErrors');
  
    // Jika ada kesalahan, tidak melanjutkan eksekusi
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
    
    // Jika tidak ada kesalahan, lanjutkan
    if(!hasErrors){
      setIsAddCabangLoading(true);
      try {
        const dataNewCabang = {
          name: inputValues.cabangName,
          address: inputValues.cabangAddress,
          provinsi: newDataProvinsi.id,
          kota: newDataKabupaten.id,
          kecamatan: newDataKecamatan.id,
          email: inputValues.cabangEmail,
          officePhoneNumber: inputValues.cabangPhoneNumber,
          travelId: user.travelId,
        };
        await dispatch(createCabang(dataNewCabang));
        dispatch(getCabangByTravelId(user.travelId));
        setIsPendaftaranOpen(false);
        setIsAddCabangLoading(false);
        setInputValues({
          ...inputValues,
          cabangName: '',
          cabangPhoneNumber: '',
          cabangAddress: '',
          email: '',
          travelId: '',
        });
        setNewDataProfinsi({});
        setNewDataKabupaten({});
        setNewDataKecamatan({});
        setIsDisabledKabupaten(true);
        setIsDisabledKecamatan(true);
        setErrors(clearError);
      } catch (error) {
        setIsAddCabangLoading(false);
        console.log(error);
      }
    }
  };
  
  const handleOpenDeleteConfrm = (e) => {
    setIsOpenModalDelConfirm(!isOpenModalDelConfrm);
    setIdCabangDelete(e.id);
  }

  // UPDATE CABANG
  const handleEdit = () => {
    console.log('edit');
    setIseditCabang(false)
  }

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setDataCabang({
      ...dataCabang,
      [name]: value
    })
  }

  const handleSimpanEditCabang = async() => {
    const newErrors = {};
    let hasErrors = false;

     // Validasi nama cabang
     if (!dataCabang.name) {
      newErrors.name = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }

     // Validasi nama nomor telepon cabang
     if (!dataCabang.officePhoneNumber) {
      newErrors.officePhoneNumber = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }

     // Validasi nama nomor alamat cabang
     if (!dataCabang.address) {
      newErrors.address = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }

     // Validasi nama nomor provinsi cabang
     if (isEmpty(dataProvinsi)) {
      newErrors.dataProvinsi = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }

     // Validasi nama nomor kota cabang
     if (isEmpty(dataKabupaten)) {
      newErrors.dataKabupaten = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }

     // Validasi nama nomor kecamatans cabang
     if (isEmpty(dataKecamatan)) {
      newErrors.dataKecamatan = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }
  
    // Jika ada kesalahan, tidak melanjutkan eksekusi
    if (hasErrors) {
      setEditErrors(newErrors);
      return;
    }
    
    // Jika tidak ada kesalahan, lanjutkan
    if(!hasErrors){
      try {
        setIsEditCabangLoading(true);
        setTimeout(async () => {
          const dataEditCabang = {
            name: dataCabang.name,
            address: dataCabang.address,
            provinsi: dataProvinsi.id,
            kota: dataKabupaten.id,
            kecamatan: dataKecamatan.id,
            officePhoneNumber: dataCabang.officePhoneNumber,
            travelId: user.travelId,
          };
          await dispatch(updateCabang(dataCabang.id, dataEditCabang));
          setIsEditCabangLoading(false);
        }, 3000)
        // dispatch(getCabangByTravelId(user.travelId));
      } catch (error) {
        setIsEditCabangLoading(false);
        console.log(error);
      }
    }
  }

  const handleChangeProvinsiProfile = (e) => {
    setDataProvinsi(e)
    dispatch(kabupatenProvinsiId(e.id)).then(res => {
      setDataKabupaten({});
      setDataKecamatan({});
      setListKabupaten(res);
      setIsDisabledProfileKabupaten(false)
      setIsDisabledKecamatan(true)

    })
  }

  const handleChangeKabupatenProfile = (e) => {
    setDataKabupaten(e);
    setIsDisabledProfileKecamatan(false);
    dispatch(kecamatanKabupatenId(e.id)).then(res => {
      setListKecamatan(res);
      setDataKecamatan({});
      setIsDisabledKecamatan(false)
    })
  }

  const handleChangeKecamatanProfile = (e) => {
    setDataKecamatan(e)
  }
  useEffect(() => {
    console.log('Cabang component loaded');
  }, []);


  return (
    <>
      <Grid direction={'row'} size={3}>
        <GridItem>
          <Button
            variant='contained'
            size='small'
            onClick={handleOpenPendaftaran}
          >
            Pendaftaran Cabang
          </Button>
        </GridItem>
      </Grid>
      <Container>
        <Modal
          size="large"
          title="Pendaftaran Cabang"
          subtitle=""
          onClose={handleClosePendaftaran}
          onCancel={handleCancel}
          isOpen={isPendaftaranOpen}
          isModalAction
          onSubmit={handleAddCabang}
          isLoadingSubmit={isAddCabangLoading}
        >
          {addCabangForm()}
        </Modal>
        <Modal
           size="small"
           title=""
           subtitle=""
           onClose={handleOpenDeleteConfrm}
           onCancel={handleOpenDeleteConfrm}
           isOpen={isOpenModalDelConfrm}
          //  isModalAction
          //  onSubmit={handleAddCabang}
        >
          {deleteContentInfo()}
        </Modal>
        <SlideModal
          isOpen={isSideModalOpen}
          onClose={handleCloseSideModal}
          from="right"
          normalComponent={cabangProfile()}
          maximizeComponent={CabangDetail()}
          isMaximizeHandler
        />
        <Grid direction={'row'} size={3}>
          <GridItem>
            <SearchComponent
              onSearch={handleSearch}
              isLoading={isLoadingSearch}
            />
          </GridItem>
        </Grid>
        <Grid direction={'row'} size={12}>
          <GridItem>
            <ScrollableTableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>No</TableHeaderCell>
                    <TableHeaderCell>Nama Cabang</TableHeaderCell>
                    <TableHeaderCell>Tgl. Pembuatan Cabang</TableHeaderCell>
                    <TableHeaderCell>Action</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentData.map((datum, i) => (
                    <TableRow key={startIndex + i + 1}>
                      <TableCell>{startIndex + i + 1}</TableCell>
                    
                      <TableCell>{capitalizeWords(TruncateText(datum.name, 20))}</TableCell>
                      <TableCell>{dateConverter(datum.createdAt)}</TableCell>
                      <TableCell>
                        <ButtonContainer>
                          <ButtonIcon
                            icon={trashSvg}
                            onClick={() => handleOpenDeleteConfrm(datum)}
                            info={'Delete cabang'}
                          />
                          <ButtonIcon
                            icon={chartSvg}
                            onClick={() => handleOpenSideModal(datum)}
                            info={'Detail cabang'}
                          />
                        </ButtonContainer>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollableTableContainer>
            <Pagination
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
              totalRows={filteredData.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default CabangComponent;
