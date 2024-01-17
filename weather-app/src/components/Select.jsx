import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Select({names, selected}) {
    return (
        <Form.Select onChange={(e) => selected(e.target.value)}>
            <option value=''>Seleziona... </option>
            {names.map( (name, i) =>  <option key={i} value={name}>{name}</option>)}
        </Form.Select>
  );
}
