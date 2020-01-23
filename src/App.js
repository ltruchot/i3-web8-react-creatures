import React from 'react';
import { Router, Link } from '@reach/router';
import HomePage from './pages/HomePage';
import CreaturesPage from './pages/CreaturesPage';
import CreatureDetailPage from './pages/CreatureDetailPage';
import MentionsPage from './pages/MentionsPage';

const paths = {
  home: '/',
  creatures: 'creatures',
  mentions: 'mentions-legales',
};


function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to={paths.home}>Home</Link>
          {' '}
|
          <Link to={paths.creatures}>Créatures légendaires</Link>
          {' '}
|
          <Link to={paths.mentions}>Mentions légales</Link>
        </nav>
      </header>
      <Router>
        <HomePage path={paths.home} />
        <CreaturesPage path={paths.creatures} />
        <MentionsPage path={paths.mentions} />
        <CreatureDetailPage path="creature/:id" />
      </Router>
    </div>
  );
}

export default App;
