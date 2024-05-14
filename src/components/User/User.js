import { useEffect, useState } from "react";

const User = (props) => {

    const [followers, setFollowers]  = useState(100000);
    const [likes, setLikes] = useState(40000);
    console.log('User function');
 
    useEffect(() => {
        console.log('User useEffect called');
    })



    return (
        <div className="user-card">
            {console.log('USER render')}
            <h2>{props.name}</h2>
            <h3>Delhi</h3>
            <h3>me@divyatiwari.me</h3>
            <h3>Followers: {followers}</h3>
            <h3>Likes: {likes}</h3>
        </div>
    )
}

export default User;