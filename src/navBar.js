import './navBar.css';
import redditMinimalLogo from './assets/reddit_minimal_logo.svg';

function NavBar() {
  return (
      <div className='nav-bar'>
        <img src={redditMinimalLogo} />
        <input placeholder='search..'></input>
    </div>
  );
}

export default NavBar;