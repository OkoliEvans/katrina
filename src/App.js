import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";

// 63ce2456

const API_URL = 'http://www.omdbapi.com/?apikey=63ce2456';

const App = () => {

    const [ movies, setMovies ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&S=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies('No Time To Die');
    }, []);

    return (
       <div className="app">
        <h1>WESTSIDE SHOW</h1>

        <div className="search">
            <input 
                placeholder="search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src={searchIcon}
                alt='search'
                onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {
            movies.length > 0
            ? (
                <div className="container">
                    { movies.map((movie) => (
                        < MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}

       </div>
    );
}

export default App;