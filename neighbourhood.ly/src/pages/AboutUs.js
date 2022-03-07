import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import '../App.css';
import '../components/AboutUs.css'
class AboutUs extends Component {

    render(){
        const {isLoggedIn, isAdmin} = this.props
        return(
            <div>

                <Sidebar className="sidebar" 
                SignInType={isLoggedIn() ? "MainMenu" : "LogIn"}
                isAdmin={isAdmin}
                tab1="About Us"
                tab2="Neighbourhoods"
                tab3="Rankings"
                tab4="Home" 
                showMenu={true}/>

                <div className='header'>
                    Learn About Neighbourhoods Before You Move In
                </div>

                <div className='disc'>
                The housing market in Toronto is as expensive as ever and the last thing someone wants is to sign a lease or a mortgage only to move and be disappointed by their new neighbourhood! That’s where Neighborly.to comes in - a comprehensive one stop destination for all things Toronto neighbourhoods.
                </div>

                <div className='creatorsBox'>
                    <div className='creatorsBoxHeader'>Meet The Creators</div>
                    <tbody>
                        <tr>
                            <td>
                                <div className='samplePicture'/>
                            </td>
                            <td>
                                Rafee Rahman
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='samplePicture'/>
                            </td>
                            <td>
                                Syed Ahmed
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='samplePicture'/>
                            </td>
                            <td>
                                Lama Amin
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='samplePicture'/>
                            </td>
                            <td>
                                Steven Lau
                            </td>
                        </tr>                                                              
                    </tbody>
                </div>

            </div>
        )
    }
}

export default AboutUs