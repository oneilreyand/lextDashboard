import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  GridItem
} from '../../utils/GlobalStyle/lextaCore';
import DynamicInput from '../../components/DynamicInput';
import Button from '../../components/Button';
import Spiner from '../../components/Spiner';
import {
  PasswordWrapper,
  IconButton,
  IconButtonWrapper,
  LogoIcon,
} from './registerElements';
import {
  eyesvg,
  eyeslashsvg,
  sahabatUmrahLogoWhite,
} from '../../assets';
import StepComponent from '../../components/StepComponent';
import {createTravel} from '../../store/action/travelAction';
import { createUser } from '../../store/action/userAction';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    travelName: '',
    phoneNumber: '',
    travelEmail: '',
    travelPhoneNumber: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    travelName: '',
    phoneNumber: '',
    travelEmail: '',
    travelPhoneNumber: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const steps = ['Submit Travel Info', 'Submit Owner Info'];

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

  const validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleNext = async () => {
    
    const newErrors = {};
    let hasErrors = false
    // Validate email
    if (!inputValues.travelEmail) {
      newErrors.travelEmail = 'Field ini tidak boleh kosong';
      hasErrors = true;
    } else if (!validateEmail(inputValues.travelEmail)) {
      newErrors.travelEmail = 'Travel email tidak valid';
      hasErrors = true;
    }
    

    if (!inputValues.travelName) {
      newErrors.travelName = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }


    if (!inputValues.travelPhoneNumber) {
      newErrors.travelPhoneNumber = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }
    
    setErrors(newErrors);
    
    if (!hasErrors) {
      try {
        setCurrentStep(1);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handlePrev = () => {
    setCurrentStep(0);
  };

  const handleCreateTravel = async () => {
    const newErrors = {};
    let hasErrors = false
    // Validate email
    if (!inputValues.email) {
      newErrors.email = 'Field ini tidak boleh kosong';
      hasErrors = true;
    } else if (!validateEmail(inputValues.email)) {
      newErrors.email = 'Travel email tidak valid';
      hasErrors = true;
    }
    

    if (!inputValues.password) {
      newErrors.password = 'Field ini tidak boleh kosong';
      hasErrors = true;
    }


    if (!inputValues.confirmPassword) {
      newErrors.confirmPassword = 'Field ini tidak boleh kosong';
      hasErrors = true;
    } else if (inputValues.password !== inputValues.confirmPassword) {
      newErrors.confirmPassword = 'Harus sama dengan password pertama';
      hasErrors = true;
    }
    
    setErrors(newErrors);

    const dataTravel = {
      name: inputValues.travelName,
      variant: 'Standar',
      phoneNumber: inputValues.travelPhoneNumber,
      email: inputValues.travelEmail,
    }
  
    
    if (!hasErrors) {
      try {
        setLoginLoading(true);
        // Await the dispatch to get the response
        const travel = await dispatch(createTravel(dataTravel));
        
        console.log(travel, 'res-->'); // Log the travel data to see what it contains
        
        const dataUser = {
          email: inputValues.email,
          password: inputValues.password,
          travelId: travel.data.id, // Access the id property
        };
        
        await dispatch(createUser(dataUser));
        navigate('/login');
        
        setInputValues({
          email: '',
          password: '',
          confirmPassword: '',
          travelName: '',
          phoneNumber: '',
          travelEmail: '',
          travelPhoneNumber: ''
        });
        
        setLoginLoading(false);
      } catch (error) {
        setLoginLoading(false);
        console.log(error); // Handle errors appropriately
      }
    }
    
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const stepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <DynamicInput 
              label="Travel Name"
              placeholder="Sahabat Umrah Travel" 
              name="travelName"
              value={inputValues.travelName} 
              onChange={handleChange} 
              error={errors.travelName}
            />
              <DynamicInput 
                label="Travel Email"
                placeholder="sahabat@umrah.com" 
                value={inputValues.travelEmail} 
                name="travelEmail"
                onChange={handleChange} 
                error={errors.travelEmail}
              />
            <DynamicInput 
              label="Travel Phone Number"
              placeholder="0812345678900" 
              name="travelPhoneNumber"
              value={inputValues.travelPhoneNumber} 
              onChange={handleChange} 
              type={'number'}
              error={errors.travelPhoneNumber}
            />
          </div>
        );
      case 1:
        return (
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <DynamicInput 
              label="Email"
              placeholder="Email" 
              value={inputValues.email} 
              name="email"
              onChange={handleChange} 
              error={errors.email}
            />
            <PasswordWrapper>
              <DynamicInput 
                label="Password"
                placeholder="Password" 
                name="password"
                value={inputValues.password} 
                onChange={handleChange} 
                type={showPassword ? 'text' : 'password'}
                error={errors.password}
                info="Password anda harus lebih besar dari 6 digit"
              />
              <IconButtonWrapper>
                <IconButton
                  onClick={togglePasswordVisibility}
                  src={showPassword ? eyesvg : eyeslashsvg}/>
              </IconButtonWrapper>
            </PasswordWrapper>
            <PasswordWrapper>
              <DynamicInput 
                label="Confirm Password"
                placeholder="Confirm Password" 
                name="confirmPassword"
                value={inputValues.confirmPassword} 
                onChange={handleChange} 
                type={showPassword ? 'text' : 'password'}
                error={errors.confirmPassword}
                info="Confirm password anda harus sama dengan password yg anda buat"
              />
              <IconButtonWrapper>
                <IconButton
                  onClick={togglePasswordVisibility}
                  src={showPassword ? eyesvg : eyeslashsvg}/>
              </IconButtonWrapper>
            </PasswordWrapper>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container noPadding style={{ height: '100vh' }}>
      <Grid direction="row" size={6}>
        <GridItem style={{ 
          width: '50%',
          height: '100vh',
          background: '#5D87ff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <LogoIcon src={sahabatUmrahLogoWhite}/>
        </GridItem>
        <GridItem style={{ width: '50%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '80%', maxWidth: '400px' }}>
            <h2>{steps[currentStep]}</h2>
            <StepComponent steps={steps} currentStep={currentStep} />
            {stepContent()}
            {currentStep === 0 && <Button
              variant='contained'
              type="submit"
              icon={loginLoading && <Spiner size={20} color={'secondary'} />}
              iconPosition="right"
              onClick={handleNext}
            >
              Next
            </Button>}
            {currentStep === 1 && 
              <>
                <Button
                  variant='outline'
                  iconPosition="right"
                  disabled={loginLoading}
                  onClick={handlePrev}
                >
                  Prev
                </Button>
                <Button
                  variant='contained'
                  icon={loginLoading && <Spiner size={20} color={'secondary'} />}
                  iconPosition="right"
                  disabled={loginLoading}
                  onClick={handleCreateTravel}
                >
                  Create
                </Button>
              </>
            }
          </div>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default LoginPage;
