/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux'
import {showToast} from '../../store/action/toastAction';
import { useState } from 'react';
import {
  SettingsTitle,
  MainMenu,
  SubMenu,
  SubMenuContainer,
  FormContainer,
  FormWrapper,
  DynamicInputWrapper,
  ButtonContainer,
  ContentContainer,
  DescTitle,
  Desc,
} from './settingElements'
import { Container, Grid, GridItem } from '../../utils/GlobalStyle/lextaCore';
import DynamicInput from '../../components/DynamicInput';
import Button from '../../components/Button';
import Spiner from '../../components/Spiner'
import { getClinicById, updateClinic } from '../../store/action/clinicAction';
import { useEffect } from 'react';
import ImageUploader from '../../components/imageUploader/index'
import MenuItem from '../../components/MenuItem';



const settingMenu = [
  {
    id: 1,
    mainMenu: 'Clinik',
    subMenu: ['Profile Clinic', 'Pks', 'Print Template']
  },
  {
    id: 2,
    mainMenu: 'Account',
    subMenu: ['Profile']
  },
  {
    id: 3,
    mainMenu: 'Employe',
    subMenu: ['Doctor', 'Perawat', 'Apoterker', 'Staf']
  },
  {
    id: 4,
    mainMenu: 'Hak akses',
    subMenu: ['Add hak aksses']
  },
]

const propinsi = [
  {
    no: 1,
    name: 'Riau',
  },
  {
    no: 2,
    name: 'Sumatera Barat',
  },
  {
    no: 3,
    name: 'Sumatera Utara',
  },
  {
    no: 1,
    name: 'Riau',
  },
  {
    no: 2,
    name: 'Sumatera Barat',
  },
  {
    no: 3,
    name: 'Sumatera Utara',
  },
  {
    no: 1,
    name: 'Riau',
  },
  {
    no: 2,
    name: 'Sumatera Barat',
  },
  {
    no: 3,
    name: 'Sumatera Utara',
  },
  {
    no: 1,
    name: 'Riau',
  },
  {
    no: 2,
    name: 'Sumatera Barat',
  },
  {
    no: 3,
    name: 'Sumatera Utara',
  },
]


const Setting = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const clinic = useSelector((state) => state.clinic.dataClinic);
  const [submenuTitle, setSubMenuTitle] = useState('Profile Clinic')
  const [menuTitle, setMenuTitle] = useState({mainMenu: 'Clinik'})
  const [isEditProfileClinic, setIsEditProfileClinic] = useState(true);
  const [loading, setLoading] = useState(false);
  console.log(clinic, 'data clinic');

  const [dataProfileClinic, setDataProfileClinic] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    propinsi: '',
    kota: '',
    kelurahan: '',
    logo: '',
  });
  
  const [dataProfileClinicerrors, setDataProfileClinicErrors] = useState({});

  useEffect(() => {
    if (clinic) {
      setDataProfileClinicErrors({});
      setDataProfileClinic({
        name: clinic.name || '',
        phoneNumber: clinic.phoneNumber || '',
        address: clinic.address || '',
        propinsi: clinic.propinsi || '',
        kota: clinic.kota || '',
        kelurahan: clinic.kelurahan || '',
        logo: clinic.logo || '',
      });
    }
  }, [clinic, isEditProfileClinic]);
  
  const handleChangeMenuSetting = (s, m) => {
    setSubMenuTitle(s)
    setMenuTitle(m)
    if(s === 'Profile Clinic') {
      console.log(user, 'data user')
      dispatch(getClinicById(user.clinicId))
    }
  }

  const handleEditProfileClinic = () => {
    setIsEditProfileClinic(!isEditProfileClinic)
  }


  const handleChangeClinicProfile = (event) => {
    const { name, value } = event.target;
    setDataProfileClinic({
      ...dataProfileClinic,
      [name]: value
    });
   
  };

 

  const SettingsContent = (menu) => {
    switch (menu) {
      case 'Profile':
        return (
          <>
            <FormContainer>
              <FormWrapper>
                <DynamicInputWrapper>
                  <DynamicInput 
                    label="Text"
                    placeholder="Text" 
                    value={inputValues.userName} 
                    name="text"
                    onChange={handleChange} 
                    error={errors.userName}
                  />
                  <DynamicInput 
                    label="Password"
                    placeholder="Password" 
                    name="password"
                    value={inputValues.password} 
                    onChange={handleChange} 
                    type="password"
                    error={errors.password}
                    info="Password anda harus lebih besar dari 6 digit"
                  />
                  <DynamicInput 
                    label="Disabled Input"
                    placeholder="Disabled input" 
                    disabled 
                  />
                </DynamicInputWrapper>
                <DynamicInputWrapper>
                </DynamicInputWrapper>
                <DynamicInputWrapper>
                </DynamicInputWrapper>
              </FormWrapper>
              <FormWrapper>
                <DynamicInputWrapper>
                <DynamicInput 
                    label="Text"
                    placeholder="Text" 
                    value={inputValues.userName} 
                    name="text"
                    onChange={handleChange} 
                    error={errors.userName}
                  />
                </DynamicInputWrapper>
                <ButtonContainer>
                  <Button variant="contained" size="large">Edit</Button>
                  <Button variant="outline" size="small" icon={<Spiner size={20} color={'secondary'} />} iconPosition="right">
                    Icon on Right
                  </Button>
                </ButtonContainer>
              </FormWrapper>
            </FormContainer>
          </>
        );
  
      case 'Profile Clinic':
        return (
          <>
            <FormContainer>
              <FormWrapper>
                <DynamicInputWrapper>
                  <DynamicInput 
                    label="Nama Clinic"
                    placeholder="Clinic Name" 
                    value={dataProfileClinic.name} 
                    name="name"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileClinicerrors.name && 'Nama Clinic tidak boleh kosong'}
                    disabled={isEditProfileClinic}
                  />
                  <DynamicInput 
                    label="Phone Number"
                    placeholder="056474575745" 
                    value={dataProfileClinic.phoneNumber} 
                    name="phoneNumber"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileClinicerrors.phoneNumber && 'Nomor telepon tidak boleh kosong'}
                    disabled={isEditProfileClinic}
                  />
                  <DynamicInputWrapper>
                    <ImageUploader
                      initialImage={dataProfileClinic.logo}
                      // onSave={handleSaveImage}
                    />
                </DynamicInputWrapper>
               
                </DynamicInputWrapper>
                <DynamicInputWrapper>
                </DynamicInputWrapper>
              </FormWrapper>
              <FormWrapper>
                <DynamicInputWrapper>
                <DynamicInput 
                    label="Alamat"
                    placeholder="Alamat" 
                    value={dataProfileClinic.address} 
                    name="address"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileClinicerrors.address && 'Alamat Clinic tidak boleh kosong'}
                    disabled={isEditProfileClinic}
                  />
                 <DynamicInput 
                    label="Propinsi"
                    placeholder="Propinsi" 
                    value={dataProfileClinic.propinsi} 
                    name="propinsi"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileClinicerrors.propinsi && 'Propinsi tidak boleh kosong'}
                    disabled={isEditProfileClinic}
                  >
                    {propinsi.map((e, i) => (
                    <MenuItem key={`${i}+1`}>
                      {e.name}
                    </MenuItem>
                    ))}
                    </DynamicInput>
                 <DynamicInput 
                    label="Kota / Kabupaten"
                    placeholder="Kota" 
                    value={dataProfileClinic.kota} 
                    name="kota"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileClinicerrors.kota && 'Kota tidak boleh kosong'}
                    disabled={isEditProfileClinic}
                  />
                  <DynamicInput 
                    label="Kelurahan"
                    placeholder="Kelurahan" 
                    value={dataProfileClinic.kelurahan} 
                    name="kelurahan"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileClinicerrors.kelurahan && 'kelurahan tidak boleh kosong'}
                    disabled={isEditProfileClinic}
                  />
                </DynamicInputWrapper>
             
                {/* <LogoImage src={clinic.logo} alt="Clinic Logo" /> */}
                <ButtonContainer>
                  <Button variant="contained" size="large" onClick={handleEditProfileClinic}>
                    {isEditProfileClinic ? 'Edit Profile' : 'Cancel Edit Profile'}
                    </Button>
                  {!isEditProfileClinic &&
                    <Button
                      variant="outline"
                      size="small"
                      icon={loading && <Spiner size={20} color={'secondary'} />}
                      iconPosition="right"
                      onClick={handleEditClinicProfile}
                    >
                      Save
                    </Button>
                  }
                </ButtonContainer>
              </FormWrapper>
            </FormContainer>
          </>
        );
  
      default:
        return null;
    }
  };

  const descContent = (menu) => {
    switch (menu) {
      case 'Profile Clinic':
        return (
          <GridItem >
          <DescTitle>
            {menu}
          </DescTitle>
          <Desc>
          {'Fitur "Profile Clinic" dalam menu setting memungkinkan pengguna untuk melihat dan mengubah informasi terkait klinik. Fitur ini memberikan akses mudah dan terstruktur untuk mengelola data penting mengenai klinik.'}
          </Desc>
        </GridItem>
        )
      default:
        break;
    }
  }
  
  const [inputValues, setInputValues] = useState({
    text: '',
    password: '',
    dropdown: '',
  });

  const [errors] = useState({
    text: '',
    password: '',
    dropdown: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...dataProfileClinic,
      [name]: value
    });

    if (!value) {
      // setErrors({
      //   ...dataProfileClinicerrors,
      //   [name]: 'Field cannot be empty'
      // });
    } else {
      setDataProfileClinicErrors({
        ...dataProfileClinicerrors,
        [name]: ''
      });
    }
  };

  useEffect(() => {
    dispatch(getClinicById(user.clinicId))
  }, [dispatch, user.clinicId])

  const hasErrors = () => {
    const dataProfileClinicErrors = {}
    console.log(dataProfileClinicErrors , 'data errors');

    Object.keys(dataProfileClinic).forEach(key => {
      if (dataProfileClinic[key].trim() === '') {
        dataProfileClinicErrors[key] = true; // Set error menjadi true untuk properti yang kosong
      } else {
        dataProfileClinicErrors[key] = false; // Set error menjadi false jika properti tidak kosong
      }
    });
    console.log(dataProfileClinicErrors , 'data errors');

    setDataProfileClinicErrors(dataProfileClinicErrors)
    return Object.values(dataProfileClinicErrors).some(error => error === true);
  }

  const handleEditClinicProfile = async () => {
    
    const errors = hasErrors();
    // Jika tidak ada error, lakukan penyimpanan data (misalnya kirim ke API)
    setLoading(true);
    if (!errors) {
      try {
        dispatch(updateClinic(user.clinicId, dataProfileClinic));
        dispatch(showToast('success', 'Berhasi update data profile clinic'));
        setIsEditProfileClinic(true);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };


  return (
    <Container>
      <Container noPadding direction={'row'}>
        <Grid direction={'column'} size={3}>
          <GridItem >
            <SettingsTitle>
              Settings
            </SettingsTitle>
            {menuTitle.mainMenu}
          </GridItem>
        </Grid>
        <Grid direction={'row'} size={9}>
          {descContent(submenuTitle)}
        </Grid>
      </Container>
        <Container noPadding direction={'row'}>
          <Grid direction={'column'} size={3}>
              <GridItem>
            {settingMenu.map((menu) => (
              <>
                <MainMenu>
                  {menu.mainMenu}
                </MainMenu>

                <SubMenuContainer>
                  {
                menu.subMenu.map((subMenu, i) => (
                      <SubMenu onClick={() => handleChangeMenuSetting(subMenu, menu)} key={i}>
                        {subMenu}
                      </SubMenu>
                )
                    )
                  }
                  </SubMenuContainer>
              </>
            ))}
              </GridItem>
          </Grid>
          <Grid direction={'column'} size={9}>
          <GridItem>
            <ContentContainer>
            {SettingsContent(submenuTitle)}
            </ContentContainer>
          </GridItem>
          <GridItem>
          </GridItem>
          </Grid>
        </Container>
    </Container>
  );
};

export default Setting;
