import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {Link} from "react-scroll";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import fl from '../../images/fl.svg';
import {FaLink} from "@react-icons/all-files/fa/FaLink";
export const links = [
  {
    id: 1,
    // url: '/',
    text: 'Проекты',
    activeClass: 'active',// ?!
    to: '/'
  },
  {
    id: 2,
    // url: '/',
    text: 'Резюме',
    activeClass: 'active',
    to: 'resume'
  },
  {
    id: 3,
    text: 'Контакты',
    activeClass: 'active',
    to: 'contact'
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
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: '#',
    icon: <FaLink />,
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
