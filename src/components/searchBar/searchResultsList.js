import './searchResultsList.css';
import { SearchResults } from './searchResults';

export const SearchResultsList = ({results}) => {
    return (
        <div className='results-list'>
            {
                results.map((result, id) => {
                    return <SearchResults result={result} key={id}/>
                } )
            }
        </div>
    )
}