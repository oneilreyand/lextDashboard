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
import { getTravelById, updateTravel } from '../../store/action/travelAction';
import { useEffect } from 'react';
import ImageUploader from '../../components/imageUploader/index'
import MenuItem from '../../components/MenuItem';



const settingMenu = [
  {
    id: 1,
    mainMenu: 'Travel',
    subMenu: ['Profile Travel', 'Pks', 'Print Template']
  },
  {
    id: 2,
    mainMenu: 'Account',
    subMenu: ['Profile']
  },
  {
    id: 3,
    mainMenu: 'Employe',
    subMenu: ['Admin', 'Finace', 'Admin Gudang', 'Staf Operasional']
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
  const travel = useSelector((state) => state.travel.dataTravel);
  const [submenuTitle, setSubMenuTitle] = useState('Profile Travel')
  const [menuTitle, setMenuTitle] = useState({mainMenu: 'Travel'})
  const [isEditProfileTravel, setIsEditProfileTravel] = useState(true);
  const [loading, setLoading] = useState(false);

  const [dataProfileTravel, setDataProfileTravel] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    propinsi: '',
    kota: '',
    kelurahan: '',
    logo: '',
  });
  
  const [dataProfileTravelerrors, setDataProfileTravelErrors] = useState({});

  useEffect(() => {
    if (travel) {
      setDataProfileTravelErrors({});
      setDataProfileTravel({
        name: travel.name || '',
        phoneNumber: travel.phoneNumber || '',
        address: travel.address || '',
        propinsi: travel.propinsi || '',
        kota: travel.kota || '',
        kelurahan: travel.kelurahan || '',
        logo: travel.logo || '',
      });
    }
  }, [travel, isEditProfileTravel]);
  
  const handleChangeMenuSetting = (s, m) => {
    setSubMenuTitle(s)
    setMenuTitle(m)
    if(s === 'Profile Travel') {
      dispatch(getTravelById(user.travelId))
    }
  }

  const handleEditProfileClinic = () => {
    setIsEditProfileTravel(!isEditProfileTravel)
  }


  const handleChangeClinicProfile = (event) => {
    const { name, value } = event.target;
    setDataProfileTravel({
      ...dataProfileTravel,
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
  
      case 'Profile Travel':
        return (
          <>
            <FormContainer>
              <FormWrapper>
                <DynamicInputWrapper>
                  <DynamicInput 
                    label="Nama Clinic"
                    placeholder="Clinic Name" 
                    value={dataProfileTravel.name} 
                    name="name"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileTravelerrors.name && 'Nama Clinic tidak boleh kosong'}
                    disabled={isEditProfileTravel}
                  />
                  <DynamicInput 
                    label="Phone Number"
                    placeholder="056474575745" 
                    value={dataProfileTravel.phoneNumber} 
                    name="phoneNumber"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileTravelerrors.phoneNumber && 'Nomor telepon tidak boleh kosong'}
                    disabled={isEditProfileTravel}
                  />
                  <DynamicInputWrapper>
                    <ImageUploader
                      initialImage={dataProfileTravel.logo}
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
                    value={dataProfileTravel.address} 
                    name="address"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileTravelerrors.address && 'Alamat Clinic tidak boleh kosong'}
                    disabled={isEditProfileTravel}
                  />
                 <DynamicInput 
                    label="Propinsi"
                    placeholder="Propinsi" 
                    value={dataProfileTravel.propinsi} 
                    name="propinsi"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileTravelerrors.propinsi && 'Propinsi tidak boleh kosong'}
                    disabled={isEditProfileTravel}
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
                    value={dataProfileTravel.kota} 
                    name="kota"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileTravelerrors.kota && 'Kota tidak boleh kosong'}
                    disabled={isEditProfileTravel}
                  />
                  <DynamicInput 
                    label="Kelurahan"
                    placeholder="Kelurahan" 
                    value={dataProfileTravel.kelurahan} 
                    name="kelurahan"
                    onChange={handleChangeClinicProfile} 
                    error={dataProfileTravelerrors.kelurahan && 'kelurahan tidak boleh kosong'}
                    disabled={isEditProfileTravel}
                  />
                </DynamicInputWrapper>
             
                {/* <LogoImage src={clinic.logo} alt="Clinic Logo" /> */}
                <ButtonContainer>
                  <Button variant="contained" size="large" onClick={handleEditProfileClinic}>
                    {isEditProfileTravel ? 'Edit Profile' : 'Cancel Edit Profile'}
                    </Button>
                  {!isEditProfileTravel &&
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
      case 'Profile Travel':
        return (
          <GridItem >
          <DescTitle>
            {/* {menu} */}
          </DescTitle>
          <Desc>
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
      ...dataProfileTravel,
      [name]: value
    });

    if (!value) {
      // setErrors({
      //   ...dataProfileTravelerrors,
      //   [name]: 'Field cannot be empty'
      // });
    } else {
      setDataProfileTravelErrors({
        ...dataProfileTravelerrors,
        [name]: ''
      });
    }
  };

  useEffect(() => {
    dispatch(getTravelById(user.travelId))
  }, [dispatch, user.travelId])

  const hasErrors = () => {
    const dataProfileTravelErrors = {}

    Object.keys(dataProfileTravel).forEach(key => {
      if (dataProfileTravel[key].trim() === '') {
        dataProfileTravelErrors[key] = true; // Set error menjadi true untuk properti yang kosong
      } else {
        dataProfileTravelErrors[key] = false; // Set error menjadi false jika properti tidak kosong
      }
    });
    setDataProfileTravelErrors(dataProfileTravelErrors)
    return Object.values(dataProfileTravelErrors).some(error => error === true);
  }

  const handleEditClinicProfile = async () => {
    
    const errors = hasErrors();
    // Jika tidak ada error, lakukan penyimpanan data (misalnya kirim ke API)
    setLoading(true);
    if (!errors) {
      try {
        dispatch(updateTravel(user.travelId, dataProfileTravel));
        dispatch(showToast('success', 'Berhasi update data profile clinic'));
        setIsEditProfileTravel(true);
        setLoading(false);
      } catch (error) {
        console.error(error);
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
