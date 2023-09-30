import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../../Utils/movieSlice';
import { API_OPTIONS } from '../../Utils/constant';
import { useEffect } from 'react';


export const useMovieTrailer = (id) => {
 
    const dispatch = useDispatch();
    // const [trailderId, setTrailderId] = useState(null);


    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos', API_OPTIONS)
        const json = await data.json();
        // console.log(json);


        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData[0];
        // console.log(trailer)
        const app = dispatch(addTrailerVideo(trailer))
        //  console.log(app)
        // setTrailderId(trailer.key)
    }


    useEffect(() => {
        getMovieVideo();
    })
}