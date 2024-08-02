import { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useIdle from '../utils/useIdle/index.jsx';
import Modal from '../components/Modal/index.jsx';
import Button from '../components/Button/index.jsx';
import { logout } from '../store/action/authAction.jsx';

const IdleRoute = ({ children }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const isIdle = useIdle(1200000); // 2 minutes idle timeout
  const navigate = useNavigate();

  useEffect(() => {
    let countdownInterval;

    if (isIdle) {
      setShowModal(true);
      countdownInterval = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown === 1) {
            clearInterval(countdownInterval);
            dispatch(logout());
            navigate('/login');
            return 0; // Ensure countdown is set to 0 after logout
          }
          return prevCountdown - 1;
        });
      }, 1000);
    } else {
      setShowModal(false);
      setCountdown(15);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [isIdle, navigate, dispatch]);

  const handleCloseModal = () => {
    setShowModal(false);
    setCountdown(15);
  };

  const formatCountdown = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Fragment>
      {children}
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <p>You will be logged out in {formatCountdown(countdown)} seconds</p>
        <Button size='small' onClick={handleCloseModal}>Cancel</Button>
      </Modal>
    </Fragment>
  );
};

IdleRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IdleRoute;
