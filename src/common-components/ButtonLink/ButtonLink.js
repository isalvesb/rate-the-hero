// common-components/ButtonLink/ButtonLink.js
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, BorderRadiuses, Shadows, Transitions, Spaces } from '../../shared/DesignTokens';

export const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${Spaces.ONE};
  
  background: ${props => {
		if (props.disabled) return Colors.GRAY_300;
		if (props.ghost) return 'transparent';
		if (props.variant === 'secondary') return Colors.GRAY_100;
		return Colors.PRIMARY;
	}};
  
  color: ${props => {
		if (props.disabled) return Colors.GRAY_500;
		if (props.ghost) return Colors.PRIMARY;
		if (props.variant === 'secondary') return Colors.GRAY_700;
		return Colors.WHITE;
	}};
  
  border: 2px solid ${props => {
		if (props.disabled) return Colors.GRAY_300;
		if (props.ghost) return Colors.PRIMARY;
		if (props.variant === 'secondary') return Colors.GRAY_300;
		return 'transparent';
	}};
  
  padding: ${props => {
		if (props.size === 'small') return '8px 16px';
		if (props.size === 'large') return '16px 32px';
		return '12px 24px';
	}};
  
  border-radius: ${BorderRadiuses.PILL};
  font-weight: 600;
  font-size: ${props => {
		if (props.size === 'small') return '14px';
		if (props.size === 'large') return '18px';
		return '16px';
	}};
  
  text-decoration: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: ${Transitions.DEFAULT};
  box-shadow: ${props => props.ghost || props.variant === 'secondary' ? 'none' : Shadows.ONE};
  
  /* Efeitos hover */
  &:hover {
    background: ${props => {
		if (props.disabled) return Colors.GRAY_300;
		if (props.ghost) return Colors.PRIMARY;
		if (props.variant === 'secondary') return Colors.GRAY_200;
		return Colors.PRIMARY_DARK;
	}};
    
    color: ${props => {
		if (props.disabled) return Colors.GRAY_500;
		if (props.ghost) return Colors.WHITE;
		return props.variant === 'secondary' ? Colors.GRAY_800 : Colors.WHITE;
	}};
    
    transform: ${props => props.disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.disabled ? 'none' : Shadows.TWO};
    text-decoration: none;
  }
  
  /* Efeito active */
  &:active {
    transform: translateY(0);
  }
  
  /* Efeito focus para acessibilidade */
  &:focus {
    outline: none;
    box-shadow: ${props => props.disabled ? 'none' : `0 0 0 3px ${Colors.PRIMARY_LIGHT}40`};
  }
  
  /* Largura */
  width: ${props => props.width || 'auto'};
  min-width: ${props => props.minWidth || 'auto'};
  
  /* Opacidade para disabled */
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  /* Centralização de texto */
  text-align: center;
  
  /* Estados especiais */
  ${props => props.fullwidth && `
    width: 100%;
    display: flex;
  `}
  
  ${props => props.block && `
    display: flex;
    width: 100%;
  `}
`;

// Versão alternativa com ícone
export const ButtonLinkWithIcon = styled(ButtonLink)`
  svg, .icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

// Versão minimalista
export const TextLink = styled(Link)`
  color: ${Colors.PRIMARY};
  text-decoration: none;
  font-weight: 500;
  transition: ${Transitions.DEFAULT};
  border-bottom: 2px solid transparent;
  
  &:hover {
    color: ${Colors.PRIMARY_DARK};
    border-bottom-color: ${Colors.PRIMARY};
  }
`;

export default ButtonLink;