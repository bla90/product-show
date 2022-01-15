import React from 'react';
import moment from 'moment';
import { signOut } from '../firebase';
import { Link } from 'react-router-dom';

const CurrentUser = ({ displayName, photoURL, email, createdAt, children }) => {
  return (
    <section style={{margin: 2}} className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <Link to="profile"><h2>{displayName}</h2></Link>
          <p className="email">{email}</p>
          <p className="created-at">{moment(createdAt.toDate && createdAt.toDate()).calendar()}</p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={signOut} type="button" class="btn btn-danger">Sign out</button>
      </div>
    </section>
  );
};

CurrentUser.defaultProps = {
  displayName: 'Dhairya Khemka',
  email: 'dhairyakhemka7@gmail.com',
  photoURL: 'https://avatars.githubusercontent.com/u/60481234?v=4',
  createdAt: new Date(),
};

export default CurrentUser;
