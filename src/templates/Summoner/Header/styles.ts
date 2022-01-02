import styled from "styled-components"

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-bottom: 1px solid ${({ theme }) => theme.colors.shape};
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Options = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 1rem;
`

export const Option = styled.h4<{ isActive: boolean }>`
  cursor: pointer;
  height: 100%;
  padding: 1rem;
  border-bottom: 2px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.primary : "transparent"};

  &:hover {
    border-bottom: 2px solid
      ${({ isActive, theme }) =>
        !isActive ? theme.colors.border : theme.colors.primary};
  }
`
