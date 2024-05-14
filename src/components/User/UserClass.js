import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            followers: 100000,
            likes: 5500000,
        }
        console.log('USERCASE constructor')
    }

    componentDidMount() {
        console.log('USERCASE Componet Did Mount');
    }
    componentDidUpdate() {
        console.log('USERCASE Component Did Update');
    }

    render() {
        console.log('USER CLASS render');
        const { name } = this.props;
        const { followers, likes } = this.state;
        return (
            <div className="user-card">
                <h2>{name}</h2>
                <h3>Delhi</h3>
                <h3>me@divyatiwari.me</h3>
                <h3>Followers: {followers}</h3>
                <h3>Likes: {likes}</h3>
            </div>
        )
    }
      
}

export default UserClass;