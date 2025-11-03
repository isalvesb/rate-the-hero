// common-components/Caption/Caption.js
import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontWeights,
	FontLineHeights,
	FontSizes,
	FontLetterSpacings
} from '../../shared/DesignTokens';

export const Caption = styled.span`
  font-family: ${FontFamilies.PRIMARY};
  font-weight: ${FontWeights.MEDIUM};
  line-height: ${FontLineHeights.TIGHT};
  font-size: ${FontSizes.XS};
  letter-spacing: ${FontLetterSpacings.WIDE};
  text-transform: uppercase;
  color: ${(props) => props.color || Colors.GRAY_600};
`;

export default Caption;