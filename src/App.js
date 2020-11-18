// import Nav from './components/screens/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/screens/Home/Home';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import Footer from './components/screens/Footer/Footer';
import './App.css';
import AppProvider from './components/context/AppProvider';
function App() {
  return (
    
      <BrowserRouter>
        <AppProvider>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route exact path="/signup">
            <Signup />
        </Route>
        <Route exact path="/profile">
            <Profile />
        </Route>
        <Footer/>
        </AppProvider>
      </BrowserRouter>
    
  );
}

export default App;
