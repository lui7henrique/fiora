import styled, { css } from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 4rem;
`

export const MatchOptions = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 25%;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
`

export const MatchOption = styled.div`
  padding-top: 1rem;
  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const MatchOptionTitle = styled.h4`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.support};
  opacity: 0.5;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
`

export const MatchOptionGraphLabel = styled.h3<{ active?: boolean }>`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.title};
  padding: 0.8rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  border-left: 6px solid transparent;

  &:hover {
    border-left: 6px solid
      ${({ theme, active }) =>
        active ? theme.colors.primary : theme.colors.shape};
  }

  ${({ active }) =>
    active &&
    css`
      border-left: 6px solid ${({ theme }) => theme.colors.primary};
    `}
`

export const Content = styled.main`
  width: 75%;
`
