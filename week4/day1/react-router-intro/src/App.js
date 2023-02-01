import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About'
import Welcome from './components/Welcome';
import WordAndNum from './components/WordAndNum';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <Link to={'/home'}>Go To Home</Link>
      <br />
      <Link to={'/about'}>Go To About Page</Link>
      <br />
      <Link to={'/'}>Go To Root</Link>
      <Form/>
      <Routes>
        <Route >
          <Route path='/' element={<Welcome/>}/>
          <Route path='/home' element={ <Home/> }/> 
          <Route path='/about' element={<About/>}/> 
        </Route>
        <Route path='/home/:color/:id' element={<WordAndNum/>}/>
      </Routes>
    </div>
  );
}

export default App;
