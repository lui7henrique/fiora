import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Filter = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--borders);
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
    background: var(--shape);
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
    width: 150px;
    height: 2rem;
    border: none;
    outline: none;
    background: var(--shape);
    color: var(--text);
    border-bottom: 1px solid var(--borders);
  }

  svg {
    color: var(--primary);
  }
`

export const Load = styled.button`
  background: var(--shape-hover);
  cursor: pointer;

  svg {
    color: var(--primary);
  }
`
