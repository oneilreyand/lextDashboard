import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../pages/errorBoundry';
// import { useSelector } from 'react-redux';
import SideBar from '../components/Sidebar';
import {
  LayoutContainer,
  ToggleButton,
  ContentContainer,
  ScrollableContentContainer,
  HeaderWrapper,
} from './layoutElements';
import { menuSvg } from '../assets';

const Layout = () => {
  // const ss = useSelector(state => state.global);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <LayoutContainer>
      <SideBar isCollapsed={isCollapsed} />
      <ContentContainer>
        <HeaderWrapper>
          <ToggleButton src={menuSvg} onClick={toggleSidebar} isCollapsed={isCollapsed} />
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
