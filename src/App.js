import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Login from './components/login/Login';
import { useStateValue } from "./stateProvider";
import AppRoutes from './AppRoutes';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
}

export default App;
