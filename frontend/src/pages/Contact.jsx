import axios from "axios";
import React, { useState } from 'react';

const Contact = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [subject, setSubject] = useState('');
  let [content, setContent] = useState('');

  const contactHandler = async(e)=> {
    e.preventDefault();
 
    const response = await axios.post("http://localhost:3001/info", {
        name, email, subject, content
    });

    let status = response.data.status;

    if(status){
        alert(`Thanks for contacting us. We'll revert you soon.`);
        setName('');
        setEmail('');
        setSubject('');
        setContent('');
    }else{
        alert(`Something went wrong. Please try again later.`);
    }
  }
  return (
    <div className="content fifth-content">
      <div className="container-fluid">
        <div className="col-md-6">
          <div id="map">
            {/* <!-- How to change your own map point
                            1. Go to Google Maps
                            2. Click on your location point
                            3. Click "Share" and choose "Embed map" tab
                            4. Copy only URL and paste it within the src="" field below
                      --> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945"
              width="100%"
              height="500px"
              frameBorder="0"
              allowFullScreen
              title = "map"
            ></iframe>
          </div>
        </div>

        <div className="col-md-6">
          <form id="contact" onSubmit = {contactHandler}>
            <div className="row">
              <div className="col-md-12">
                <fieldset>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
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
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your email..."
                    required=""
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <input
                    name="subject"
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject..."
                    required=""
                    value={subject}
                    onChange={(e)=>setSubject(e.target.value)}
                  />
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <textarea
                    name="content"
                    rows="6"
                    className="form-control"
                    id="content"
                    placeholder="Your message content..."
                    required=""
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                  ></textarea>
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="btn" > 
                    Send
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
export default Contact;