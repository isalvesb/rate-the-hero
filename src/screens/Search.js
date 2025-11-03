import React from "react";
import { Flex } from "../common-components/Flex/Flex";
import { Box } from "../common-components/Box/Box";
import styled from "styled-components";
import { SearchField } from "../common-components/SearchField/SearchField";
import { Button } from "../common-components/Button/Button";
import { HeroCard } from "../components/HeroCard/HeroCard";
import { Spaces, Colors, BorderRadiuses, Shadows } from "../shared/DesignTokens";
import { useHeroes } from "../hooks/useHeroes";

const HeroesGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${Spaces.ONE_HALF};

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: ${Spaces.TWO};
  }
`;

const StatusMessage = styled.p`
  text-align: center;
  grid-column: 1 / -1;
  padding: ${Spaces.TWO};
`;

const SearchContainer = styled(Flex)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: ${BorderRadiuses.TWO};
  padding: ${Spaces.FOUR};
  gap: ${Spaces.TWO};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${Spaces.TWO};
  }
`;

const ButtonContainer = styled(Flex)`
  gap: ${Spaces.TWO};
  flex-direction: row;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${Spaces.ONE};
    width: 100%;
  }
`;


export function Search() {
    const { heroes, isLoadingHeroes, error } = useHeroes();
    const [searchValue, setSearchValue] = React.useState("");
    const [searchTerm, setSearchTerm] = React.useState("");

    const handleSearch = () => {
        setSearchTerm(searchValue);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleClearSearch = () => {
        setSearchValue("");
        setSearchTerm("");
    };

    const getHeroImage = (hero) => {
        return hero.images?.md || "https://via.placeholder.com/150x200/333/fff?text=Sem+Imagem";
    };

    const filteredHeroes = React.useMemo(() => {
        if (!searchTerm.trim()) return heroes;
        return heroes.filter((hero) =>
            hero.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [heroes, searchTerm]);

    return (
        <>
            {/* ✅ Container principal com espaçamento adequado */}
            <Box
                mx={[Spaces.ONE, "auto"]}
                mt={[Spaces.FOUR, Spaces.FIVE]} // ✅ Aumentei o margin-top
                mb={[Spaces.THREE, Spaces.FOUR]} // ✅ Aumentei o margin-bottom
                px={[Spaces.ONE, Spaces.NONE]}
            >

                <SearchContainer
                    flexDirection={["column", "row"]}
                    alignItems={["stretch", "center"]}
                >
                    <Box flexGrow="1" mr={[0, Spaces.TWO]} mb={[Spaces.ONE, 0]}>
                        <SearchField
                            placeholder="Digite o nome de um herói ou heroína..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </Box>

                    <ButtonContainer>
                        <Button
                            onClick={handleSearch}
                            disabled={isLoadingHeroes}
                            width={["100%", "auto"]}
                        >
                            Buscar
                        </Button>

                        {searchTerm && (
                            <Button
                                ghost
                                onClick={handleClearSearch}
                                width={["100%", "auto"]}
                            >
                                Limpar
                            </Button>
                        )}
                    </ButtonContainer>
                </SearchContainer>
            </Box>

            <HeroesGrid px={[Spaces.ONE, Spaces.TWO]} pb={[Spaces.ONE, Spaces.TWO]}>
                {isLoadingHeroes && (
                    <StatusMessage>Carregando heróis...</StatusMessage>
                )}

                {error && (
                    <StatusMessage style={{ color: '#ff6b6b' }}>
                        {error.message || "Erro ao carregar dados"}
                    </StatusMessage>
                )}

                {!isLoadingHeroes && searchTerm && filteredHeroes.length === 0 && (
                    <StatusMessage>
                        Nenhum herói encontrado para "{searchTerm}"
                    </StatusMessage>
                )}

                {!isLoadingHeroes && !searchTerm && filteredHeroes.length === 0 && (
                    <StatusMessage>
                        Digite um nome para buscar heróis
                    </StatusMessage>
                )}

                {!isLoadingHeroes &&
                    filteredHeroes.map((hero) => (
                        <HeroCard
                            key={hero.id}
                            id={hero.id}
                            secretIdentity={hero.biography?.["fullName"] || "Desconhecido"}
                            name={hero.name}
                            picture={getHeroImage(hero)}
                            universe={hero.biography?.publisher || "Desconhecido"}
                        />
                    ))}
            </HeroesGrid>
        </>
    );
}