import styled, { css } from "styled-components"

import { CheckboxProps } from "."

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border: 2px solid var(--borders);
    border-radius: 5px;
    transition: background border var(--primary);
    position: relative;
    outline: none;

    &:before {
      content: "";
      width: 0.2rem;
      height: 0.4rem;
      border: 3px solid var(--white);
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: background 0.2s ease-in-out;
    }
    &:focus {
      box-shadow: 0 0 0.5rem var(--borders);
    }
    &:hover {
      border-color: gay;
      transition: 0.3s ease-in-out;
    }
    &:checked {
      border-color: var(--primary);
      background: var(--primary);
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<CheckboxProps, "labelColor">>`
  cursor: pointer;
  padding-left: 0.8rem;
  color: var(--text);
`
