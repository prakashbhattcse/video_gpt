
import Header from './Header'
import { useNowPlayingMovies } from './Hooks/useNowPlayingMovies';


const Browse = () => {

  // This hook is designed to fetch data from a movie API and dispatch an action to add the fetched data to the Redux store.
  useNowPlayingMovies();


  return (
    <>
      <div className="h-full flex flex-col">
        <Header />

        {/* <h1 className='text-9xl flex justify-center align-middle items-center text-zinc-600 h-full m-auto mt-64'>COMING SOON</h1> */}
      </div>
    </>
  )
}

export default Browse