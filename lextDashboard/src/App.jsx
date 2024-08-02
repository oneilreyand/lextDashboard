/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import useBreakpoint from './utils/screenSize/index.jsx';
import { clearToasts } from './store/action/toastAction.jsx'
import {ss} from './store/action/globalAction.jsx';
import Router from './router/index.jsx';
import { GlobalStyle } from './utils/index.jsx';
import Toast from './components/Toast/index.jsx'

function App() {
  const dispatch = useDispatch()
  const screenSize = useBreakpoint();

  useEffect(() => {
    dispatch(ss(screenSize))
  }, [dispatch, screenSize])

  useEffect(() => {
    dispatch(clearToasts());
  })

  return (
    <>
      <Toast />
      <GlobalStyle/>
      <Router/>
    </>
  )
}

export default App
