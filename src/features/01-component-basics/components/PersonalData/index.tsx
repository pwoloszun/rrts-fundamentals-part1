import React, { Component } from 'react';

import styles from './styles.module.css';

export default class PersonalData extends Component {
  render() {
    const user = {
      name: 'Batman',
      age: 43,
      email: 'bruce.w@heroes.com',
      url: 'https://i.pinimg.com/originals/1c/be/c4/1cbec4f304cf609d2346d3c5f2ff8b22.jpg'
    };

    return (
      <div className={styles.personalData}>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <img src={user.url} alt='missing' />
      </div>
    );
  }
}
