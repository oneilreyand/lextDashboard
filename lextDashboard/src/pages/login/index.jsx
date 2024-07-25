/* eslint-disable no-useless-escape */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, GridItem } from '../../utils/GlobalStyle/lextaCore';
import DynamicInput from '../../components/DynamicInput';
import Button from '../../components/Button';
import Spiner from '../../components/Spiner';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/action/authAction';
import {
  PasswordWrapper,
  IconButton,
  IconButtonWrapper,
  LogoIcon,
  FallingButton,
} from './loginElements';
import {
  eyesvg,
  eyeslashsvg,
  sahabatUmrahLogoWhite,
} from '../../assets';
import CustomLink from '../../components/CustomLink';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

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
    // Simple email validation regex
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    const newErrors = {};
    let hasErrors = false;

    // Validate email
    if (!inputValues.email) {
      newErrors.email = 'Field ini tidak boleh kosong';
      hasErrors = true;
    } else if (!validateEmail(inputValues.email)) {
      newErrors.email = 'Email tidak valid';
      hasErrors = true;
    }

    // Validate password
    if (!inputValues.password) {
      newErrors.password = 'Field ini tidak boleh kosong';
      hasErrors = true;
    } else if (inputValues.password.length < 6) {
      newErrors.password = 'Password harus lebih dari 6 karakter';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      try {
        setLoginLoading(true);
        dispatch(login(inputValues)).then(() => {
          navigate('/dashboard');
          setLoginLoading(false);
        })
        // Handle login logic here
      } catch (error) {
        setLoginLoading(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          {/* You can add content here for the left side */}
          <LogoIcon src={sahabatUmrahLogoWhite}/>
        </GridItem>
        <GridItem style={{ width: '50%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <form style={{ width: '80%', maxWidth: '400px' }} onSubmit={handleLogin}>
            <h2>Login</h2>
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
            <FallingButton>
              <Button
                variant='contained'
                type="submit"
                icon={loginLoading && <Spiner size={20} color={'secondary'} />}
                iconPosition="right"
                disabled={loginLoading}
              >
                Log In
              </Button>
            </FallingButton>
          <p>
            I dont have an account? <CustomLink to="/register">register here</CustomLink>
          </p>
          </form>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default LoginPage;
