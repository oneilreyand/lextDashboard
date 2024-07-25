import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../pages/errorBoundry';
import { useSelector } from 'react-redux';
import SideBar from '../components/Sidebar';
import {
  LayoutContainer,
  ToggleButton,
  ContentContainer,
  ScrollableContentContainer,
  HeaderWrapper,
} from './layoutElements';
import { menuSvg } from '../assets';
import LinearDeterminate from '../components/LinierDerteminate';

const Layout = () => {
  const linierProgresBar = useSelector(state => state.global && state.global.linierProgresBar ? state.global.linierProgresBar : false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  console.log('linierProgresBar', linierProgresBar);

  return (
    <LayoutContainer>
      <SideBar isCollapsed={isCollapsed} />
      <ContentContainer>
        {linierProgresBar &&
          <LinearDeterminate/>
        }
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
