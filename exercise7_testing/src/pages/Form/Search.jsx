import React, {useState} from 'react';
import axios from 'axios';
 
const URL = 'http://hn.algolia.com/api/v1/search';
 
export default function Search() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
 
  async function handleFetch(event) {
    let result;
 
    try {
      result = await axios.get(`${URL}?query=React`);
      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }
 
  return (
    <div>
      <button type="button" onClick={handleFetch}>
        Cari Cerita React
      </button>
 
      {error && <span>Ada yang error ...</span>}
 
      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}