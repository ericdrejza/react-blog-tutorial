import { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter((post) => {
      return (
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    });
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        setSearchResults,
        fetchError,
        isLoading,
        posts,
        setPosts
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
