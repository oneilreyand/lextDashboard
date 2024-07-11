import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ListPatientContainer, ListPatientItem } from './listPatientElements';

const ListPatient = ({ patients, onPatientClick }) => {
  const [activeIndex, setActiveIndex] = useState(null);


  useEffect(() => {
    if (patients.length > 0) {
      setActiveIndex(0);
      onPatientClick(patients[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (index, patient) => {
    setActiveIndex(index);
    onPatientClick(patient);
  };


  return (
    <ListPatientContainer>
      {patients.map((patient, index) => (
        <ListPatientItem
          key={index}
          isActive={activeIndex === index}
          onClick={() => handleClick(index, patient)}
        >
          {patient.name}
        </ListPatientItem>
      ))}
    </ListPatientContainer>
  );
};

ListPatient.propTypes = {
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onPatientClick: PropTypes.func.isRequired,
};

export default ListPatient;
