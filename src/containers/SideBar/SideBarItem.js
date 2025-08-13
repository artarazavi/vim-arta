import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SideBarItem = ({ path, label }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const shouldBeHighlighted = () => {
    const { pathname } = location;
    if (path === '/') {
      return pathname === path;
    }
    return pathname.includes(path);
  };

  const highlight = shouldBeHighlighted() ? 'highlight-item' : null;
  const faArrowIcon = highlight ? 'fa fa-angle-down' : 'fa fa-angle-right';
  const faFolderIcon = highlight ? 'fa fa-folder-open' : 'fa fa-folder';
  const goingBack = path === 'back';

  const Styles = styled.div`
    .navlink {
      text-decoration: none;
    }

    .sidebar-item {
      span {
        font-family: 'Roboto Mono', monospace;
        font-size: 12px;
        color: #79b1ff;

        i {
          margin-right: 20px;
          color: #888888;
        }
      }

      &.highlight-item {
        background: rgba(0, 0, 0, 0.5);
        opacity: 0.5;

        span {
          font-weight: 600;
        }

        i {
          color: #888888;
        }
      }
    }

    .sidebar-item-alignment-container {
      display: flex;
      align-items: center;
    }

    .back-button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      font-family: 'Roboto Mono', monospace;
      font-size: 12px;
      color: #79b1ff;
    }
  `;

  return (
    <Styles>
      {goingBack ? (
        <button className="back-button" onClick={goBack}>
          <Menu.Item className="sidebar-item">
            <div className="sidebar-item-alignment-container">
              <span>{label}</span>
            </div>
          </Menu.Item>
        </button>
      ) : (
        <Link className="navlink" to={{ pathname: path }}>
          <Menu.Item className={['sidebar-item', highlight].join(' ')}>
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
        </Link>
      )}
    </Styles>
  );
};

export default SideBarItem;
