import React, { useEffect, useState } from 'react';
import './DetailUser.scss';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import MinusLogo from '../../components/minuslogo/MinusLogo';
import Profil from '../../assets/profil.png';

const DetailUser = () => {
  document.title = 'Sova. / Profile';

  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign out successful');
        navigate('/');
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="detailUser">
      <MinusLogo />
      <hr />
      <h1>Personnal account</h1>
      <div className="account">
        {authUser ? (
          <>
            <p>
              Log In as: <span>{authUser.email}</span>
            </p>
            <img src={Profil} alt="profil" />
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              maiores ut nam error dolorem praesentium fuga id, voluptatum
              accusamus nihil?
            </p>
            <button onClick={userSignOut}>Sign Out</button>{' '}
          </>
        ) : (
          <>
            <p>You are not connected...</p>
            <Link to="/login">Log In</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailUser;
