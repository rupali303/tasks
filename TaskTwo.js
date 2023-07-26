import React, { useState } from 'react';
import "./Form.css"

const TaskTwo = () => {
    const [showInput1, setShowInput1] = useState(false); 
    const [showInput2, setShowInput2] = useState(false); 
      const [name, setName] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: ""
    })

    const handleChange = (e) => {
        setName((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const [selected, setSelected] = useState("")
    const handleRadioChange = (e) => {
        const { value } = e.target;
        setSelected(value);
        if (value === "phone") {
            setShowInput1(true); 
            setShowInput2(false); 
          } else if (value === "email") {
            setShowInput1(false); 
            setShowInput2(true); 
          }
    }
    console.log("radio", selected);

    return (
        <form className="form">
          <div className='row'>
            <div className='col-md-6' >
                <label htmlFor="firstname">First Name:</label>
                <input type="text" value={name.firstname} name='firstname' onChange={handleChange} />
            </div>

            <div className='col-md-6' >
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" value={name.lastname} name='lastname' onChange={handleChange} />
            </div>
            </div>

            <div >
                <label style={{marginTop:"10px"}} htmlFor="radio">How should we contact you?</label>

                <div className='check'>
                    <label>
                        phone
                        <input type='radio' name='phone' value="phone" onChange={handleRadioChange} checked={selected === "phone"} />
                    </label>
                    <label>
                        email
                        <input type='radio' name='email' value="email" onChange={handleRadioChange} checked={selected === "email"} />
                    </label>
                </div>
            </div>
            {showInput1 && (
        <div>
          <label>
          phone:
            <input type="number" />
          </label>
        </div>
      )}
      {showInput2 && (
        <div>
          <label>
          email:
            <input type="email" />
          </label>
        </div>
      )}

        </form>

    );
};

export default TaskTwo;
