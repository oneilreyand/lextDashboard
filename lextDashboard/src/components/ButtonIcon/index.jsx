import PropTypes from 'prop-types';
import { ButtonWrapper, Icon } from './ButtonIconElements.jsx';
import Tooltip from '../Tooltip/index.jsx';

const ButtonIcon = ({ icon, onClick, info }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      {Icon && info ?
      <>
      <Tooltip placement={'left'} content={info}>
        <Icon src={icon}/>
      </Tooltip>
      </>
       : <Icon src={icon}/>
      } 
    </ButtonWrapper>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.elementType.isRequired, // ElementType allows any component to be passed
  onClick: PropTypes.func.isRequired,
  info: PropTypes.string.isRequired,
};

export default ButtonIcon;
