import React from 'react';
import '../../App.css';
import Hamburger from '../components/Hamburger'
import InfoBar from '../../components/InfoBar';
import Sidebar from '../../components/Sidebar';

export class Dashboard extends Component {
    render(){
        const {data, isAdmin} = this.props
        return(
            <Sidebar className="sidebar" 
            SignInType="MainMenu"
            handleAdmin={isAdmin}
            tab1="About Us"
            tab2="Neighbourhoods"
            tab3="Rankings"
            tab4="Home" 
            showMenu={true}/>
        )
    }
}

export default Dashboard