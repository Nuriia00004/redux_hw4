import { Provider } from 'react-redux';
import store from './redux/store';
import UserForm from './components/UserForm';
import UserData from './components/UserData';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <UserForm />
        <UserData />
      </div>
    </Provider>
  );
};

export default App;
