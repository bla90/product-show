import React, { useContext } from 'react';
import './css/style.css';

import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import { UserContext } from '../providers/UserProvider';

const Authentication = ({ loading }) => {
  const user = useContext(UserContext);

  if (loading) return null;

  return (
    <div>
      { user ? <CurrentUser {...user} /> : <SignIn /> }
    </div>
  )
};

export default Authentication;
