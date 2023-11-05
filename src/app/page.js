export const dynamic = "force-dynamic";
import axios from "axios";
import Results from "./components/Results";
const API_KEY = process.env.Api_key;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  console.log(genre);

  let results = [];
  // const res = await fetch(
  //   `https://api.themoviedb.org/3/${
  //     genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  //   }?api_key=${API_KEY}&language=en-US&page=1`,
  //   { next: { revalidate: 10000 } }
  // );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // const data = await res.json();

  // const results = data.results;

  results = await axios
    .get(
      `https://api.themoviedb.org/3/${
        genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } }
    )
    .then((res) => {
      return res?.data?.results;
    })
    .catch((err) => console.log(err));

  //console.log(results);

  console.log(results);
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
