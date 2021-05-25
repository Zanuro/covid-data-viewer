import React, {Component} from 'react';
import MainStat from './MainStat';
import recovered from '../assets/recovered.png';
import tick from '../assets/tick.jpg';
import death from '../assets/death.jpg';
var dateModule = require('../helpers/currentDate');

const fetch = require("node-fetch");

export class HeaderStats extends Component{
    state = {
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        confirmed_prev: 0,
        deaths_prev: 0,
        recovered_prev: 0,
    };

    formatNumber(x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    componentDidMount(){
        fetch(`https://covid19.mathdro.id/api/daily/${dateModule.today}`)
        .then(res => res.json())
        .then((data) => {
            var totalCases = 0;
            var recovered = 0;
            var deaths = 0;
            data.map((item) => {
                totalCases += parseInt(item["confirmed"]);
                recovered += item["recovered"] === '' ? 0: parseInt(item["recovered"]);
                deaths += parseInt(item["deaths"]);
            })
            this.setState({
                confirmed: totalCases,
                recovered: recovered,
                deaths: deaths,
            })
        })
        .catch(console.log)


        fetch(`https://covid19.mathdro.id/api/daily/${dateModule.prev}`)
        .then(res => res.json())
        .then((data) => {
            var totalCases = 0;
            var recovered = 0;
            var deaths = 0;
            data.map((item) => {
                totalCases += parseInt(item["confirmed"]);
                recovered += item["recovered"] === '' ? 0: parseInt(item["recovered"]);
                deaths += parseInt(item["deaths"]);
            })
            
            this.setState({
                confirmed_prev: totalCases,
                recovered_prev: recovered,
                deaths_prev: deaths,
            })
        })
        .catch(console.log)


    }


    render(){
        return(
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div class= "flex items-center justify-center">
                    <div class="bg-white p-4 rounded w-full">
                        <h2 class="text-base font-medium font-bold text-gray-500">
                            Covid-19 status
                        </h2>
                        <div class="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0 mt-4">
                            <MainStat title="Confirmed cases" value={this.formatNumber(this.state.confirmed)} increasing={this.formatNumber(this.state.confirmed - this.state.confirmed_prev)}src={tick}/>
                            <MainStat title="Deaths" value={this.formatNumber(this.state.deaths)} increasing={this.formatNumber(this.state.deaths - this.state.deaths_prev)} src={death}/>
                            <MainStat title="Recovered" value={this.formatNumber(this.state.recovered)} increasing={this.formatNumber(this.state.recovered - this.state.recovered_prev)} src={recovered}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default HeaderStats;