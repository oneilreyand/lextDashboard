import PropTypes from 'prop-types';
import {
    StickyHeader,
    ContentContainer,
    ContentBody,
    ListPatienHideIcon,
    TitleContent,
} from './patientContentElements';
import { chevronRightSvg, chevronleftSvg } from '../../assets';

const PatientContent = ({ selectedContent, isShowListPatient, handleIsShowListPatien }) => {
  return (
    <>
    <StickyHeader>
      <TitleContent>
        {`${selectedContent}`}
      </TitleContent>
      <ListPatienHideIcon 
        src={isShowListPatient ? chevronRightSvg : chevronleftSvg}
        onClick={handleIsShowListPatien}
      />
    </StickyHeader>
    <ContentContainer>
        <ContentBody>
            
        </ContentBody>
    </ContentContainer>
    </>
  )
};

PatientContent.propTypes = {
    selectedContent: PropTypes.string.isRequired,
    handleIsShowListPatien: PropTypes.func.isRequired,
    isShowListPatient: PropTypes.bool.isRequired,
};

PatientContent.defaultProps = {
  handleIsShowListPatien: () => {},
};

export default PatientContent
