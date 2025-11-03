// common-components/SelectField/SelectField.js
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

export const SelectField = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 ${Spaces.TWO};
  font-size: ${FontSizes.BASE};
  font-family: ${FontFamilies.PRIMARY};
  background: ${Colors.WHITE};
  color: ${Colors.GRAY_800};
  border: 2px solid ${Colors.GRAY_300};
  border-radius: ${BorderRadiuses.ONE};
  box-shadow: ${Shadows.SM};
  transition: ${Transitions.DEFAULT};
  letter-spacing: ${FontLetterSpacings.NORMAL};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${Colors.PRIMARY};
    box-shadow: ${Shadows.GLOW};
  }

  &:hover {
    border-color: ${Colors.GRAY_400};
  }

  option {
    font-family: ${FontFamilies.PRIMARY};
    font-size: ${FontSizes.BASE};
  }
`;

export const Option = styled.option`
  font-family: ${FontFamilies.PRIMARY};
  font-size: ${FontSizes.BASE};
  padding: ${Spaces.ONE};
`;

export default SelectField;