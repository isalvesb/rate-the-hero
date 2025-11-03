// common-components/SearchField/SearchField.js
import styled from 'styled-components';
import {
	Colors,
	BorderRadiuses,
	Shadows,
	Spaces,
	FontSizes,
	FontFamilies,
	FontLetterSpacings,
	Transitions
} from '../../shared/DesignTokens';

export const SearchField = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 ${Spaces.TWO};
  font-size: ${FontSizes.BASE};
  font-family: ${FontFamilies.PRIMARY};
  background: ${Colors.WHITE};
  color: ${Colors.GRAY_800};
  border: 2px solid ${Colors.GRAY_300};
  border-radius: ${BorderRadiuses.PILL};
  box-shadow: ${Shadows.SM};
  transition: ${Transitions.DEFAULT};
  letter-spacing: ${FontLetterSpacings.NORMAL};

  &::placeholder {
    color: ${Colors.GRAY_500};
  }

  &:focus {
    outline: none;
    border-color: ${Colors.PRIMARY};
    box-shadow: ${Shadows.GLOW};
  }

  &:hover {
    border-color: ${Colors.GRAY_400};
  }
`;

export default SearchField;