import React from 'react';


const MainStat = (props) => {
    return (
        <div class="shadow border rounded-lg">
            <div class="flex items-center space-x-4 p-4">
                <div class="flex items-center p-4 bg-white-600 text-white rounded-lg">
                    <img src={props.src} width="60" height="60" />
                </div>
                <div class="flex-1">    
                    <p class="text-gray-500 font-semibold text-justify md:text-left">{props.title}</p>
                    <div class="flex items-baseline space-x-4">
                        <h2 class="text-2xl font-semibold">{props.value}</h2>
                        <p class="text-green-700 flex font-semibold space-x-1">
                            <span>&#8593;</span>
                            <span class="font-bold">{props.increasing}</span>
                        </p>
                    </div>
                </div>
            </div>
            <a href="#" class="block p-3 text-lg font-semibold bg-purple-50 text-purple-800 hover:bg-purple-100 cursor-pointer">
                View all
            </a>
            </div>
    );
}
export default MainStat;