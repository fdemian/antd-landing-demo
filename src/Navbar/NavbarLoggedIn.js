import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt as loginIcon,
  faUserPlus as registerIcon
} from '@fortawesome/free-solid-svg-icons';
import { getChildrenToRender } from '../utils';
import './Navbar.css';

const { Item, SubMenu } = Menu;

const subItems = [
  {
    subItem: true,
    name: 'image0',
    className: 'item-image',
    render: <img src={'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg'} />,
  },
  {
    subItem: true,
    name: 'title',
    className: 'item-title',
    render: 'Ant Design',
  },
  {
    subItem: true,
    name: 'content',
    className: 'item-content',
    render:'企业级 UI 设计体系',
  }
];

const logoSrc = 'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg';
const navData = [
  {
    name: 'item1',
    className: 'header3-item',
    render: <a href="#"><FontAwesomeIcon icon={loginIcon} />&nbsp;Login</a>,
    isMenu: false
  },
  {
    name: 'item2',
    className: '',
    render: <a href="#"><FontAwesomeIcon icon={registerIcon} />&nbsp;Register</a>,
    children: subItems,
    isMenu: true
  }
];

const navChildren = navData.map((item) => {

  const { children, isMenu, subItem } = item;

  if(isMenu){
    return(
    <SubMenu
      key={item.name}
      title={
        <div className={`header3-item-block ${item.className}`.trim()}>
          {item.render()}
        </div>
      }
      popupClassName="header3-item-child"
    >
     {subItem.map((sub) => {
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
        animation={null}
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
