import styled, { css } from "styled-components"

export const Container = styled.header`
  width: 100vw;
  height: 5rem;
  border-bottom: 1px solid var(--borders);
  background-color: var(--shape);

  .logo {
    font-size: 32px;
    background: -webkit-linear-gradient(var(--primary), var(--primary-darker));
    filter: brightness(1.3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-style: italic;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .logo,
    .logo-link {
      display: none;
    }
  }
`

export const Content = styled.div`
  max-width: 1180px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BaseLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;
`

export const GoBack = styled.button`
  font-size: 1.3rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: transparent;
  border-radius: 5px;

  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.shapeHover};
  }
`

export const NavWrapper = styled.div`
  display: flex;
  gap: 1rem;
  height: 5rem;
`

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`

export const Link = styled.a<{
  active?: boolean
}>`
  margin-top: 1.75rem;
  text-decoration: none;
  color: var(--gray);
  filter: brightness(0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1);
    border-bottom: 3px solid var(--primary);
  }

  ${({ active }) =>
    active &&
    css`
      filter: brightness(1);
      border-bottom: 3px solid var(--primary);
    `}
`
