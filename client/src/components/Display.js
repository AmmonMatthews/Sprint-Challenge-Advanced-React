import React from 'react';
import axios from 'axios';

import Header from './Header';



class Display extends React.Component{

    state = {
        players : []
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
            .then(res => {
                this.setState({players: res.data})
            })
            .catch(error => {
                console.log("Players unavailable", error)
            });
    }


    render() {
        return(
            <div>
                <Header />
                <div className="display">
                    <h1>Womens World Cup Players</h1>
                    {this.state.players.map(player => {
                       return( 
                            <div key={player.id}>
                                <h2>{player.name}</h2>
                                <p>{player.country}</p>
                                <p>Searches:{player.searches}</p>
                             </div>
                             )
                        })
                    }
                </div>
            </div>
           
        )
    }
};

export default Display;