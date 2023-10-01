
import Header from './Header'
import { useNowPlayingMovies } from './Hooks/useNowPlayingMovies';
import { useNowPopularMovies } from './Hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  // This hook is designed to fetch data from a movie API and dispatch an action to add the fetched data to the Redux store.
  useNowPlayingMovies();
  useNowPopularMovies();

  return (
    <>
      <div className='scrollbar-hide'>
        <Header />
        <MainContainer />
        <SecondaryContainer />

      </div>
    </>
  )
}

export default Browse