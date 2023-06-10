import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
export function ValidatedInput() {
  const [text, setText] = useState('');
  const [valid, setValid] = useState('dark');

  function validation(event) {
    if (event.target.value.length >= 8) {
      setText(event.target.value);
      setValid('success');
    } else {
      setText(event.target.value);
      setValid('danger');
    }
  }
  return (
    <div>
      <Form.Label>Password</Form.Label>
      <InputGroup className="w-25">
        <Form.Control
          className={`border border-${valid}`}
          type="password"
          value={`${text}`}
          onChange={(event) => validation(event)}
        />
        {valid === 'danger' && <i class="fa-solid fa-xmark text-danger" />}
        {valid === 'success' && <i class="fa-solid fa-check text-success" />}
      </InputGroup>
    </div>
  );
}
