import React, { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const formSubmit = (event) => {
    event.preventDefault();
    alert(`Your form submitted successfully ${input.fullname}!`);
    setInput({
      fullname: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const changeInput = (event) => {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} action="POST">
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                  name="fullname"
                  value={input.fullname}
                  onChange={changeInput}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput2" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Mobile Number"
                  name="phone"
                  value={input.phone}
                  onChange={changeInput}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput3" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="name@example.com"
                  name="email"
                  value={input.email}
                  onChange={changeInput}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter your message..."
                  name="message"
                  value={input.message}
                  onChange={changeInput}
                ></textarea>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-outline-primary mb-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
