import { useState } from 'react';
export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ username }, { password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:{' '}
        <input
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          value={password}
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
