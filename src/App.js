import './App.css';
import Routers from './Router';
import { BrowserRouter as Router } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from './context/AppContext';
import LoadingPage from './components/LoadingPage/LoadingPage';
import Header from './components/Header.js/Header';
function App() {
  const { isLoading } = useContext(AppContext);

  return (
    isLoading ? (<LoadingPage />) :
    <div className="App">
      <Router>
        <Header />
        <Routers />
      </Router>
    </div>
  );
}

export default App;
