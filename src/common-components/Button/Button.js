// common-components/Button/Button.js
import styled from "styled-components";
import { Colors, BorderRadiuses, Shadows } from "../../shared/DesignTokens";

export const Button = styled.button`
  background: ${props => props.ghost ? 'transparent' : Colors.PRIMARY};
  color: ${props => props.ghost ? Colors.PRIMARY : 'white'};
  border: 2px solid ${props => props.ghost ? Colors.PRIMARY : 'transparent'};
  padding: ${props => props.small ? '8px 16px' : '12px 24px'};
  border-radius: ${BorderRadiuses.PILL};
  font-weight: 600;
  font-size: ${props => props.small ? '14px' : '16px'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${props => props.ghost ? 'none' : Shadows.ONE};
  
  &:hover {
    background: ${props => props.ghost ? Colors.PRIMARY : Colors.PRIMARY_DARK};
    color: ${props => props.ghost ? 'white' : 'white'};
    transform: translateY(-2px);
    box-shadow: ${props => props.ghost ? Shadows.ONE : Shadows.TWO};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  width: ${props => props.width || 'auto'};
`;