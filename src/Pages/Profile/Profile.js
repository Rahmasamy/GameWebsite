import React from 'react';
import { PersonalInfo,GamingLibrary } from '../../sections';
import './Profile.css';
const Profile = () => {
    return (
        <div className='stream'>
            <PersonalInfo/>
            <GamingLibrary/> 
        </div>
    );
}

export default Profile;
