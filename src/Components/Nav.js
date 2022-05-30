import React, { useState, useRef, useEffect } from 'react';
import logo from '../logo.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Nav = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linkHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linkHeight}px`;
        } else {
            linksContainerRef.current.style.height = `0px`;
        }
    }, [showLinks]);
    return (
        <nav className='nav-center'>
            <div className='nav-header'>
                <img src={logo} className='logo' alt="logo"/>

                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>

                        <li>
                            <Link
                                activeClass="active"
                                to="resume"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                               Резюме
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="courses"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Учеба
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className='nav-toggle' onClick={toggleLinks}>
                    <FaBars />
                </button>
            </div>
        </nav>
    );
};
export default Nav;