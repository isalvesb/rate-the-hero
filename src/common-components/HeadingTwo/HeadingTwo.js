// common-components/HeadingTwo/HeadingTwo.js
import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontWeights,
	FontLineHeights,
	FontSizes
} from '../../shared/DesignTokens';

export const HeadingTwo = styled.h2`
  font-family: ${FontFamilies.PRIMARY};
  font-weight: ${FontWeights.BOLD};
  line-height: ${FontLineHeights.TIGHT};
  font-size: ${FontSizes.XL};
  color: ${(props) => props.color || Colors.GRAY_900};
  margin: 0;
`;

export default HeadingTwo;