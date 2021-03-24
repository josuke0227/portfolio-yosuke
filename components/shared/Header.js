import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import Link from "next/link";

const BsNavLink = ({ title, href }) => (
  <Link href={href}>
    <a className="nav-link port-navbar-link">{title}</a>
  </Link>
);

const BsNavBrand = () => (
  <Link href="/">
    <a className="port-navbar-brand navbar-brand">Yosuke Motosugi</a>
  </Link>
);

const LoginLink = () => <BsNavLink href="/api/auth/login" title="login" />;

const LogoutLink = () => <BsNavLink href="/api/auth/logout" title="logout" />;

const Header = ({ user, loading }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      className="port-navbar port-default position-absolute"
      color="transparent"
      dark
      expand="md"
    >
      <BsNavBrand />
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/" title="Home" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/about" title="About" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/portfolios" title="Portfolios" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/blogs" title="Blogs" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/cv" title="CV" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/secret" title="Secret" />
          </NavItem>
          <NavItem className="port-navbar-item">
            <BsNavLink href="/secretssr" title="SecretSSR" />
          </NavItem>
        </Nav>
        <Nav navbar>
          {!loading && (
            <>
              {user && (
                <NavItem className="port-navbar-item">
                  <LogoutLink />
                </NavItem>
              )}
              {!user && (
                <NavItem className="port-navbar-item">
                  <LoginLink />
                </NavItem>
              )}
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
