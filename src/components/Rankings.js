import React, {Component } from 'react';
import RegionRanking from './RegionRanking';
import * as d3 from "d3";
import allCountries from '../helpers/countries_func';

export class Rankings extends Component{

    state = {
        data: null,
        countries: {},
        possible_abbr: [],
        countries_ame: [],
        countries_afr: [],
        countries_asi: [],
        countries_oce: [],
        countries_eu: [],
        loading: true,
        available_countries: [],  //abbr of available countries from the api
    }   

    componentDidMount(){  

        fetch('https://covid19.mathdro.id/api/countries')
        .then(res => res.json())
        .then((data) => {
            
            this.setState({
                countries: data["countries"]
            });

            for(var i=0;i<this.state.countries.length; i++){
                if(this.state.countries[i]['iso2'] !== undefined){
                    this.setState(prevState => ({
                        possible_abbr: [...prevState.possible_abbr, this.state.countries[i]['iso2'].toLowerCase()]
                    }))
                }
            }

            d3.csv("/all.csv").then((d) => {
           
                this.setState({
                    data: d,
                    loading: false,
                })
    
                this.state.data.map((row) => {
                    if(this.state.possible_abbr.includes(row["alpha-2"].toLowerCase())){
                        switch(row["region"]){
                            case "Africa":
                                this.setState({
                                    countries_afr: {
                                        ...this.state.countries_afr,
                                        [row["name"]]: row["alpha-2"].toLowerCase(),
                                    }
                                })
                                break;
                            case "Americas":
                                this.setState({
                                    countries_ame: {
                                        ...this.state.countries_ame,
                                        [row["name"]]: row["alpha-2"].toLowerCase(),
                                    }
                                })
                                break;
                            case "Asia":
                                this.setState({
                                    countries_asi: {
                                        ...this.state.countries_asi,
                                        [row["name"]]: row["alpha-2"].toLowerCase(),
                                    }
                                })
                                break;
                            case "Europe":
                                this.setState({
                                    countries_eu: {
                                        ...this.state.countries_eu,
                                        [row["name"]]: row["alpha-2"].toLowerCase(),
                                    }
                                })
                                break;
                            case "Oceania": 
                                this.setState({
                                    countries_oce: {
                                        ...this.state.countries_oce,
                                        [row["name"]]: row["alpha-2"].toLowerCase(),
                                    }
                                })
                                break;
                            
                            default:
                                break;
                        }
                    }
                });
    
            });

        })
        .catch(console.log)
    }

    render(){
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div class= "flex items-center justify-center">
                        <div class="bg-white p-4 rounded w-full">
                            <h3 class="text-gray-500 font-bold text-center">Regions</h3>
                            <div class="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0 mt-4">
                                <RegionRanking data={this.state.countries_ame}/>
                                {/*<RegionRanking data={this.state.countries_asi}/>*/}
                                {/*<RegionRanking data={this.state.countries_eu}/>
                            </div>
                            <div class="md:grid md:grid-cols-2 md:gap-4 space-y-4 md:space-y-0 mt-4">

                                <RegionRanking data={this.state.countries_afr}/>
                                <RegionRanking data={this.state.countries_oce}/>
        </div>*/}           </div>
                        </div>
                    </div>
                </div>
        );
    }
        
    
}
export default Rankings;