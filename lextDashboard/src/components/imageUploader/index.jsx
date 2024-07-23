/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  height: 150px;
  background-color: #f9f9f9;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(2);
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #aaa;
`;

const ImageUploader = ({ initialImage, onSave }) => {
  const [image, setImage] = useState(initialImage);
  const [file, setFile] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    setImage(initialImage);
  }, [initialImage]);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      console.log('Dropped file:', selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setImage(objectUrl);
      setFile(selectedFile);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png, image/gif', // MIME types yang valid
    multiple: false,
  });

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      const validMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (validMimeTypes.includes(selectedFile.type)) {
        const objectUrl = URL.createObjectURL(selectedFile);
        setImage(objectUrl);
        setFile(selectedFile);
      } else {
        console.error(`Skipped "${selectedFile.type}" because it is not a valid MIME type.`);
      }
    }
  };

  const handleSave = () => {
    if (file) {
      onSave(file);
    }
  };

  return (
    <>
      <Label>Logo Travel</Label>
      <ButtonWrapper>
        <Button variant="outlined" size='small' onClick={() => inputRef.current.click()}>
          Upload from File
        </Button>
        <Button variant="contained" size='small' color="primary" onClick={handleSave}>
          Save
        </Button>
      </ButtonWrapper>
      <Container {...getRootProps()}>
        <input {...getInputProps()} />
        {image ? <ImagePreview src={image} alt="Preview" loading="lazy" /> : <p>Drag & drop an image here, or click to select an image</p>}
        <ButtonsContainer>
          <input
            type="file"
            ref={inputRef}
            style={{ display: 'none', height: '50px' }}
            onChange={handleFileSelect}
            accept="image/jpeg, image/png, image/gif" // MIME types yang valid
          />
        </ButtonsContainer>
      </Container>
    </>
  );
};

ImageUploader.propTypes = {
  initialImage: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ImageUploader;
