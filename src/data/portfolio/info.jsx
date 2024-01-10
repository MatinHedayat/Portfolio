import { FaUser } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';

import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaPhoneVolume } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { PiCloudFill } from 'react-icons/pi';

export const primitives = [
  { id: 1, title: <FaUser />, value: 'Matin Hedayat', iconSize: 'text-base' },
  { id: 2, title: 'Pronouns', value: 'He/Him', iconSize: 'text-base' },
  { id: 3, title: 'Age', value: 23, iconSize: 'text-base' },
  {
    id: 4,
    title: <FaCode />,
    value: 'Front-End Developer',
    iconSize: 'text-lg',
  },
  {
    id: 5,
    title: <IoLocationSharp />,
    value: 'Iran - Tehran',
    iconSize: 'text-lg',
  },
  { id: 6, title: <FaPhoneVolume />, value: '0939 98 62 846' },
];

export const social = [
  {
    id: 1,
    title: <FaInstagram />,
    value: 'matin.hdt',
    path: 'https://www.instagram.com/matin.hdt',
  },
  {
    id: 2,
    title: <FaTelegram />,
    value: 'matkoDen',
    path: 'https://t.me/matkoDen',
  },
  {
    id: 3,
    title: <FaGithub />,
    value: 'Github',
    path: 'https://github.com/MatinHedayat',
  },
  {
    id: 4,
    title: <FaStackOverflow />,
    value: 'Stack Overflow',
    path: 'https://stackoverflow.com/users/23146892/matin-hedayat',
  },
  {
    id: 7,
    title: <PiCloudFill />,
    value: 'matko.ir',
    path: 'https://matko.ir/',
  },
  { id: 6, title: <SiGmail />, value: 'mhmdmatinhedayat@gmail.com' },
];
