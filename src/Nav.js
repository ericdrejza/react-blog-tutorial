import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
  return (
    <nav className='Nav'>
      <form
        className='searchForm'
        action='submit'
        onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search Posts</label>
        <input
          id='search'
          type='text'
          placeholder='Search Posts'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        {/* prettier-ignore */}
        <li><Link to='/'>Home</Link></li>
        {/* prettier-ignore */}
        <li><Link to='/post'>Post</Link></li>
        {/* prettier-ignore */}
        <li><Link to='/about'>About</Link></li>
      </ul>
      <div></div>
    </nav>
  );
};

export default Nav;
