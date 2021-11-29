import { useEffect, useState } from "react";
import { useParams } from "react-router";
const Detail = () => {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getDetail = async () => {
    const detail = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(detail.data.movie);
    console.log(movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      {loading ? (
        "Loading...."
      ) : (
        <img src={movie.medium_cover_image} alt={movie.id}></img>
      )}
    </div>
  );
};
export default Detail;
