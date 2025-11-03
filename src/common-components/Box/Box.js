// src/common-components/Box/Box.js
import styled from 'styled-components';
import { Spaces } from '../../shared/DesignTokens';

export const Box = styled.div`
  ${props => props.p && `padding: ${Array.isArray(props.p) ? props.p.map(p => Spaces[p] || p).join(' ') : Spaces[props.p] || props.p};`}
  ${props => props.m && `margin: ${Array.isArray(props.m) ? props.m.map(m => Spaces[m] || m).join(' ') : Spaces[props.m] || props.m};`}
  ${props => props.mt && `margin-top: ${Spaces[props.mt] || props.mt};`}
  ${props => props.mb && `margin-bottom: ${Spaces[props.mb] || props.mb};`}
  ${props => props.ml && `margin-left: ${Spaces[props.ml] || props.ml};`}
  ${props => props.mr && `margin-right: ${Spaces[props.mr] || props.mr};`}
  ${props => props.mx && `margin-left: ${Spaces[props.mx] || props.mx}; margin-right: ${Spaces[props.mx] || props.mx};`}
  ${props => props.my && `margin-top: ${Spaces[props.my] || props.my}; margin-bottom: ${Spaces[props.my] || props.my};`}
  ${props => props.pt && `padding-top: ${Spaces[props.pt] || props.pt};`}
  ${props => props.pb && `padding-bottom: ${Spaces[props.pb] || props.pb};`}
  ${props => props.pl && `padding-left: ${Spaces[props.pl] || props.pl};`}
  ${props => props.pr && `padding-right: ${Spaces[props.pr] || props.pr};`}
  ${props => props.px && `padding-left: ${Spaces[props.px] || props.px}; padding-right: ${Spaces[props.px] || props.px};`}
  ${props => props.py && `padding-top: ${Spaces[props.py] || props.py}; padding-bottom: ${Spaces[props.py] || props.py};`}
  ${props => props.width && `width: ${Array.isArray(props.width) ? props.width.map(w => typeof w === 'number' ? `${w}px` : w).join(' ') : props.width};`}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.display && `display: ${props.display};`}
  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`}
  ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
  ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`}
  ${props => props.flexShrink && `flex-shrink: ${props.flexShrink};`}
  ${props => props.textAlign && `text-align: ${props.textAlign};`}
  ${props => props.as && `display: block;`}
`;

export default Box;