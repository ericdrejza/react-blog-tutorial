import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Nav = () => {
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.search);
  const setSearchResults = useStoreActions(
    (actions) => actions.setSearchResults
  );

  useEffect(() => {
    const filteredResults = posts.filter((post) => {
      return (
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    });
    setSearchResults(filteredResults.reverse());
  }, [posts, search, setSearchResults]);

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
