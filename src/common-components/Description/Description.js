// common-components/Description/Description.js
import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontWeights,
	FontLineHeights,
	FontSizes
} from '../../shared/DesignTokens';

export const Description = styled.p`
  font-family: ${FontFamilies.PRIMARY};
  font-weight: ${FontWeights.NORMAL};
  line-height: ${FontLineHeights.NORMAL};
  font-size: ${FontSizes.SM};
  color: ${(props) => props.color || Colors.GRAY_700};
  margin: 0;

  strong {
    font-weight: ${FontWeights.SEMIBOLD};
  }
`;

export default Description;