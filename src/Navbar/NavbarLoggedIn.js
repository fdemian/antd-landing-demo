import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell as bellIcon,
  faEnvelope as envelopeIcon
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const { Item, SubMenu } = Menu;

const userAvatar = "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png";
const subItems = [
  {
    subItem: true,
    name: 'image0',
    className: 'item-image',
    render: <img src='https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg' alt="logo antd" />,
  },
  {
    subItem: true,
    name: 'title',
    className: 'item-title',
    render: <p>Ant Design</p>,
  },
  {
    subItem: true,
    name: 'content',
    className: 'item-content',
    render:<p>企业级 UI 设计体系</p>,
  }
];

const logoSrc = 'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg';
const navData = [
  {
    name: 'messages',
    className: 'header3-item',
    render: <FontAwesomeIcon icon={envelopeIcon} />,
    isMenu: true,
    children: subItems
  },
  {
    name: 'notifications',
    className: 'header3-item',
    render: <FontAwesomeIcon icon={bellIcon} />,
    isMenu: true,
    children: subItems
  },
  {
    name: 'item2',
    className: '',
    render: <span>
              <img src={userAvatar} width={40} height={40} alt="user avatar antd" />
              &nbsp; <span style={{fontWeight:'700'}}>User Name</span>
            </span>,
    children: subItems,
    isMenu: true
  }
];

const navChildren = navData.map((item) => {

  const { children, isMenu } = item;

  if(isMenu){
    return(
    <SubMenu
      key={item.name}
      title={
        <div className={`header3-item-block ${item.className}`.trim()}>
          {item.render}
        </div>
      }
      popupClassName="header3-item-child"
    >
     {children.map((sub) => {
        return (
        <Item key={sub.name} className={sub.className}>
          {sub.render}
        </Item>
        );
     })}
    </SubMenu>
    )
  }

  return (
  <Item key={item.name} className={`header3-item-block ${item.className}`.trim()}>
    {item.render}
  </Item>
  );

});

const Navbar = (props) => {

  return (
  <TweenOne
    component="header"
    animation={{ opacity: 0, type: 'from' }}
    className="header3 home-page-wrapper"
    {...props}
  >
    <div className='home-page'>
      <TweenOne
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        className='header3-logo'
      >
        <img width="100%" src={logoSrc} alt="Logo" />
      </TweenOne>
      <TweenOne
        className='header3-menu'
        animation={{ x: 100, type: 'from', ease: 'easeOutQuad', repeat: 1 }}
        moment={300}
        reverse={false}
      >
        <Menu
          mode={'horizontal'}
          defaultSelectedKeys={['sub0']}
          theme="light"
        >
          {navChildren}
        </Menu>
      </TweenOne>
    </div>
  </TweenOne>
  );

}

export default Navbar;
