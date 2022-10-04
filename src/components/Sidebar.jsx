import React from "react";
import { AvatarGenerator } from 'random-avatar-generator';

export default () => {
    const generator = new AvatarGenerator();
    const avatarUrl = generator.generateRandomAvatar();
    console.log(avatarUrl)

    return (
        <div className="sidebar">
            <img src= {avatarUrl}/>
            Test Sidebar!!!
        </div>
    )
}