import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import pickachuAvatar from '../images/pickachuAvatar.png'
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import UserSidebar from '../components/UserSidebar';
import { getReviewsByUser } from '../actions/getReviewsByUser';
import { getUser } from '../actions/getUser';
import ProfileReview from '../components/ProfileReview';
import { uid } from 'react-uid';
import { withRouter } from 'react-router-dom';
import { checkSession } from '../actions/userActions/checkSession';

export class Profile extends Component {
    componentDidMount() {
        getUser(this)
        getReviewsByUser(this, this.props.app.state.currentUser.username)
    }

    state = {
        username: null,
        location: null,
        about: null,
        imageURL: null,
        reviews: null
    }
    

    render() {
        const {app} = this.props
        const {username, location, about, imageURL} = this.state
        
        return (
            <div>
                {/* <Hamburger isLoggedIn={isLoggedIn}/> */}
                <UserSidebar app = {app} showMenu={true}/> 
                <ProfileStyled>
                <div className="header-content"> 
                    <AccountCircleIcon className="icon" sx={{ fontSize: 64}}/>
                    <h1>My Profile</h1>
                </div>
                <div className="profile-strip">
                    <div className="left-content">
                        {imageURL !== null ? 
                        <img src = {imageURL} alt = "avatar" width = '128px' height = '128px'/>
                        : 
                        <AccountCircleIcon  className="default-avatar" alt = "avatar"/>}

                        <div className="profile-info"> 
                            <h2>{username}</h2>
                            <p className="location">{location ? `Location: ${location}` : null}</p>
                        </div>
                    </div>
                    <EditIcon className="editIcon" onClick={() => {this.props.history.push('/edit')}}/>
                </div> 
                <div className="profile-content" >
                    <div className="bottom-section">
                        <h3>Bio</h3>
                        <p className="desc">{about === null ? `Edit your profile to set a bio` : about}</p>  
                        <h4>Reviews</h4>  
                        {this.state.reviews ? this.state.reviews.map(review => {
                            return <ProfileReview key={uid}
                                neighbourhood={review.neighbourhoodName}
                                title={review.review.reviewTitle}
                                body={review.review.reviewBody}
                                rating={review.review.userRating}
                                date={review.review.date}
                            />
                        }) : <p className="desc">No reviews yet</p>}
                    </div>
                </div>
                </ProfileStyled> 
                        
            </div>      
        )
    }
}
const ProfileStyled = styled.div`
    float: left;
    position: relative;
    margin: 4% 0 0 10%;
    width: 90%;
    margin-left: 320px;

    .default-avatar {
        font-size: 128px;
        margin-left: 20px;
    }

    .header-content {
        display: flex;
        align-items: center;
        
        margin-left: 16px;
        margin-bottom: 16px;

        /* .icon: {

        } */

        h1 {
            margin-left: 8px;
            font-style: normal;
            font-size: 36px;
            font-weight: 500;
            line-height: 84px;
    
        }
    }

    .profile-strip{
            display: flex;
            justify-content: space-between ;
            align-items: center;
            margin-top: 64px;
            width: 90%;
            height: 200px;
            background-color: rgba(125, 150, 150, 0.65);
            .editIcon {
                color: black;
                font-size: 36px;
                border: 2px solid black;
                border-radius: 50%;
                cursor: pointer;
                margin: 32px;
            }

            .left-content {
                display: flex;
                .profile-info{
                    display: inline-block;

                    h2 {
                        margin-top: 8px;
                        margin-left: 32px;
                        font-style: normal;
                        font-size: 32px;
                        font-weight: 500;
                        line-height: 84px;        
                    }
                    
                    .location {
                        margin-top: 24px;
                        margin-left: 32px;
                        font-style: normal;
                        font-size: 16px;
                        font-weight: 500;
                    }
                }
                img {
                    margin-left: 32px;
                    border: 2px solid;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
        }

    .profile-content {
        display: block;
        position: relative;
        background: #E5E5E5;
        width: 90%;
        height: 100%;
        margin-top: 25px;

        .bottom-section{
            display: block;
            padding-top: 32px;
            padding-bottom: 32px;
            margin-left: 32px;

            h3{
                font-style: normal;
                font-weight: normal;
                text-decoration: underline;
                font-size: 32px;  
                color: #928787;
            }
            .desc {
                margin-top: 16px;
                font-style: normal;
                font-size: 24px;
            }

            h4{
                margin-top: 64px;
                font-style: normal;
                font-size: 32px;
                font-weight: 500; 
                text-decoration: underline;
            }

            .reviewContainer{
                display: block;
                border-radius: 1.25rem;
                margin-top: 25px;
                width: 80%;
                height: 150px; 
                background: #C4C4C4;

                .reviewContent{
                    display: flex;
                    margin-left: 16px;
                    margin-top: 16px;
                    .infoContainer{
                        margin-top: 20px;
                        margin-right: 20px;
                        font-weight: normal;
                        font-size: 16px;
                        text-align: left;

                        .neighb {
                            text-decoration: underline;
                        }
                            
                    }
                    .left {
                        .title{
                            font-style: normal;
                            font-weight: bold;
                            font-size: 20px;
                            margin-top: 16px;
                            margin-left: 16px;
                        }
                        .icons {
                        margin-left: 16px;
                        }
                        
                        .content{
                            font-style: normal;
                            font-weight: normal;
                            font-size: 16px;
                            line-height: 36px;   
                            margin-left: 16px;
                        }
                    }
                }
            }  
        }
    }
`

export default withRouter(Profile)