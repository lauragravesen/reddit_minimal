import { useState } from 'react';
import './navBar.css';
import redditMinimalLogo from './assets/reddit_minimal_logo.svg';
import Search from './components/searchBar/searchBar';
import { SearchResultsList } from './components/searchBar/searchResultsList';

function NavBar() {

  const [results, setResults] = useState([]);

  return (
      <div className='nav-bar'>
        <img src={redditMinimalLogo} />
        <Search setResults={setResults}/>
        <SearchResultsList results={results}/>
    </div>
  );
}

export default NavBar;