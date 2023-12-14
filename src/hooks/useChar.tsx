import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Character {
  id: number;
  name: string;
  image: string;
}

function getRandomIndices(array: [], count: number) {
  const shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.slice(0, count);
}

const useChar = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get("/characters", { signal: controller.signal })
      .then((res) => {
        //select 4 random characters from api
        setCharacters(getRandomIndices(res.data.slice(0, 25), 4));
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { characters, error, isLoading };
};

export default useChar;
