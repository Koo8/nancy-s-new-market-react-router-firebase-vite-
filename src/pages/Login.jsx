import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub } from 'react-icons/ai';
import {
  auth,
  googleauthprovider,
  githubauthprovider,
} from '../config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { userInfoContext } from '../context/UserContext';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { sign_in_google, sign_out_google } = userInfoContext();

  const navigate = useNavigate();

  const signinwithgoogle = async () => {
    await signInWithPopup(auth, googleauthprovider)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          id: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        sign_in_google(userInfo);
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signinwithgithub = async () => {
    await signInWithPopup(auth, githubauthprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signoutwithgoogle = async () => {
    try {
      await signOut(auth);
      sign_out_google();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='max-w-5xl my-10 mx-auto'>
      <div className='mx-auto flex flex-col justify-center items-center gap-5'>
        <div className='flex gap-6'>
          <div
            className='flex gap-4 justify-center items-center border-[1px] border-slate-500 px-6 py-3 rounded-md cursor-pointer'
            onClick={signinwithgoogle}
          >
            <FcGoogle size={36} />
            <span>Sign in with Google</span>
          </div>
          <Button handleClick={() => signoutwithgoogle()}>Sign Out</Button>
        </div>
        {/* <div
          className='flex gap-4 justify-center items-center border-[1px] border-slate-500 px-6 py-3 rounded-md'
          onClick={signinwithgithub}
        >
          <AiOutlineGithub size={36} />
          <span>Sign in with Github</span>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
