import { HeartIcon } from "@heroicons/react/16/solid";
import { animesTp } from "../types/animes";

type AllAnimesProps = {
  animes: animesTp[];
};

const AllAnimes = ({ animes }: AllAnimesProps) => {
  const handleCheckSeguir = (e: animesTp) => {
    console.log(e.mal_id);
  };

  return (
    <div className="relative grid grid-cols-5">
      {animes.map((am) => (
        <div
          className="flex flex-col border-1 mx-2 my-4 rounded-lg h-[375px] "
          key={am.mal_id}
        >
          <img
            src={am.images.jpg.image_url}
            alt={am.title}
            className="h-[80%] rounded-lg"
          />
          <p className="font-semibold text-center h-[12%]">{am.title}</p>
          <div className="flex justify-center h-[8%] ">
            <button type="submit" onClick={() => handleCheckSeguir(am)}>
              <HeartIcon className="h-full w-auto bg-red-600 text-white cursor-pointer hover:bg-red-400" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAnimes;
