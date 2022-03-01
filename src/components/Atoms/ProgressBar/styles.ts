import styled, { css } from "styled-components"

interface IProgressProps {
  total: number
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h5 {
    color: var(--support);
    opacity: 0.7;
  }
`

export const Progress = styled.div<IProgressProps>`
  display: grid;
  grid-template-columns: repeat(${({ total }) => total}, 1fr);
  gap: 0.1rem;
`

interface ILevelProps {
  color: string
  format: "default" | "square"
}

export const Level = styled.div<ILevelProps>`
  width: 100%;
  height: 10px;
  background: var(--borders);
  transition: all 0.2s ease-in-out;
  position: relative;

  ${({ format }) =>
    format === "default" &&
    css`
      &:after {
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-right-color: ${({ theme }) => theme.colors.shape};
        border-style: solid;
        border-top-color: transparent;
        border-width: 8px 8px 0 0;
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        top: auto;
        z-index: 5;
      }

      &:before {
        border-bottom-color: transparent;
        border-left-color: ${({ theme }) => theme.colors.shape};
        border-right-color: transparent;
        border-style: solid;
        border-top-color: ${({ theme }) => theme.colors.shape};
        border-width: 0 0 8px 8px;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        top: auto;
        z-index: 5;
      }
    `}

  &.complete {
    background: ${({ color }) => color};
  }
`
