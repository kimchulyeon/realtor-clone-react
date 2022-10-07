import React, {useState} from 'react';

const SignIn = () => {
  // * 객체로 상태 관리
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
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
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={handleForm}
              placeholder="Email address"
            />
            <input className="w-full" type="password" id="password" value={password} onChange={handleForm} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
