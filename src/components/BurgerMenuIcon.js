import React from 'react';

const BurgerMenuIcon = (props) => {
    return (
        <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
            <img className="flex-shrink-0 h-6 w-6 text-indigo-600" alt={props.alt} src={props.src} aria-hidden="true"/>
            <span class="ml-3 text-base font-medium text-gray-900">
                {props.title}
            </span>
        </a>
    );
}
export default BurgerMenuIcon;  