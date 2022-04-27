import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {Link} from "react-scroll";
export const links = [
  {
    id: 1,
    // url: '/',
    text: 'resume',
    activeClass: 'active',
    to: 'resume'
  },
  {
    id: 2,
    text: 'courses',
    activeClass: 'active',
    to: 'courses'
  },
  // {
  //   id: 3,
  //   url: '/projects',
  //   text: 'projects',
  // },
  // {
  //   id: 4,
  //   url: '/contact',
  //   text: 'contact',
  // },
  // {
  //   id: 5,
  //   url: '/profile',
  //   text: 'profile',
  // },
];

export const social = [
  {
    id: 1,
    url: '#',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: '#',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: '#',
    icon: <FaLinkedin />,
  },
  // {
  //   id: 4,
  //   url: 'https://www.twitter.com',
  //   icon: <FaBehance />,
  // },
];
