import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

const SideBarDrop = ({ label, location, children }) => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
  }, []);

  // Check if any of the children match the current location
  const isVisible =
    visible ||
    React.Children.toArray(children).some(
      (child) => child.props && child.props.path === location.pathname
    );

  const faArrowIcon = visible ? 'fa fa-angle-down' : 'fa fa-angle-right';
  const faFolderIcon = visible ? 'fa fa-folder-open' : 'fa fa-folder';

  const Styles = styled.div`
    .sidebar-item {
      span {
        font-family: 'Roboto Mono', monospace;
        font-size: 12px;
        color: #b7e88d;
        cursor: pointer;
        i {
          margin-right: 20px;
          color: #888888;
        }
      }
    }
    .sidebar-item-alignment-container {
      display: flex;
      align-items: center;
    }
    .drop-item {
      margin-left: 10px;
    }
  `;

  return (
    <Styles>
      <div onClick={toggleMenu}>
        <Menu.Item className="sidebar-item">
          <div className="sidebar-item-alignment-container">
            <span>
              <i className={faArrowIcon} />
            </span>
            <span>
              <i className={faFolderIcon} />
            </span>
            <span>{label}</span>
          </div>
        </Menu.Item>
        <div className="drop-item">{isVisible ? children : null}</div>
      </div>
    </Styles>
  );
};

export default SideBarDrop;
