import styled from "styled-components"

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Headline = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    background: -webkit-linear-gradient(var(--primary), var(--primary-darker));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-style: italic;
    white-space: nowrap;

    @media (max-width: 576px) {
      font-size: 26px;
    }
  }
`

export const Filter = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--borders);
  height: 3rem;
`

export const Classes = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  gap: 2rem;
  padding: 0 2rem;
  border-left: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    display: none;
  }

  button {
    height: 3rem;
    background: var(--background);
    border-top: 1px solid var(--borders);
    border-bottom: 1px solid var(--borders);

    font-weight: bold;
    color: var(--text);
    text-transform: uppercase;
    font-size: 0.7rem;

    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid var(--primary);
    }

    &.active {
      border-bottom: 2px solid var(--primary);
    }
  }
`

export const Search = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 1rem;
  gap: 1rem;
  width: 100%;

  input {
    width: 95px;
    height: 3rem;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%;
  }

  svg {
    color: var(--primary);
  }
`
