// components/HeroCard/HeroCard.js
import React from "react";
import styled from "styled-components";
import { useHero } from "../../hooks/useHero";
import { Box } from "../../common-components/Box/Box"
import { Card } from "../../common-components/Card/Card";
import { Caption } from "../../common-components/Caption/Caption";
import { Description } from "../../common-components/Description/Description";
import { HeadingTwo } from "../../common-components/HeadingTwo/HeadingTwo";
import { ButtonLink } from "../../common-components/ButtonLink/ButtonLink";
import { BorderRadiuses, Colors, Shadows, Spaces } from "../../shared/DesignTokens";

const InformationGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 80px;
  gap: ${Spaces.TWO};
`;

const HeroAvatar = styled.div`
  width: 100%;
  height: 100px;
  border-radius: ${BorderRadiuses.TWO};
  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: ${Shadows.ONE};
  transition: transform 0.2s ease;
`;

const ModernCard = styled(Card)`
  border-radius: ${BorderRadiuses.THREE};
  box-shadow: ${Shadows.ONE};
  border: 1px solid ${Colors.GRAY_200};
  transition: all 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${Shadows.TWO};
    
    ${HeroAvatar} {
      transform: scale(1.05);
    }
  }
`;

export function HeroCard({ secretIdentity, name, picture, universe, id }) {
    const { getHeroAvaliation } = useHero();
    const heroAvaliation = getHeroAvaliation(id);

    return (
        <ModernCard>
            <InformationGrid p={Spaces.TWO} mb={Spaces.ONE}>
                <Box>
                    <Caption as="div" color={Colors.GRAY_500}>
                        {secretIdentity}
                    </Caption>
                    <Box mb={Spaces.ONE}>
                        <HeadingTwo style={{
                            fontSize: '1.25rem',
                            margin: 0,
                            color: Colors.GRAY_800
                        }}>
                            {name}
                        </HeadingTwo>
                    </Box>
                    <Description as="div" color={Colors.GRAY_600}>
                        <strong>🌍 Universo:</strong> {universe}
                    </Description>
                    <Description as="div" color={Colors.GRAY_600}>
                        <strong>⭐ Nota:</strong> {heroAvaliation?.avaliation || "Sem avaliação"}
                    </Description>
                </Box>
                <HeroAvatar src={picture} />
            </InformationGrid>
            <Box px={Spaces.TWO} pb={Spaces.TWO}>
                <ButtonLink to={`/detalhes/${id}`}>
                    Ver Mais
                </ButtonLink>
            </Box>
        </ModernCard>
    );
}