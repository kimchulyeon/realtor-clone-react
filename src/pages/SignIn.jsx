import React, {useState} from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import OAuth from '../components/OAuth'

const SignIn = () => {
  // * 객체로 상태 관리
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPw, setShowPw] = useState(false);

  // * 구조분해할당
  const {email, password} = formData;

  // * 객체나 배열을 상태변경할 때 매개변수
  const handleForm = e => {
    setFormData(prev => ({
      ...prev,
      // * 요소의 id값으로 구분짓기
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            className="w-full rounded-2xl"
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt="key"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            {/* ID */}
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
              type="email"
              id="email"
              value={email}
              onChange={handleForm}
              placeholder="Email address"
            />

            {/* PW */}
            <div className="relative mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                type={showPw ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handleForm}
                placeholder="Password"
              />
              {showPw ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => {
                    setShowPw(prev => !prev);
                  }}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => {
                    setShowPw(prev => !prev);
                  }}
                />
              )}
            </div>

            {/*  */}
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Dont't have a account?
                <Link to="/sign-up" className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">
                  Register
                </Link>
              </p>
              <p>
                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ml-1">
                  Forgot password?
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150s ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Sign in
            </button>

            <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
