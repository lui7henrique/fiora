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
  gap: 0.5rem;
`

interface ILevelProps {
  color: string
}

export const Level = styled.div<ILevelProps>`
  width: 100%;
  height: 7px;
  border-radius: 3px;
  background: var(--borders);
  transition: all 0.2s ease-in-out;

  &.complete {
    background: ${({ color }) => color};
  }

  &:hover {
    filter: brightness(1.5);
  }
`
