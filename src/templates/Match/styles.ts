import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 4rem;
`

export const MatchOptions = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MatchOption = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const MatchOptionTitle = styled.h4`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.support};
  opacity: 0.5;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`

export const MatchOptionGraphLabel = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.title};
  padding: 1rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.shape};
  }
`

export const Content = styled.main``
