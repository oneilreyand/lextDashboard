import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useIdle from '../../utils/useIdle';
import Modal from '../../components/ModalIdle';

// Contoh fungsi untuk memeriksa status autentikasi
const isAuthenticated = () => {
  // Logika Anda untuk memeriksa apakah pengguna sudah terautentikasi
  // Misalnya, memeriksa token di localStorage atau konteks autentikasi
  return true; // Gantilah dengan logika autentikasi Anda
};

const PrivateRoute = ({ children }) => {
  const isIdle = useIdle(60000); // 1 menit
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isIdle) {
      setModalOpen(true);
    }
  }, [isIdle]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return isAuthenticated() ? (
    <>
      {children}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} timeout={30}>
          <h2>Idle Warning</h2>
          <p>You have been idle.</p>
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
      )}
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
