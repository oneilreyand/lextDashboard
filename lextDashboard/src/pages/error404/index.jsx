import { ErrorContainer, ErrorMessage, ErrorDescription } from './eror404.elements';

function Error() {
  return (
    <ErrorContainer>
      <ErrorMessage>ERROR 404</ErrorMessage>
      <ErrorDescription>Maaf... Halaman ini tidak ditemukan</ErrorDescription>
    </ErrorContainer>
  );
}

export default Error;
