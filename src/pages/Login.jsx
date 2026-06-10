import React, { useState, useRef, useEffect } from "react";

function Login() {

  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [error, setError] = useState({});
  const nameRef = useRef(null);

  useEffect(() => {
  nameRef.current.focus();
  }, []);
  
  const inputHandler = (e) => {

    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    let newError = { ...error };
    
    if (name === "name") {

      if (value === "") {
        newError.name = "Name is required";
      }
      else if (!isNaN(value)) {
        newError.name = "Numbers are not allowed";
      }
      else {
        delete newError.name;
      }
    }
    if (name === "email") {

      if (value === "") {
        newError.email = "Email is required";
      }
      else if (!value.includes("@gmail.com")) {
        newError.email = "Enter valid gmail";
      }
      else {
        delete newError.email;
      }
    }

    if (name === "number") {

      if (value === "") {
        newError.number = "Phone number is required";
      }
      else if (
        value.length !== 10 ||
        isNaN(value)
      ) {
        newError.number = "Phone number must be 10 digits";
      }
      else {
        delete newError.number;
      }
    }

    setError(newError);
  };
  const handleSubmit = (e) => {

    e.preventDefault();
    if(input.name==='' ||input.email==='' || input.number==='' ){
      alert('please fill all')
      return;
    }
    localStorage.setItem("user", JSON.stringify(input));

  alert("Login Successful");
  };

  return (
    <div  id="Login" style={{ padding: "20px" }} className="formfull">

   

      <form onSubmit={handleSubmit} className="form">

           <h1 className="font-bold m-2 p-1 text-4xl">Login form</h1>
        <div>
          <label>Name</label>
          <br />

          <input
           ref={nameRef}
            type="text"
            name="name"
            placeholder="Enter name"
            value={input.name}
            onChange={inputHandler}
          />

          <p style={{ color: "red" }}>
            {error.name}
          </p>
        </div>

       
        <div>
          <label>Email</label>
          <br />

          <input
            
            type="email"
            name="email"
            placeholder="Enter email"
            value={input.email}
            onChange={inputHandler}
          />

          <p style={{ color: "red" }}>
            {error.email}
          </p>
        </div>

        <div>
          <label>Phone Number</label>
          <br />

          <input
            type="tel"
            name="number"
            placeholder="Enter number"
            value={input.number}
            onChange={inputHandler}
          />

          <p style={{ color: "red" }}>
            {error.number}
          </p>
        </div>

        <br />

        <button  className="bg-green-300 px-6 py-2 rounded-xl border-2 border-black">
          Submit
        </button>

      </form>
    </div>
  );
}
export default Login