import React from "react"; // ← Certifique-se que tem esta linha
import useAxios from "axios-hooks";

export function useHero(heroId) {
    const [{ data: hero, loading: isLoadingHero, error }] = useAxios(
        heroId ? `https://akabab.github.io/superhero-api/api/id/${heroId}.json` : null
    );

    function setHeroAvaliation(heroData) {
        localStorage.setItem(heroData.id, JSON.stringify(heroData));
    }

    function getHeroAvaliation(heroId) {
        try {
            return JSON.parse(localStorage.getItem(heroId));
        } catch (error) {
            console.error("Erro ao ler avaliação:", error);
            return null;
        }
    }

    return {
        hero,
        isLoadingHero,
        error,
        setHeroAvaliation,
        getHeroAvaliation,
    };
}