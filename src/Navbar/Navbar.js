import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt as loginIcon,
  faUserPlus as registerIcon
} from '@fortawesome/free-solid-svg-icons';
import { getChildrenToRender } from '../utils';
import logoSrc from '../logo.svg';
import './Navbar.css';

const { Item, SubMenu } = Menu;


const navData = [
  {
    name: 'item1',
    className: 'header3-item',
    render: <a href="#"><FontAwesomeIcon icon={loginIcon} />&nbsp;Login</a>,
  },
  {
    name: 'item2',
    className: '',
    render:<a href="#"><FontAwesomeIcon icon={registerIcon} />&nbsp;Register</a>,
  }
];

const navChildren = navData.map((item) => {
  const { children: a, subItem, ...itemProps } = item;

  if (subItem) {
    return (
    <SubMenu
      key={item.name}
      title={
        <div
          {...a}
          className={`header3-item-block ${a.className}`.trim()}
        >
          {a.children.map(getChildrenToRender)}
        </div>
      }
      popupClassName="header3-item-child"
    >
      {subItem.map(($item, ii) => {
        const { children: childItem } = $item;
        const child = childItem.href ? (
          <a {...childItem}>
            {childItem.children.map(getChildrenToRender)}
          </a>
        ) : (
          <div {...childItem}>
            {childItem.children.map(getChildrenToRender)}
          </div>
        );

        return (
        <Item key={item.name} className={item.className}>
          {child}
        </Item>
        );

      })}
    </SubMenu>
    );

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
