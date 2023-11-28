import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0052D4;
  color: #0052D4;
  margin: 1em 2em;
  padding: 0.5em 2em;
  font-weight: bold;
  cursor: pointer;

  ${props => props.primary && css`
    background: #0052D4;
    color: 0052D4;
    width: 1rem;
  `}

   ${props => props.width && css`
    width: ${props.width};
  `}

  ${props => props.height && css`
    height: ${props.height};
  `}
`;