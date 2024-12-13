import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { USERS } from 'data/users.data';
import { EPrivatePaths } from 'models/TRoute';
import { USER_ROLES } from 'models/TUser';
import { loginUser } from 'store/slices/user/user.slice';

export const useLogin = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setLoading(true);

    // check the inputted email and password if it matches the USERS
    // will eventually be replaced with an API call.
    const fetchedUser = USERS.find(
      (user) => user.email === email && user.password === password,
    );

    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (!fetchedUser) {
      notification.error({
        message: 'Invalid credentials',
        description: 'Please check your email and password.',
      });

      setLoading(false);

      return;
    }

    dispatch(loginUser(fetchedUser));

    if (fetchedUser.role === USER_ROLES.ADMIN)
      navigate(`/${EPrivatePaths.Customers}`);
    else navigate(`/${EPrivatePaths.Clients}`);

    setLoading(false);
  };

  return { login, loading };
};
