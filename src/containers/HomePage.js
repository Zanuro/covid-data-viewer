import React, {Component} from 'react';
import Aux from '../hoc/Aux';
import HeaderStats from '../components/HeaderStats';
import Rankings from '../components/Rankings';

export class HomePage extends Component{
    state = {};

    render(){
        return(
            <Aux>
                <HeaderStats/>
                <Rankings />
            </Aux>
        );
    }
}

export default HomePage;