import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userActions";

const UserForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(userData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
