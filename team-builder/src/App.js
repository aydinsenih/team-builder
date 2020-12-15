import './App.css';
import React, { useState } from 'react';
import Form from './Form';
import styled from 'styled-components';

function App() {
  
  const initial = {
    name: "",
    role: "",
    email: ""
  }

  const [teamMember, setTeamMember] = useState([]);

  const [formValues, setFormValues] = useState(initial);

  const [isEditing, setIsEditing] = useState(false);

  const [memberToEdit, setMemberToEdit] = useState(null);

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

    if(isEditing){
      let teamMemberCopy = [...teamMember];
      teamMemberCopy.map(member => {
        if(member=== memberToEdit){
          console.log(member)
          member.name = newMember.name
          member.email = newMember.email
          member.role = newMember.role
        }
        setMemberToEdit(null)
        return setTeamMember(teamMemberCopy);
      })
    }
    else{
    setTeamMember([newMember, ...teamMember]);}

    setFormValues(initial);
    setIsEditing(false);
  }

  const editMember = (member) => {
    setIsEditing(true);
    setMemberToEdit(member)
    setFormValues(member)
  }


  return (
    <div className="App">
      <h1>Team List</h1>
      <Form values={formValues} update={updateForm} submit={submitForm} isEditing={isEditing}/>
      {teamMember.map(member => {
        return(
        <TeamMember className="team-member" key={Math.random()*10}>
          <p>Name: {member.name}</p>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
          <Button onClick={()=>editMember(member)}>Edit</Button>
        </TeamMember>
        )
      })}
    </div>
  );
}

const TeamMember = styled.div`
  border: 2px solid black;
  width: 20%;
  text-align:center;
  margin: 10px auto;
  padding: 5px;
  background-color:darkcyan;
`;

const Button = styled.button`
background-color:coral;
margin-bottom: 5px;
`;
export default App;
