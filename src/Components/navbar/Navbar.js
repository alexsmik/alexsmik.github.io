import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './links';
// import {Link} from "react-scroll";
import { Link, useLocation } from 'react-router-dom';
import Flag from 'react-world-flags';
// import { Link } from "react-router";

// import styled from 'styled-components';
// const LogoText = styled.div`
//   margin: 0 -2.8rem;
//   color: #282c34;
//   font-family: "Roboto", sans-serif;
//   font-size: 1rem;
//   letter-spacing: 4px;
// `

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  // assigning location variable
  const location = useLocation();
  // destructuring pathname from location
  const { pathname, pageName } = location;
  // Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          {/*change a link to this <link to='/' className='amLogo'>`alexsmik` <br/>*/}
          {/*  <i>Design, Develop</i></link>*/}
          <a href="/" className="amLogo">
            `alexsmik` <br />
            <i>Design, Develop</i>
          </a>
          {/*<img src={logo} className='logo' alt='logo' />*/}
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/*<div className='links-container' ref={linksContainerRef}>*/}
        {/*  <ul className='links' ref={linksRef}>*/}
        {/*    {links.map((link) => {*/}
        {/*      const { id, url, text } = link;*/}
        {/*      return (*/}
        {/*        <li key={id}>*/}
        {/*          <a href={url}>{text}</a>*/}
        {/*        </li>*/}
        {/*      );*/}
        {/*    })}*/}
        {/*  </ul>*/}
        {/*</div>*/}

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <li>
              <Link
                onClick={toggleLinks}
                to="/"
                className={splitLocation[1] === '' ? 'active' : ''}
              >
                Проекты
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleLinks}
                to="resume"
                className={splitLocation[1] === 'resume' ? 'active' : ''}
              >
                Резюме
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleLinks}
                to="contact"
                className={splitLocation[1] === 'contact' ? 'active' : ''}
              >
                Контакты
              </Link>
            </li>

            {/*{links.map((link) => {*/}
            {/*  const { id, text, to, activeClass } = link;*/}
            {/*  return (*/}
            {/*      <li key={id}>*/}
            {/*        <Link*/}
            {/*              to={to}*/}
            {/*              class={activeClass}*/}
            {/*              spy={true}*/}
            {/*              smooth={true}*/}
            {/*              offset={-70}*/}
            {/*              duration={500}*/}
            {/*              onClick={toggleLinks}*/}
            {/*              // className={`${*/}
            {/*              //                     text === text.toLowerCase() ? 'active' : null*/}
            {/*              //                   }`}*/}
            {/*              className={splitLocation[1] === to ? "active" : null}*/}
            {/*        >{text}</Link>*/}
            {/*      </li>*/}
            {/*  );*/}
            {/*})}*/}

            {/*<li>*/}
            {/*  <Link*/}
            {/*      activeClass="active"*/}
            {/*      to="resume"*/}
            {/*      spy={true}*/}
            {/*      smooth={true}*/}
            {/*      offset={-70}*/}
            {/*      duration={500}*/}
            {/*  >*/}
            {/*    Резюме*/}
            {/*  </Link>*/}
            {/*</li>*/}

            {/*<li>*/}
            {/*  <Link*/}
            {/*      activeClass="active"*/}
            {/*      to="courses"*/}
            {/*      spy={true}*/}
            {/*      smooth={true}*/}
            {/*      offset={-70}*/}
            {/*      duration={500}*/}
            {/*  >*/}
            {/*    Учеба*/}
            {/*  </Link>*/}
            {/*</li>*/}

            {/*<li>*/}
            {/*  <Link*/}
            {/*      activeClass="active"*/}
            {/*      to="contact"*/}
            {/*      spy={true}*/}
            {/*      smooth={true}*/}
            {/*      offset={-70}*/}
            {/*      duration={500}*/}
            {/*  >*/}
            {/*    Контакты*/}
            {/*  </Link>*/}
            {/*</li>*/}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
