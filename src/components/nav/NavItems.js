import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { MdArrowDropDownCircle } from 'react-icons/md';

export const navData = [
  {
    id: 1,
    href: '#',
    text: 'Home',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    href: '#about',
    text: 'About',
    icon: <AiOutlineUser />,
  },
  {
    id: 3,
    href: '#experience',
    text: 'Experience',
    icon: <BiBook />,
  },
  {
    id: 4,
    href: '#portfolio',
    text: 'Portfolio',
    icon: <RiServiceLine />,
  },
  {
    id: 5,
    href: '#contact',
    text: 'Contact',
    icon: <BiMessageSquareDetail />,
  },
  {
    id: 6,
    href: '#footer',
    text: 'Footer',
    icon: <MdArrowDropDownCircle />,
  },
];
