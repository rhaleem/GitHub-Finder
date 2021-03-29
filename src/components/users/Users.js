import React, { Component } from 'react';
import UserItem from './UserItem';
//import PropTypes from 'prop-types';


export class Users extends Component {


  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
            <div>
                <UserItem key={user.id} user={user}/>
            </div>
        ))}
      </div>
    );
  }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap : '1rem'
}

export default Users;
