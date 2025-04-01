import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useState } from "react";

type BuscadorProps={
    setTit_anime: Dispatch<SetStateAction<string>>
}

const Buscador = ({setTit_anime}:BuscadorProps) => {

  const [animeE, setAnimeE] = useState("")

  const handleChangeAnimeE = (evt: ChangeEvent<HTMLInputElement>)=>{
    setAnimeE(evt.target.value)
  }

  const handleAnimeE = (evt: MouseEvent<HTMLFormElement>)=>{
    evt.preventDefault();
    setTit_anime(animeE)
    setAnimeE("")
  }
  return (
    <form 
    className="flex justify-center"
    onClick={handleAnimeE}
    >
      <div className="flex h-10 ">
        <input
          type="text"
          placeholder="Bleach, naruto..."
          value={animeE}
          onChange={handleChangeAnimeE}
          className="py-1 w-xl border-slate-400 border-2 bg-white rounded-lg rounded-r-none px-4 text-gray-700 font-semibold"
        />
        <button
          type="submit"
          className="cursor-pointer bg-rose-900 hover:bg-rose-700 rounded-lg rounded-l-none px-3"
        >
          <MagnifyingGlassIcon className="w-full h-full" />
        </button>
      </div>
    </form>
  );
};

export default Buscador;
