import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { hideToast } from '../../store/action/toastAction.jsx';
import {
  ToastContainer,
  MessageContainer,
  ProgressBar,
  ProgressBarBackground,
} from './toastElements.jsx';

const Toast = () => {
  const dispatch = useDispatch();
  const toasts = useSelector((state) => state.toast.toasts);
  const [activeToasts, setActiveToasts] = useState([]);

  useEffect(() => {
    toasts.forEach((toast) => {
      if (!activeToasts.includes(toast.id)) {
        setActiveToasts((prev) => [...prev, toast.id]);

        const timer = setTimeout(() => {
          setActiveToasts((prev) => prev.filter((id) => id !== toast.id));
          dispatch(hideToast(toast.id));
        }, 5000);

        return () => {
          clearTimeout(timer);
        };
      }
    });
  }, [toasts, activeToasts, dispatch]);

  const getBorderColor = (status) => {
    switch (status) {
      case 'success':
        return '#4070f4';
      case 'error':
        return '#cc2957';
      case 'warning':
        return '#ffa500';
      default:
        return '#4070f4';
    }
  };

  return (
    <>
      {toasts.map((toast) => (
        <ToastContainer
          key={toast.id}
          active={activeToasts.includes(toast.id) ? 'true' : undefined}
          color={getBorderColor(toast.status)}
        >
          <div className="toast-content">
            <MessageContainer className="message">
              <span style={{ color: 'white' }} className="text text-1">{toast.message}</span>
            </MessageContainer>
            <ProgressBarBackground>
              <ProgressBar
                color={getBorderColor(toast.status)}
                style={{
                  width: activeToasts.includes(toast.id) ? '100%' : '0%',
                  transition: 'width 5s linear'
                }}
              />
            </ProgressBarBackground>
          </div>
        </ToastContainer>
      ))}
    </>
  );
};

Toast.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Toast;
