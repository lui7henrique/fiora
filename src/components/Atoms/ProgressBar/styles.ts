import styled from "styled-components"

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
}

export const Level = styled.div<ILevelProps>`
  width: 100%;
  height: 10px;
  background: var(--borders);
  transition: all 0.2s ease-in-out;
  position: relative;

  &:after {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: var(--shape);
    border-style: solid;
    border-top-color: transparent;
    border-width: 8px 8px 0 0;
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    top: auto;
    z-index: 40;
  }

  &:before {
    border-bottom-color: transparent;
    border-left-color: var(--shape);
    border-right-color: transparent;
    border-style: solid;
    border-top-color: var(--shape);
    border-width: 0 0 8px 8px;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    top: auto;
    z-index: 40;
  }

  &.complete {
    background: ${({ color }) => color};
  }
`
