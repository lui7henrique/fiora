import styled from "styled-components"

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
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
  height: 2rem;
`

export const Classes = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  gap: 2rem;
  margin-left: -2rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: none;
  }

  button {
    height: 2rem;
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
  height: 2rem;
  padding-left: 1rem;
  gap: 1rem;

  input {
    width: 95px;
    height: 2rem;
    border: none;
    outline: none;
    background: var(--background);
    color: var(--text);
    border-top: 1px solid var(--borders);
    border-bottom: 1px solid var(--borders);
  }

  svg {
    color: var(--primary);
  }
`

export const Difficulty = styled.section`
  height: 2rem;
  width: 150px;
`
