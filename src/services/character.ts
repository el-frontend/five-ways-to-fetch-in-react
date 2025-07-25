import axios from "axios";
import type { ApiData } from "../types/api";
import type { Character } from "../types/characters";

export const getCharacters = async (): Promise<ApiData<Character>> => {
  try {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    return res.data;
  } catch (e) {
    console.log(e);
    return {
      results: [],
    };
  }
};
