/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useBreakpoint from './utils/screenSize/index';
import {ss} from './store/action/globalAction';
import Router from './router';
import { GlobalStyle } from './utils';
import Toast from './components/Toast'

function App() {
  const dispatch = useDispatch()
  const screenSize = useBreakpoint();
  const { active, status, message } = useSelector((state) => state.toast);

  useEffect(() => {
    dispatch(ss(screenSize))
  }, [dispatch, screenSize, active])

  return (
    <>
    {active &&
      <Toast active={active} status={status} message={message} />
    }
      <GlobalStyle/>
      <Router/>
    </>
  )
}

export default App
