export function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(`{${formJson.username}, ${formJson.password}}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input name="username" />
      </label>
      <label>
        Password: <input type="password" name="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
