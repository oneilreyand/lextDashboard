import { useState } from 'react';
import DynamicInput from '../../components/DynamicInput';
import {
  Container,
  DynamicInputWrapper,
  FormWrapper,
  FormContainer,
  ButtonContainer,
} from './dashboarElements';
// import { useSelector } from 'react-redux';

import Button from '../../components/Button';
import Spiner from '../../components/Spiner'

function Dashboard() {
  // const [count, setCount] = useState(0);
  // const user = useSelector((state) => state.auth.user);
  const [inputValues, setInputValues] = useState({
    text: '',
    password: '',
    dropdown: '',
  });
  const [errors, setErrors] = useState({
    text: '',
    password: '',
    dropdown: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });

    if (!value) {
      setErrors({
        ...errors,
        [name]: 'Field cannot be empty'
      });
    } else {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };


  return (
    <>
      <Container>
        Form Control
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
              type="select"
              label="Dropdown"
              placeholder="Select an option"
              name="dropdown"
              value={inputValues.dropdown}
              onChange={handleChange}
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
              ]}
              error={errors.dropdown}
            />
            </DynamicInputWrapper>
            <ButtonContainer>
              <Button variant="contained" size="large">Contained Large Button</Button>
              <Button variant="outline" size="large">Outline Small Button</Button>
              <Button variant="contained" size="small" disabled>Disabled Button</Button>
              {/* <Button variant="outline" size="small" icon={<Spiner size={20} color={'secondary'} />} iconPosition="left">
                icon on left
              </Button> */}
              <Button variant="outline" size="small" icon={<Spiner size={20} color={'secondary'}/>} iconPosition="right">
                Icon on Right
              </Button>
            </ButtonContainer>
          </FormWrapper>
        </FormContainer>
      </Container>
    </>
  );
}

export default Dashboard;
