import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { hideToast } from '../../store/action/toastAction';
import {
    ToastContainer,
    MessageContainer,
    StatusWrapper,
} from './toastElements';

// Toast component
const Toast = ({ status, message }) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);

    useEffect(() => {
        let timer1, timer2;

        const showToast = () => {
            setActive(true);
            timer1 = setTimeout(() => {
                setActive(false);
                dispatch(hideToast());
            }, 5000);

            timer2 = setTimeout(() => {
                setActive(false);
                dispatch(hideToast());
            }, 5300);
        };

        showToast();

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [dispatch]);

    // Determine border color based on status
    const getBorderColor = () => {
        switch (status) {
            case 'success':
                return '#4070f4';
            case 'error':
                return '#ff0000';
            case 'warning':
                return '#ffa500';
            default:
                return '#4070f4';
        }
    };

    return (
        <ToastContainer active={active ? 'true' : undefined} color={getBorderColor()}>
            <div className="toast-content">
                <StatusWrapper status={getBorderColor()} className="check">
                    {status}
                </StatusWrapper>
                <MessageContainer className="message">
                    <span className="text text-1">{message}</span>
                </MessageContainer>
            </div>
        </ToastContainer>
    );
};

Toast.propTypes = {
    status: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default Toast;
