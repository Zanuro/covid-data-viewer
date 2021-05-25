import React, {Component } from 'react';


import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  PlayIcon,
} from '@heroicons/react/outline';


import PopOverMenuItem from '../components/PopOverMenuItem';
import BurgerMenu from '../components/BurgerMenu';
import Aux from '../hoc/Aux';
import NavBarLogo from '../components/NavBarLogo';
import BurgerMenuNavItem from '../components/BurgerMenuNavItem';


const dataVisz = [
    { name: 'Global', href: "#", icon: PlayIcon},
    { name: 'Europe', href: "#", icon: PlayIcon},
    { name: 'South America', href: "#", icon: PlayIcon},
    { name: 'North America', href: "#", icon: PlayIcon},
    { name: 'Asia', href: "#", icon: PlayIcon},
    { name: 'Rest of the World', href: "#", icon: PlayIcon},
]

const burgerOptions = [
    { name: 'Home', title: "Home", src:"https://cdn4.iconfinder.com/data/icons/contact-us-19/48/83-512.png"},
    { name: 'Spain', title: "Spain", src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/512px-Flag_of_Spain.svg.png"},
    { name: 'Data visualization', title: "Data visualization", src:"https://i.pinimg.com/originals/3f/6c/02/3f6c0288faf436d56bc6ec176035b73c.jpg"},
    { name: 'Covid-19', title: "Covid-19", src:"https://images.vexels.com/media/users/3/199841/isolated/preview/96a7cac08ad4539e1888d8f5c82b5f48-icono-de-coronavirus-covid19-by-vexels.png"},
]


export function Header() {
    return (
      <Popover className="relative bg-white">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <NavBarLogo style="flex justify-start lg:w-0 lg:flex-1"/>
                <BurgerMenuNavItem style="-mr-2 -my-2 md:hidden" name="Open Menu" type="open"/>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Home
                    </a>
                    <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Spain
                    </a>
                  <PopOverMenuItem name="Data Visualization" dataVisz={dataVisz}/>
                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Covid-19
                  </a>             
                  
                </Popover.Group>
              </div>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <BurgerMenu burgerOptions={burgerOptions}/>
                </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    )
  }



export default Header;