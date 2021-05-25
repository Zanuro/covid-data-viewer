import React from 'react';

const NavBarLogo = (props) => {
    return (
        <div class={props.style ? props.style: ''}>
            <a href="#">
                <img class="h-8 w-auto sm:h-10" src="https://services.garmin.com/appsLibraryBusinessServices_v0/rest/apps/ec00d2e1-7602-4d0f-a7c5-cdcac4f75869/icon/08086358-e454-4745-8432-deca43802431" alt="Covid tracker"/>
            </a>
        </div>
    );
}
export default NavBarLogo;