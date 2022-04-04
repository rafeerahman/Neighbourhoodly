import React, { Component } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import UserSidebar from '../components/UserSidebar'
import { withRouter } from 'react-router-dom';
import { addImageAndInfo } from '../actions/addImageAndInfo';

export class EditProfile extends Component {

    state = {
        username: "",
        location: null,
        about: null,
        image: null,
    }
    handleInputChange = (e) => {
        const target = e.target
        const value = target.value 
        const name = target.name
        
        this.setState({
            [name]: value
        })

    }   

    handleFileChange = (e) => {
        this.setState({
            image: URL.createObjectURL(e.target.files[0])
        })
    }

  render() {
      const {app} = this.props
      const {username, location, about} = this.state

    return (
      <div>
          <UserSidebar app = {app} showMenu={true}/> 
          <EditProfileStyled>
            <div className="header-content"> 
                <AccountCircleIcon className="icon" sx={{ fontSize: 64}}/>
                <h1>Edit Profile</h1>
            </div>

            <form className="editProfile" onSubmit={(e) => {
                    e.preventDefault()
                    addImageAndInfo(e.target, username, () => {this.props.history.push('/Profile')})
                }}>
                <div className="set-image">
                    
                    <img className="image"src={this.state.image}/>
                    
                    <label>Set a profile image</label>
                    <input name="image" type="file" onChange={this.handleFileChange}/>
                </div>

                <div className="set-username">
                    <p>Edit username</p>
                    <input name="username" type="text" onChange={this.handleInputChange}/>
                </div>

                <div className="set-location">
                    <p>Set your location</p>
                    <input name="location" type="text" onChange={this.handleInputChange}/>
                </div>

                
                <div className="set-status">
                    <p>Set your status</p>
                    <textarea onChange={this.handleInputChange} name="about"></textarea>
                </div>

                <input value="Submit" type="submit"/>
            </form>
            <button onClick={() => {this.props.history.push('/profile')}}>back</button>
          </EditProfileStyled>
      </div>
      
    )
  }
}

const EditProfileStyled = styled.div`
    float: left;
    margin: 4% 0 0 10%;
    margin-left: 320px;
    .header-content {
        display: flex;
        align-items: center;
        
        h1 {
            margin-left: 20px;
            font-style: normal;
            font-size: 36px;
            font-weight: 500;
            line-height: 84px;
    
        }
    }
    .image {
        border: 1px solid black;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }
    p {
        font-weight: bold;
        margin-top: 20px;
    }
    form { 
        .set-image {
            display: block;
        }

        input[type=submit] {
            padding: 10px;
            width: 100%;
            margin-bottom: 10px;
            margin-top: 10px;
        }
    }
    
    

`
export default withRouter(EditProfile)