import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  const InputEvent=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  
  }

     

  const submit = (e)=>{
    e.preventDefault();
    alert(`My name is ${data.name} my email is ${data.email} and my phone number is ${data.phone}` )
       

  }
  return (
    <>
            <div className="my-5">
          <h1 className="text-center"> Contact Us</h1>
            </div>
      <div className="container-fluid my-5 ">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <form onSubmit={submit}>
              <div class="mb-3">
                <label  class="form-label">
                  Fullname
                </label>
                <input
                  type="text"
                  className="form-control"
                  
                  placeholder="Enter Your Name"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                 
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone number
                </label>
                <input
                  type="text"
                  className="form-control"
              
                  placeholder="Enter Number"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                
                  placeholder="Enter message"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <button className="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
