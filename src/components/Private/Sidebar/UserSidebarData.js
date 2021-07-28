
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {RiKakaoTalkFill} from 'react-icons/ri';

export const UserSidebarData = [
  {
    title: 'Buy Foods',
    path: '/buyFoods',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Talk to Us',
    path: '/talktous',
    icon: <RiKakaoTalkFill />,
    cName: 'nav-text'
  },

  {
    title: 'chat',
    path: '/chat',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }
  , 
  // {
  //   title: 'review',
  //   path: '/chat',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // }

];