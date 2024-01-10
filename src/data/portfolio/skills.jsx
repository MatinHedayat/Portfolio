import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
// import { IoLogoJavascript } from 'react-icons/io';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandReact } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io5';

import { TbBrandRedux } from 'react-icons/tb';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default [
  { title: 'HTML', icon: <FaHtml5 />, color: 'text-red-500' },
  { title: 'CSS', icon: <FaCss3 />, color: 'text-blue-400' },
  { title: 'JavaScript', icon: <IoLogoJavascript />, color: 'text-yellow-400' },
  { title: 'Tailwind', icon: <SiTailwindcss />, color: 'text-sky-400' },
  { title: 'React', icon: <TbBrandReact />, color: 'text-sky-500' },
  { title: 'Redux', icon: <TbBrandRedux />, color: 'text-purple-400' },
  { title: 'Git', icon: <FaGitAlt />, color: 'text-orange-400' },
  { title: 'Github', icon: <FaGithub />, color: 'text-gray-400' },
];
