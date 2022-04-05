import React, { Component } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import UserSidebar from '../components/UserSidebar'
import { withRouter } from 'react-router-dom';
import { addImageAndInfo } from '../actions/addImageAndInfo';
import { checkSession } from '../actions/userActions/checkSession';
import { TextField } from '@mui/material';

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
      const {username} = this.state

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
                    addImageAndInfo(e.target, username, app, checkSession, () => {this.props.history.push('/Profile')})
                }}>
                <div className="set-image">
                    
                    <img className="image" src={this.state.image}/>
                   
                    <label className="upload" for="upload-photo">Change avatar</label>
                    <input name="image" id="upload-photo" type="file" onChange={this.handleFileChange}/>
                </div>

                <div className="set-username">
                    <TextField className="textfield" name="username" type="text" onChange={this.handleInputChange} id="username" label="Username" variant="outlined"/>
                </div>

                <div className="set-location">
                    <TextField className="textfield" name="location" type="text" onChange={this.handleInputChange} id="location" label="Location" variant="outlined"/>
                </div>

                
                <div className="set-status">
                    <TextField className="textfield" type="text" onChange={this.handleInputChange} name="about" id="about" label="Bio" variant="outlined"/>
                </div>

                <input value="Save" type="submit"/>
            </form>
            <button  className="buttonBack" onClick={() => {this.props.history.push('/profile')}}>Back</button>
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
    .textfield {
        margin-bottom: 36px;
        width: 100%;
    }
    
    .upload {
        cursor: pointer;
        border: 2px solid blue; 
        font-weight: 600;
        padding: 10px;
    }

    #upload-photo {
        opacity: 0;
        position: absolute;
        z-index: -1;
    }

    .image {
        display: block;
        margin-bottom: 20px;
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
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 36px;
            
        }

        input[type=submit] {
            cursor: pointer;
            padding: 16px;
            font-size: 16px;
            width: 100%;
            background-color: #252627;
            color: white;
            margin-bottom: 20px;
            margin-top: 10px;
            height: 60px;
        }
    }   
    .buttonBack {
        font-size: 16px;
        padding: 16px;
        height: 60px;
    } 
`

export default withRouter(EditProfile)