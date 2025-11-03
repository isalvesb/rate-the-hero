import React from "react";
import axios from "axios";
import { mockHeroes } from "./mockHeroes"; // Ajuste o caminho conforme necessário

export function useHeroes() {
    const [heroes, setHeroes] = React.useState([]);
    const [isLoadingHeroes, setIsLoadingHeroes] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        let isMounted = true;
        const fetchHeroes = async () => {
            try {
                const response = await axios.get(
                    "https://akabab.github.io/superhero-api/api/all.json",
                    { timeout: 10000 }
                );
                if (isMounted) {
                    setHeroes(response.data);
                }
            } catch (err) {
                if (isMounted) {
                    console.error("Erro ao carregar heróis, usando dados mock:", err);
                    // Usar dados mock como fallback
                    setHeroes(mockHeroes);
                    setError("Usando dados locais - API indisponível");
                }
            } finally {
                if (isMounted) setIsLoadingHeroes(false);
            }
        };
        fetchHeroes();

        return () => {
            isMounted = false;
        };
    }, []);

    return { heroes, isLoadingHeroes, error };
}