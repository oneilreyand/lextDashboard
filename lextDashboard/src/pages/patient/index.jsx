import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from'react-redux';
import ListPatient from '../../components/ListPatient';
import Button from '../../components/Button';
import { getAllpatientByDate } from '../../store/action/patientAction'
import { PatientContent } from '../../pages';
import {
    DetailContainer,
    PatientName,
    PatientPhoto,
    Container,
    Grid,
    GridItem,
    // PatientGender,
    ButtonContainer,
    LefLine,
    ListButtonWrapper,
    ListButtonTitle,
    ListWrapper,
} from './patientElements';

function Patient() {
  const [isShowListPatient, setIsHowListPAatient] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [activeButton, setActiveButton] = useState('Patient Info');
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllpatientByDate())
  }, [dispatch]);
  
  const dataPatient = useSelector((state) => state.patien.patientList);
  
  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleButtonClick = (content) => {
    setActiveButton(content);
  };

  const handleIsShowListPatien = () => {
    setIsHowListPAatient(!isShowListPatient)
  }


  return (
    <Container direction="row">
      {selectedPatient ? (
        <>
          <Grid direction={'row'} size={3}>
            <GridItem>
              <DetailContainer>
                <PatientPhoto src={selectedPatient.avatar} alt={selectedPatient.name} />
                <PatientName>{selectedPatient.name}</PatientName>
                <ButtonContainer>
                  {['Patient Info', 'EMR', 'Record', 'CPPT',].map(content => (
                    <Button
                      key={content}
                      size='small'
                      onClick={() => handleButtonClick(content)}
                      isActive = {activeButton === content}
                      // variant='contained'
                    >
                      {content}
                    </Button>
                  ))}
                </ButtonContainer>
              </DetailContainer>
            </GridItem>
          </Grid>
          <LefLine/>
          <Grid direction={'row'} size={isShowListPatient ? 7.3 : 9.8}>
            <GridItem scrollable>
              <PatientContent
                 selectedContent={activeButton}
                 handleIsShowListPatien={handleIsShowListPatien}
                 isShowListPatient={isShowListPatient}
                 />
            </GridItem>
          </Grid>
        </>
      ) : null}
      <LefLine/>
      {isShowListPatient &&
        <Grid direction={'row'} size={2.5}>
          <GridItem>
            <ListWrapper isShowListPatient={isShowListPatient}>
              <ListButtonWrapper>
                <ListButtonTitle>
                  List Patient
                </ListButtonTitle>
              </ListButtonWrapper>
              <ListPatient patients={dataPatient} onPatientClick={handlePatientClick} />
            </ListWrapper>
          </GridItem>
        </Grid>
      }
    </Container>
  );
}

export default Patient;
