import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 978px) {
    flex-direction: column;
  }
`

export const ChartOptions = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 25%;
  max-height: 680px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.shapeHover};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  @media (max-width: 978px) {
    width: 100%;
  }
`

export const ChartsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const ChartOption = styled.div`
  padding-top: 1rem;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const ChartOptionTitle = styled.h4`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.support};
  opacity: 0.5;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
`

export const ChartOptionLabel = styled.h3<{ active?: boolean }>`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.title};
  padding: 0.8rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  border-left: 6px solid transparent;

  &:hover {
    border-left: 6px solid
      ${({ theme, active }) =>
        active ? theme.colors.primary : theme.colors.shapeHover};
  }

  ${({ active }) =>
    active &&
    css`
      border-left: 6px solid ${({ theme }) => theme.colors.primary};
    `}
`

export const ChartContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 1rem;
  border-radius: 5px;

  width: 75%;

  @media (max-width: 978px) {
    width: 100%;
  }
`

export const ChartTile = styled.h2``
