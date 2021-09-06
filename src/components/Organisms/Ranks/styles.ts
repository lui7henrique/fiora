import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Queues = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2rem;
  gap: 2rem;
  padding: 1rem;
  border-bottom: 1px solid var(--borders);

  button {
    height: 2rem;
    background: var(--shape);

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
