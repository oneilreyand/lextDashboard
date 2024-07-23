import React from 'react';
import PropTypes from 'prop-types';
import { StepContainer, StepWrapper, StepCircle, Line } from './stepComponentElements';

// Functional component
const StepComponent = ({ steps, currentStep }) => {
  return (
    <StepContainer>
      <StepWrapper>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <StepCircle completed={currentStep >= index}>{index + 1}</StepCircle>
            {index < steps.length - 1 && (
              <Line completed={currentStep > index} />
            )}
          </React.Fragment>
        ))}
      </StepWrapper>
    </StepContainer>
  );
};

// PropTypes validation
StepComponent.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default StepComponent;
