import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { SortMovie } from '../components/SortMovie';


const Header = (props) => {
    return (
        <div className="header">
            <div className="text-center text-light">
            <h1>Welcome to MyFlixie</h1>
            </div>

            <SearchBar onChange={props.searchHandler} />
            <SortMovie
                sortDate={props.sortDateHandler}
                sortRating={props.sortRatingHandler}
            />
        </div>
    )
}

export default Header;