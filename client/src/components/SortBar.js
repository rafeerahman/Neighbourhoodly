import React, { Component } from 'react'
import '../components/Rankings.css'

export class SortBar extends Component {

    render(){

        let sort = ""

        return(
            <div>
                <div className="sortBar">
                    Sort By:
                    <ul>
                        <li>
                            <button onClick={(e) => sort = "highestRating"}>Highest Rating</button>
                        </li>
                        <li>
                            <button onClick={(e) => sort = "lowestRating"}>Lowest Rating</button>
                        </li>
                        <li>
                            <button onClick={(e) => sort = "highestSafety"}>Highest Safety</button>
                        </li>
                        <li>
                            <button onClick={(e) => sort = "lowestSafety"}>Lowest Safety</button>
                        </li>
                        <li>
                            <button onClick={(e) => sort = "alpha"}>Alphabetical</button>
                        </li>                       
                    </ul>
                </div> 
            </div>
        )
    }
}

export default SortBar