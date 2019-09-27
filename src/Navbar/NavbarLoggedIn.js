import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus as plus,
  faAddressCard as addressCard,
  faCog as cog,
  faSignOutAlt as signOut,
  faBell as bellIcon,
  faBellSlash as bellSlashIcon,
  faUser as userIcon
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Notifications from './Notifications';
import Messages from './Messages';
import logoSrc from '../logo.svg';
const { Item, SubMenu } = Menu;

const userAvatar = "https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png";
const subItems = [
  {
    subItem: true,
    name: 'stories',
    className: '',
    render: <Link to="/stories/new">
      <FontAwesomeIcon
        icon={plus}
        className="MenuIcon"
        size="1x"
      />
      &nbsp; New Story
    </Link>,
  },
  {
    subItem: true,
    name: 'categories',
    className: '',
    render:
    <Link to="/categories">
       <FontAwesomeIcon
          icon={addressCard}
          className="MenuIcon"
          size="1x"
        />
        &nbsp; Categories
   </Link>,
  },
  {
    subItem: true,
    name: 'settings',
    className: '',
    render:
    <Link to="/settings">
      <FontAwesomeIcon
        icon={cog}
        className="MenuIcon"
        size="1x"
      />
      &nbsp; Settings
   </Link>,
  },
  {
    subItem: true,
    name: 'logout',
    className: '',
    render:
    <span onClick={() => console.log("logoutFn()")}>
      <FontAwesomeIcon
        icon={signOut}
        className="MenuIcon"
        size="1x"
      />
      &nbsp; Log out
    </span>,
  }
];

const navData = [
  {
    name: 'messages',
    className: 'header3-item',
    render:
    <Messages
      messages={[]}
      clearFn={() => console.log("dismiss")}
      markRead={() => console.log("marked as read")}
      dismiss={() => console.log("Dismiss")}
    />,
    isMenu: false,
  },
  {
    name: 'notifications',
    className: 'header3-item',
    render:
    <Notifications
      notifications={[{
       id: 0,
       type: 'link',
       text: 'dude as commented on your story',
       link: '/'
      }]}
      clearFn={() => console.log("dismiss")}
      markRead={() => console.log("marked as read")}
      dismiss={() => console.log("Dismiss")}
    />,
    isMenu: false
  },
  {
    name: 'item2',
    className: '',
    render:
    <span>
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
    const menuTitleClass = `header3-item-block ${item.className}`.trim();
    return(
    <SubMenu
      className="account-submenu"
      key={item.name}
      title={
      <div className={menuTitleClass} >
        {item.render}
      </div>
      }
      popupClassName="header3-item-child"
    >
     {
       children.map((sub) => {
         return (
         <Item key={sub.name} className={sub.className}>
          {sub.render}
         </Item>
         );
       })
     }
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
  >
    <div className='home-page'>
      <TweenOne
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        className='header3-logo'
      >
       <img
         className="blog-title-img"
         width={40}
         height={40}
         alt="Logo"
         src={logoSrc}
        />
       <h2 className="blog-title">
         Morpheus
       </h2>
      </TweenOne>
      <TweenOne
        className='header3-menu'
        animation={{ x: 100, type: 'from', ease: 'easeOutQuad', repeat: 1 }}
        moment={300}
        reverse={false}
      >
        <Menu
          mode={'horizontal'}
          defaultSelectedKeys={[]}
          theme="light"
          onSelect={() =>console.log("....")}
          selectedKeys={[]}
        >
          {navChildren}
        </Menu>
      </TweenOne>
    </div>
  </TweenOne>
  );

}

export default Navbar;
