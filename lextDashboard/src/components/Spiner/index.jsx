import PropTypes from 'prop-types';
import {ProgressIcon} from './spinerElements.jsx'


const ProgressSpinner = ({ size, color }) => {
  // Set colors based on the color prop
  const primaryColor = color === 'primary' ? '#5d87ff' : 'white';
  const secondaryColor = color === 'primary' ? 'white' : '#5d87ff';

  return <ProgressIcon size={size} primaryColor={primaryColor} secondaryColor={secondaryColor} />;
};

ProgressSpinner.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,

  };
  
  export default ProgressSpinner;