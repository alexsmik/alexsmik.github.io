import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './links';
import logo from '../../logo.svg';
import {Link} from "react-scroll";

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
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
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



        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, text, to, activeClass } = link;
              return (
                  <li key={id}>
                    <Link
                          activeClass={activeClass}
                          to={to}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={toggleLinks}
                    >{text}</Link>
                  </li>
              );
            })}
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
        <ul className='social-icons'>
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
