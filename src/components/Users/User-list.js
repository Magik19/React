import React, {useState} from 'react';
import Card from '../UserInterface/Card';
import styles from './User-list.module.css';

const UsersList = (props) => {
    const showUpdateHandler = () => {
      setUpdateIsShown(true);
    };
  
    const hideUpdateHandler = () => {
      setUpdateIsShown(false);
    };
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        <div>
                            {user.name} ({user.age} years old)
                        </div>   
                        <button onClick={showUpdateHandler}>Udpate</button>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;