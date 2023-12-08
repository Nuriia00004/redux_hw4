import { useSelector } from 'react-redux';

const UserData = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h2>User Data:</h2>
      {user && (
        <ul>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
        </ul>
      )}
    </div>
  );
};

export default UserData;
