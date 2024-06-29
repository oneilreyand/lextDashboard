/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import useBreakpoint from './utils/screenSize/index';
import {ss} from './store/action/globalAction';
import Router from './router';
import { GlobalStyle } from './utils';

function App() {
  const dispatch = useDispatch()
  const screenSize = useBreakpoint();
  
  useEffect(() => {
    dispatch(ss(screenSize))
  }, [dispatch, screenSize])

  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  )
}

export default App
