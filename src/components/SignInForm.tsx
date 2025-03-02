import { useState } from 'react';

const SignInForm = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  function signIn(e: React.FormEvent) {
    e.preventDefault();

    console.log({username, password});
  }

  return (
    <section className="sign-in-form-container">
        <form className="sign-in-form" onSubmit={(e) => signIn(e)}>
          <input
            type="text"
            placeholder="choose a username"
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
          <input
            type="text"
            placeholder="choose a password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <button type="submit" className="sign-in-btn">
            Sign In Anonymously
          </button>
        </form>
        <div>{ username }</div>
        <div>{ password }</div>
    </section>
  );
};

export default SignInForm;