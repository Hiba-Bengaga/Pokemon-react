import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';


import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';


import Header from './components/Header';
import Types from './pages/Types';

const App = () => {
  return (
    <Router>
      <Header/>
      <Container>
        <Route exact path='/' component={Homepage} />
        <Route path='/pokemon/:id' component={PokemonPage}/>
        <Route path='/type/:id' component={Types}></Route>
      </Container>
    </Router>
  );
}

export default App;
