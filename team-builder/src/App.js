import './App.css';
import React, { useState } from 'react';
import Form from './Form';

function App() {
  const initial = {
    name: "",
    role: "",
    email: ""
  }

  const [teamMember, setTeamMember] = useState([]);

  const [formValues, setFormValues] = useState(initial);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues,[inputName]:inputValue});
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newMember.name || !newMember.email || !newMember.role) return;

    setTeamMember([newMember, ...teamMember]);
    setFormValues(initial);
  }


  return (
    <div className="App">
      <h1>Team List</h1>
      <Form values={formValues} update={updateForm} submit={submitForm}/>
      {teamMember.map(i => {
        return(
        <div className="team-member">
          <p>Name: {i.name}</p>
          <p>Email: {i.email}</p>
          <p>Role: {i.role}</p>
          <p>-----------------------</p>
        </div>
        )
      })}
    </div>
  );
}

export default App;
