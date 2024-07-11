import PropTypes from 'prop-types';
import {
  ErrorContainer,
  ErrorMessage,
  ErrorDetails,
  RetryButton
} from './errorBoundryElements';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <ErrorContainer role="alert">
    <ErrorMessage>Something went wrong:</ErrorMessage>
    <ErrorDetails>{error && error.message}</ErrorDetails>
    <RetryButton onClick={resetErrorBoundary}>Try again</RetryButton>
  </ErrorContainer>
);

ErrorFallback.propTypes = {
  error: PropTypes.object, // Adjusted to PropTypes.object
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
