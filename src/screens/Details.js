import React from 'react'; // ← ADICIONAR ESTA LINHA
import styled from 'styled-components';
import { Flex } from '../common-components/Flex/Flex';
import { Box } from '../common-components/Box/Box';
import {
    BorderRadiuses,
    Colors,
    Shadows,
    Spaces,
} from '../shared/DesignTokens';
import {
    SelectField,
    Option,
} from '../common-components/SelectField/SelectField';
import { Button } from '../common-components/Button/Button';
import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
import { Description } from '../common-components/Description/Description';
import { Card } from '../common-components/Card/Card';
import { Caption } from '../common-components/Caption/Caption';
import { useNavigate, useParams } from 'react-router-dom';
import { useHero } from '../hooks/useHero';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Container = styled.aside`
  width: 100%;
  max-width: 727px;
  margin: 0 auto 40px;
  padding: 0 ${Spaces.ONE};
`;

const HeroAvatar = styled.div`
  width: 100%;
  max-width: 344px;
  height: 400px;
  box-shadow: ${Shadows.ONE};
  border-radius: ${BorderRadiuses.ONE};
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center 25%;
  background-color: ${Colors.GRAY_100}; /* Fallback */

   /* Responsividade */
  @media (max-width: 768px) {
    height: 250px; /* Altura menor no mobile */
    max-width: 100%;
  }
`;

const DetailsGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${Spaces.TWO};

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

// Componente Alert para substituir a tag inválida <alert>
const Alert = styled.div`
  color: ${Colors.RED_500};
  font-size: 14px;
  margin-top: ${Spaces.ONE};
`;

export function Details() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { hero, isLoadingHero, setHeroAvaliation, getHeroAvaliation } = useHero(id);

    const formik = useFormik({
        initialValues: {
            avaliation: getHeroAvaliation(id)?.avaliation || ''
        },
        validationSchema: yup.object({
            avaliation: yup.string().required('Escolha uma nota'),
        }),
        onSubmit: (values) => {
            const heroAvaliation = {
                id: parseInt(id),
                avaliation: values.avaliation
            };
            setHeroAvaliation(heroAvaliation);
            alert('Nota atribuída com sucesso!');
            navigate('/'); // ← CORRIGIDO: navigate('/') em vez de navigate.push('/')
        },
    });

    const handleBack = () => {
        navigate(-1);
    };

    // 🟡 Evita renderizar antes do carregamento terminar
    if (isLoadingHero) {
        return (
            <Container>
                <p>Carregando detalhes do herói...</p>
            </Container>
        );
    }

    // 🔴 Se não encontrar o herói
    if (!hero) {
        return (
            <Container>
                <p>Herói não encontrado.</p>
                <Button ghost onClick={handleBack}>Voltar</Button>
            </Container>
        );
    }

    // ✅ Renderização segura após carregamento
    return (
        <Container>
            <Flex mt={Spaces.FOUR} as="section" flexDirection={["column", "row"]}>
                <HeroAvatar
                    src={hero.images?.md || hero.images?.sm}
                    onError={(e) => {
                        e.target.style.backgroundColor = Colors.GRAY_300;
                    }}
                />
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    height={194}
                    ml={[0, Spaces.SEVEN]}
                    mt={[Spaces.TWO, 0]}
                >
                    <form onSubmit={formik.handleSubmit} noValidate>
                        <Flex flexDirection={["column", "row"]}>
                            <SelectField
                                name='avaliation'
                                onChange={formik.handleChange}
                                value={formik.values.avaliation}
                                required>
                                <Option value="" disabled>
                                    Selecione a nota
                                </Option>
                                <Option value="5">5</Option>
                                <Option value="4">4</Option>
                                <Option value="3">3</Option>
                                <Option value="2">2</Option>
                                <Option value="1">1</Option>
                            </SelectField>
                            <Box ml={[0, Spaces.THREE]} mt={[Spaces.TWO, 0]}>
                                <Button type='submit'>Atribuir</Button>
                            </Box>
                        </Flex>
                        {formik.errors.avaliation && (
                            <Box mt={Spaces.TWO}>
                                <Alert>
                                    {formik.errors.avaliation}
                                </Alert>
                            </Box>
                        )}
                    </form>
                </Flex>
            </Flex>

            <Box my={Spaces.ONE_HALF} as="section">
                <HeadingTwo as="h1">{hero.name}</HeadingTwo>
                <Description color={Colors.GRAY_700}>
                    {hero.biography?.["fullName"] || hero.biography?.["full-name"] || "Nome desconhecido"} - {hero.biography?.publisher || "Editora desconhecida"}
                </Description>
            </Box>

            <DetailsGrid>
                <Card>
                    <Box p={Spaces.TWO}>
                        <Box mb={Spaces.ONE}>
                            <Caption>Codinomes</Caption>
                        </Box>
                        <Description color={Colors.GRAY_700}>
                            {hero.biography?.aliases?.join(', ') || "Nenhum codinome"}
                        </Description>
                    </Box>
                </Card>

                <Card>
                    <Box p={Spaces.TWO}>
                        <Box mb={Spaces.ONE}>
                            <Caption>Local de Nascimento</Caption>
                        </Box>
                        <Description color={Colors.GRAY_700}>
                            {hero.biography?.["placeOfBirth"] || hero.biography?.["place-of-birth"] || "Desconhecido"}
                        </Description>
                    </Box>
                </Card>

                <Card>
                    <Box p={Spaces.TWO}>
                        <Box mb={Spaces.ONE}>
                            <Caption>Primeira HQ</Caption>
                        </Box>
                        <Description color={Colors.GRAY_700}>
                            {hero.biography?.["firstAppearance"] || hero.biography?.["first-appearance"] || "Desconhecido"}
                        </Description>
                    </Box>
                </Card>

                <Card>
                    <Box p={Spaces.TWO}>
                        <Box mb={Spaces.ONE}>
                            <Caption>Informações Biológicas</Caption>
                        </Box>
                        <Description color={Colors.GRAY_700}>
                            <strong>Gênero:</strong> {hero.appearance?.gender || "Desconhecido"}
                            <br />
                            <strong>Raça:</strong> {hero.appearance?.race || "Desconhecido"}
                            <br />
                            <strong>Altura:</strong> {hero.appearance?.height?.[1] || hero.appearance?.height?.[0] || "Desconhecido"}
                            <br />
                            <strong>Peso:</strong> {hero.appearance?.weight?.[1] || hero.appearance?.weight?.[0] || "Desconhecido"}
                            <br />
                            <strong>Cor dos olhos:</strong> {hero.appearance?.["eyeColor"] || hero.appearance?.["eye-color"] || "Desconhecido"}
                            <br />
                            <strong>Cor do cabelo:</strong> {hero.appearance?.["hairColor"] || hero.appearance?.["hair-color"] || "Desconhecido"}
                        </Description>
                    </Box>
                </Card>

                <Card>
                    <Box p={Spaces.TWO}>
                        <Box mb={Spaces.ONE}>
                            <Caption>Atributos</Caption>
                        </Box>
                        <Description color={Colors.GRAY_700}>
                            <strong>Força:</strong> {hero.powerstats?.strength || 0}
                            <br />
                            <strong>Inteligência:</strong> {hero.powerstats?.intelligence || 0}
                            <br />
                            <strong>Velocidade:</strong> {hero.powerstats?.speed || 0}
                            <br />
                            <strong>Resistência:</strong> {hero.powerstats?.durability || 0}
                            <br />
                            <strong>Poder:</strong> {hero.powerstats?.power || 0}
                            <br />
                            <strong>Combate:</strong> {hero.powerstats?.combat || 0}
                        </Description>
                    </Box>
                </Card>
            </DetailsGrid>

            <Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
                <Box>
                    <Button ghost onClick={handleBack}>
                        Voltar
                    </Button>
                </Box>
            </Flex>
        </Container>
    );
}