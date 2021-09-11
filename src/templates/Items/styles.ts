import styled from "styled-components"

export const Container = styled.div`
  max-width: 1180px;
  margin: 5rem auto 0 auto;
  padding: 1rem;
  position: relative;

  display: flex;
  align-items: flex-start;
  gap: 2rem;
  -webkit-box-pack: justify;
  justify-content: space-between;

  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Filters = styled.aside`
  width: 30%;

  display: flex;
  flex-direction: column;
  background: var(--shape);
  gap: 1rem;

  position: relative;
  padding: 1rem;
  border-radius: 3px;

  h1 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 1rem;
  border-top: 1px solid var(--borders);
`

export const List = styled.main`
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`
