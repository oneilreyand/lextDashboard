import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../pages/errorBoundry/index.jsx';
import { useSelector } from 'react-redux';
import SideBar from '../components/Sidebar/index.jsx';
import {
  LayoutContainer,
  ToggleButton,
  ContentContainer,
  ScrollableContentContainer,
  HeaderWrapper,
} from './layoutElements.jsx';
import { menuSvg } from '../assets/index.jsx';
import LinearDeterminate from '../components/LinierDerteminate/index.jsx';

const Layout = () => {
  const linierProgresBar = useSelector(state => state.global && state.global.linierProgresBar ? state.global.linierProgresBar : false);
  const [iscollapsed, setIscollapsed] = useState(false);

  const toggleSidebar = () => {
    setIscollapsed(!iscollapsed);
  };


  return (
    <LayoutContainer>
      <SideBar iscollapsed={iscollapsed} />
      <ContentContainer>
        {linierProgresBar &&
          <LinearDeterminate/>
        }
        <HeaderWrapper>
          <ToggleButton src={menuSvg} onClick={toggleSidebar} iscollapsed={iscollapsed} />
        </HeaderWrapper>
        <ScrollableContentContainer>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        </ScrollableContentContainer>
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
