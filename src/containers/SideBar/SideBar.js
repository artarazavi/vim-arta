import React, { useEffect, useCallback } from 'react';
import { Menu } from 'semantic-ui-react';
import { useLocation, useNavigate } from 'react-router-dom';
import SideBarItem from './SideBarItem';
import SideBarDrop from './SideBarDrop';
import styled from 'styled-components';

const routes = ['back', '/', '/experience', '/education', '/links'];

const SideBar = ({ mobile }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getNext = useCallback((active) => {
    const current = routes.indexOf(active.pathname);
    if (current === routes.length - 1) {
      navigate(routes[1]);
    } else {
      navigate(routes[current + 1]);
    }
  }, [navigate]);

  const getPrev = useCallback((active) => {
    const current = routes.indexOf(active.pathname);
    if (current === 1) {
      navigate(routes[routes.length - 1]);
    } else {
      navigate(routes[current - 1]);
    }
  }, [navigate]);

  const moveFocus = useCallback((e) => {
    const active = location;
    if (e.keyCode === 40) {
      e.preventDefault();
      getNext(active);
    }
    if (e.keyCode === 38) {
      e.preventDefault();
      getPrev(active);
    }
  }, [getNext, getPrev, location]);

  const moveFocusMulti = useCallback((e) => {
    if (e.key === "?") {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    document.onkeydown = moveFocus;
    document.onkeypress = moveFocusMulti;
    return () => {
      document.onkeydown = null;
      document.onkeypress = null;
    };
  }, [moveFocus, moveFocusMulti]);

  const Styles = styled.div`
    .ui.menu.fixed.side-nav {
      overflow-y: auto;
      padding-right: 1px;
      .menu-text {
        text-align: left;
        font-family: 'Roboto Mono', monospace;
        font-size: 13px;
      }
      .help-text {
        color: #FDFA95;
        margin-bottom: 12px;
      }
      .dir-text {
        color: #9780F3;
        margin-bottom: 0px;
      }
    }
    .mobile-view {
      padding-top: 10px;
      padding-bottom: 15px;
    }
    .web-view {
      padding-bottom: 700px;
    }
  `;

  let helpText = "\" Press ? for help";
  let dirText = "</arta/dev/root";

  let menuStyle = mobile ? "side-nav mobile-view" : "side-nav web-view";

  return (
    <Styles>
      <Menu borderless vertical stackable fixed='left' className={menuStyle}>
        <p className="menu-text help-text">{helpText}</p>
        <SideBarItem path='back' label='.. (up a dir)' location={location} navigate={navigate} />
        <p className="menu-text dir-text">{dirText}</p>
        <SideBarItem path='/' label='Help' location={location} />
        <SideBarItem path='/experience' label='Experience' location={location} />
        <SideBarItem path='/education' label='Education' location={location} />
        <SideBarItem path='/links' label='Links' location={location} />
        {/* <SideBarDrop label='Projects' location={location}>
          <SideBarItem path='/admsg' label='Ad Messaging' location={location} />
        </SideBarDrop>
        <SideBarDrop label='Blog' location={location}>
          <SideBarItem path='/blog/blog1' label='Blog 1' location={location} />
          <SideBarItem path='/blog/blog2' label='Blog 2' location={location} />
        </SideBarDrop> */}
      </Menu>
    </Styles>
  );
};

export default SideBar;
