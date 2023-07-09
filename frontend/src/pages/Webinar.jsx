import axios from "axios";
import React, { useState } from 'react';

const Webinar = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');


  const registerHandler = async(e)=> {
    e.preventDefault();
 
    const response = await axios.post("http://localhost:3001/register", {
        name, email
    });

    let status = response.status;
    console.log(`status: ${status}`);

    if(status){
        alert(`Thanks for Registering us. Confirmation mail will be sent soon.`);
        setName('');
        setEmail('');
    }else{
        alert(`Something went wrong. Please try again later.`);
    }
  }
  return (
    <div className="content fifth-content">
      <div className="container-fluid">
        <div className="col-md-6">
          <form id="webinar" onSubmit={registerHandler}>
            <div className="row">
              <div className="col-md-12">
                <fieldset>
                  <input
                    name="webinar_name"
                    type="text"
                    className="form-control"
                    id="webinar_name"
                    placeholder="Your name..."
                    required=""
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <input
                    name="webinar_email"
                    type="email"
                    className="form-control"
                    id="webinar_email"
                    placeholder="Your email..."
                    required=""
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="btn">
                    Register
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Webinar;