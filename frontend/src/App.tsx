import { useEffect, useState } from "react";
import AllAnimes from "./components/AllAnimes";
import Buscador from "./components/Buscador";
import { animeResponse, animesTp } from "./types/animes";

function App() {
  const [animes, setAnimes] = useState<animesTp[]>([]);
  const [tit_anime, setTit_anime] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      let URL = "";
      if (tit_anime == "") {
        URL = `https://api.jikan.moe/v4/anime`;
      } else {
        URL = `https://api.jikan.moe/v4/anime?q=${tit_anime}`;
      }
      const res = await fetch(URL);
      const json: animeResponse = await res.json();

      //Eliminar duplicados por ID
      const uniqueAnime = json.data.filter(
        (anime, index, self) =>
          index === self.findIndex((a) => a.mal_id === anime.mal_id)
      );

      setAnimes(uniqueAnime);
    };
    fetchData();
  }, [tit_anime]);

  //console.log(animes);

  return (
    <>
      <header className="bg-rose-950 py-3">
        <div className="max-w-7xl m-auto flex justify-between">
          <div>
            <h1 className="text-white font-bold text-2xl">Anime List</h1>
          </div>
          <ul className="flex gap-4 font-bold text-white text-xl">
            <li className="cursor-pointer hover:text-rose-400 hover:underline underline-offset-4">
              Temporada
            </li>
            <li className="cursor-pointer hover:text-rose-400 hover:underline underline-offset-4">
              cosas
            </li>
          </ul>
        </div>
      </header>

      <section className="max-w-7xl m-auto mt-10">
        <Buscador setTit_anime={setTit_anime} />
      </section>

      <section className="max-w-7xl m-auto mt-10">
        <AllAnimes animes={animes} />
      </section>
    </>
  );
}

export default App;
