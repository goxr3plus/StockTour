import React from 'react';

import { Nav, Navbar, NavItem } from 'reactstrap';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          {/*2018 Reduction theme, source on <SourceLink>Github</SourceLink>*/}
          &copy; Copyright {new Date().getFullYear()} <a href={''} target="_blank">GOXR3PLUS STUDIO</a>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
