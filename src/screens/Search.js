import React from "react";
import { Flex, Box } from "reflexbox";
import styled from "styled-components";
import { SearchField } from "../common-components/SearchField/SearchField";
import { Button } from "../common-components/Button/Button";
import { HeroCard } from "../components/HeroCard/HeroCard";
import { Spaces } from "../shared/DesignTokens";
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
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${Spaces.ONE};
  }
`;

// Container específico para os botões
const ButtonContainer = styled(Flex)`
  gap: ${Spaces.TWO}; /* Espaçamento médio entre os botões */
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

    // Função para executar a busca
    const handleSearch = () => {
        setSearchTerm(searchValue);
    };

    // Buscar ao pressionar Enter
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Função para limpar a busca
    const handleClearSearch = () => {
        setSearchValue("");
        setSearchTerm("");
    };

    // Função simplificada para obter imagem
    const getHeroImage = (hero) => {
        return hero.images?.md || "https://via.placeholder.com/150x200/333/fff?text=Sem+Imagem";
    };

    // Filtra os heróis baseado no searchTerm
    const filteredHeroes = React.useMemo(() => {
        if (!searchTerm.trim()) return heroes;

        return heroes.filter((hero) =>
            hero.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [heroes, searchTerm]);

    return (
        <>
            <SearchContainer
                mx={[Spaces.None, "auto"]}
                mt={[Spaces.THREE, Spaces.FIVE]}
                px={[Spaces.ONE, Spaces.NONE]}
                mb={[Spaces.TWO, Spaces.FOUR]}
                flexDirection={["column", "row"]}
                alignItems={["stretch", "center"]}
            >
                <Box flexGrow="1" mr={[0, Spaces.TWO]} mb={[Spaces.ONE, 0]}>
                    <SearchField
                        placeholder="Digite um nome de herói ou heroína"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </Box>

                {/* Container dos botões com espaçamento adequado */}
                <ButtonContainer>
                    <Button
                        onClick={handleSearch}
                        disabled={isLoadingHeroes}
                        width={["100%", "auto"]} /* Largura total no mobile */
                    >
                        Buscar
                    </Button>

                    {searchTerm && (
                        <Button
                            ghost
                            onClick={handleClearSearch}
                            width={["100%", "auto"]} /* Largura total no mobile */
                        >
                            Limpar
                        </Button>
                    )}
                </ButtonContainer>
            </SearchContainer>

            {/* Mostra o termo buscado */}
            {searchTerm && (
                <Box textAlign="center" mb={Spaces.TWO}>
                    <p>
                        Resultados para: <strong>"{searchTerm}"</strong>
                        {filteredHeroes.length > 0 && (
                            <span> - {filteredHeroes.length} heróis encontrados</span>
                        )}
                    </p>
                </Box>
            )}

            <HeroesGrid px={[Spaces.ONE, Spaces.TWO]} pb={[Spaces.ONE, Spaces.TWO]}>
                {isLoadingHeroes && (
                    <StatusMessage>Carregando heróis...</StatusMessage>
                )}

                {error && (
                    <StatusMessage style={{ color: '#FF0000' }}>
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