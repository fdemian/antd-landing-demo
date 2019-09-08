import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import dataSource from './dataSource';
import './Footer.css';

const Footer = (props) => {

  delete props.isMobile;

  return (
    <div {...props} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack}>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="footer"
          {...dataSource.copyright}
        >
          {dataSource.copyright.children}
        </TweenOne>
      </OverPack>
    </div>
  );
}

export default Footer;
