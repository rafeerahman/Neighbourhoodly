import React, { Component } from 'react'
import RankingsList from '../components/RankingsList'
import '../components/Rankings.css'
import UserSidebar from '../components/UserSidebar'
import SidebarNonHome from '../components/SidebarNonHome'
import { setSafetyScore } from '../actions/setSafetyScore'
import { setNeighbourhoodRating } from '../actions/setNeighbourhoodRating'

export class Rankings extends Component {
    componentDidMount() {
        // Setting safety and rating's
        this.props.neighbourhoodsData.forEach((neighbourhood) => {
            setSafetyScore(neighbourhood, this.props.max)
            setNeighbourhoodRating(neighbourhood, () => {this.setState({loaded: true})})})
    }

    state = {
        loaded: false,
        search: ""
    }
    
    render(){
        const { app, neighbourhoodsData } = this.props
        
        return(
            <div>

            {app.state.currentUser ? <UserSidebar app = {app} showMenu={true}/> : 
                    <SidebarNonHome showMenu={true} />}


                <div className='RankingContainer'>
                    <ul>
                        <li>
                        {this.state.loaded ? <RankingsList parent={this} neighbourhoods={neighbourhoodsData}/> : null }
                        </li>
                    </ul> 
                </div>
            </div>
        )
    }
}

export default Rankings


