import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt as loginIcon,
  faUserPlus as registerIcon
} from '@fortawesome/free-solid-svg-icons';


const dataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            { children:
              <span><FontAwesomeIcon icon={loginIcon} />&nbsp;Login</span>, 
              name: 'react'
            }
          ],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
           { children:
             <span><FontAwesomeIcon icon={registerIcon} />&nbsp;Register</span>,
             name: 'react'
           }
          ],
        },
      }
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};

export default dataSource;
