import React from 'react';
import '../../App.css';
import InfoBar from '../../components/InfoBar';
import UserSidebar from '../../components/UserSidebar'

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