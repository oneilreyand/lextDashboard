import { useState } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

// Styled component for Avatar
const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid #ddd;
`;

// LazyAvatar component
const LazyAvatar = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <AvatarImage
      src={src}
      alt={alt}
      style={{ display: loaded ? 'inline-block' : 'none' }}
      onLoad={handleLoad}
    />
  );
};

LazyAvatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default LazyAvatar;
