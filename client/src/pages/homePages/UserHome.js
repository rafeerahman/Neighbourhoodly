import React from 'react';
import '../../App.css';
import InfoBar from '../../components/InfoBar';
import UserSidebar from '../../components/UserSidebar'
import Sidebar from '../../components/Sidebar';
import {toronto} from '../../images/toronto2.png'
import { checkSession } from '../../actions/userActions/checkSession';
class UserHome extends React.Component {

    render() {
        const {app} = this.props

        return (
        <div>
            <UserSidebar app={app} showMenu={true}/>
            <InfoBar />
          </div>
        )
    }
}

export default UserHome;