
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const UserSidebarData = [
  {
    title: 'MyOrders',
    path: '/myorders',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Buy Foods',
    path: '/buyFoods',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }

];