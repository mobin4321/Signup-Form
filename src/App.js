import React from "react";

function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    c_password: "",
    isAgreed: false,
  });
  const style = {
    borderColor: formData.password === formData.c_password ? "green" : "red",
  };
  function handleEvent(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.c_password) {
      console.log("Signed Up Successfully");
      if (formData.isAgreed) {
        console.log("Thanks for signing up for our newsletter!");
      }
    } else {
      console.log("Passwords do not match");
    }
  }
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleEvent}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleEvent}
        />
        <input
          style={style}
          type="password"
          placeholder="Confirm Password"
          name="c_password"
          value={formData.c_password}
          onChange={handleEvent}
        />
        <div className="marketing">
          <input
            type="checkbox"
            id="isAgreed"
            name="isAgreed"
            checked={formData.isAgreed}
            onChange={handleEvent}
          />
          <label htmlFor="isAgreed">I want to join the newsletter</label>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default App;
