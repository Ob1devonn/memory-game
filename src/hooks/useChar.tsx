import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Characters {
  id: number;
  name: string;
}

const useChar = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/characters", { signal: controller.signal })
      .then((res) => setCharacters(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { characters, error };
};

export default useChar;
