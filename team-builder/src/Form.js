import React from 'react';

export default function Form(props){
    const {values, update, submit} = props;

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
            <div className="form-gropu inputs">
                <label>
                    Name
                    <input 
                        name="name"
                        type="text"
                        placeholder="your name"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Email
                    <input 
                        name="email"
                        type="email"
                        placeholder="your email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Role
                    <select name="role" value={values.role} onChange={onChange}>
                        <option value="">--Select Role--</option>
                        <option value="Front-end Developer"> Front-end Developer</option>
                        <option value="Back-end Developer"> Back-end Developer</option>
                        <option value="Designer"> Designer</option>
                        <option value="Full Stack Web Developer">Full Stack Web Developer</option>
                    </select>
                </label>
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}