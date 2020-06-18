import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchUser } from '../api/users';

const User = props => {
  const { id } = props;
  console.log(id);
  const [user, setUser] = useState({});

  console.log('baseurl', process.env.BASE_URL);
  useEffect(async () => {
    const data = await fetchUser(1).json();
    console.log(data);
    setUser(data);
  }, []);
  return (
    <div>
      <h1>User</h1>
      {JSON.stringify(user)}
    </div>
  );
};

User.defaultProps = {
  id: undefined,
};

User.propTypes = {
  id: PropTypes.string,
};

export default User;
