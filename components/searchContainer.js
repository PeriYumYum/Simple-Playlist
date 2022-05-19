import { useState } from "react"
import SearchBar from "./searchbar"
import youtubeApi from '../pages/api/youtube'
import SearchList from './searchlist'

export default function SearchContainer(props) {
const [searchResults, updateSearchResults] = useState([]);
//handle search results
const handleSearch = async (query) => {
  const response = await youtubeApi.get('/search',{
    params:{
      q:query
    }
  })
  updateSearchResults(response.data.items)
  console.log(response.data.items) 
//See results in browser console
}
  return (
    <div>
      <SearchBar handleSearch={handleSearch}/>
      <SearchList data={searchResults} searchlistFunc={props.searchlistFunc} />
    </div>
  );
}
