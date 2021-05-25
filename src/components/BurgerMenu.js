import React from 'react';
import { Fragment } from 'react';
import {Popover, Transition} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid'
import NavBarLogo from '../components/NavBarLogo';
import BurgerMenuNavItem from '../components/BurgerMenuNavItem';
import BurgerMenuIcon from '../components/BurgerMenuIcon';


const BurgerMenu = (props) => {
    
    return (
              
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
            <NavBarLogo/>
            <BurgerMenuNavItem style="-mr-2" name="Close Menu" type="close"/>
            </div>
            <div className="mt-6">
                <nav className="grid gap-y-8">
                {props.burgerOptions.map((item) => (
                <BurgerMenuIcon src={item.src} alt={item.name} title={item.title}/>
                ))}
                </nav>
            </div>
            </div>
        </div>
    );
}
export default BurgerMenu;