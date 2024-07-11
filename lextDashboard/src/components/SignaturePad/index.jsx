import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { ModalActions, StatusIndicator, SuccessContainer } from './signaturePadElements';

const SignaturePad = ({ onCancel, onSubmit }) => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
      ctx.current.lineWidth = 2;
      ctx.current.lineCap = 'round';
      ctx.current.strokeStyle = '#000000';
    }
  }, []);

  const handleMouseDown = (e) => {
    if (ctx.current) {
      ctx.current.beginPath();
      ctx.current.moveTo(e.clientX - canvasRef.current.offsetLeft, e.clientY - canvasRef.current.offsetTop);
      canvasRef.current.addEventListener('mousemove', handleMouseMove);
    }
  };

  const handleMouseUp = () => {
    canvasRef.current.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseMove = (e) => {
    if (ctx.current) {
      ctx.current.lineTo(e.clientX - canvasRef.current.offsetLeft, e.clientY - canvasRef.current.offsetTop);
      ctx.current.stroke();
    }
  };

  const handleClear = () => {
    if (ctx.current) {
      ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const handleSave = () => {
    if (canvasRef.current) {
      setIsLoading(true)
      canvasRef.current.toBlob((blob) => {
        if (blob) {
          // Simulate sending blob to server (mocking success/failure)
          setTimeout(() => {
            setIsSuccess(true); // Set isSuccess state after 10 seconds
            setIsLoading(false)
            onSubmit()
          }, 5000);
        }
      });
    }
  };

  return (
    <>
      {isSuccess ?
      <SuccessContainer/>
      :
      <canvas
        ref={canvasRef}
        width={360}
        height={300}
        style={{ border: '1px solid #ccc', cursor: 'crosshair' }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      }
      <ModalActions>
        {!isSuccess ? (
          <>
            <Button 
              variant="outline" 
              size="large" 
              onClick={handleClear}
              disabled={isLoading}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={handleSave}
              // icon={isLoading && <Spiner size={20} color={'primary'}/>}
              iconPosition= 'right'
              disabled={isLoading}
            >
              Submit
            </Button>
          </>
        ) : (
          <Button variant="contained" size="large" onClick={onCancel}>
            Close Screen
          </Button>
        )}
      </ModalActions>
      {isSuccess !== null && (
        <StatusIndicator success={isSuccess}>
          {isSuccess ? (
            <>
              <span>OK</span>
              <i className="fas fa-check-circle"></i>
            </>
          ) : (
            <>
              <span>Faild</span>
              <i className="fas fa-times-circle"></i>
            </>
          )}
        </StatusIndicator>
      )}
    </>
  );
};

SignaturePad.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

SignaturePad.defaultProps = {
  onSubmit: () => {},
};

export default SignaturePad;
