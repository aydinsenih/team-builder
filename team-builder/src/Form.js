import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Form(props){
    const {values, update, submit, isEditing} = props;

    const onChange = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }


    return(
        <form className="form container" onSubmit={onSubmit}>
            <FormGroupDiv className="form-group inputs">
                <label>
                    Name<br/>
                    <input 
                        name="name"
                        type="text"
                        placeholder="your name"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Email<br/>
                    <input 
                        name="email"
                        type="email"
                        placeholder="your email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Role<br/>
                    <select name="role" value={values.role} onChange={onChange}>
                        <option value="">--Select Role--</option>
                        <option value="Front-end Developer"> Front-end Developer</option>
                        <option value="Back-end Developer"> Back-end Developer</option>
                        <option value="Designer"> Designer</option>
                        <option value="Full Stack Web Developer">Full Stack Web Developer</option>
                    </select>
                </label>
                <div className="submit">
                    <Button>{isEditing ? "Edit" : "Submit"}</Button>
                </div>
            </FormGroupDiv>
        </form>
    )
}

const FormGroupDiv = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
background-color:wheat;
`;

const Button = styled.button`
background-color:coral;
margin: 5px;
`;
