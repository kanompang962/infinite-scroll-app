import { useEffect, useState } from 'react';
import './App.css';
import Photo from './components/Photo';

function App() {


  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const apiKEY = `2lzHIf2VgxvTTJoL-tuiT4fkqgESge4NjW3SjTH09hY`;
  const apiURL = `https://api.unsplash.com/photos/?client_id=${apiKEY}&page=${page}`;

  useEffect(() => {
    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY > document.body.offsetHeight - 500 && !isLoading) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return window.addEventListener('scroll', event)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getImage = async () => {
    setIsLoading(true);
    try {
      await fetch(apiURL)
        .then((response) => response.json())
        .then((data) => setPhotos((oldData) => [...oldData, ...data]));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>Infinite Scroll Photo | Unsplash API</h1>
      <div className='container'>
        <Photo photos={photos} />
      </div>
    </div>
  );
}

export default App;
