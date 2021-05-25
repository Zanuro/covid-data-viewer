import React from 'react';
import {Popover, Transition} from '@headlessui/react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';

const BurgerMenuNavItem = (props) => {
    return (
      <div className={props.style}>
        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">{props.name}</span>
          {props.type === "open" ?
            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
            :
            <XIcon className="h-6 w-6" aria-hidden="true"/>
        }
        </Popover.Button> 
      </div>
    );
}
export default BurgerMenuNavItem;  