import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Tips = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & + & {
    padding-top: 1rem;
    border-top: 1px solid var(--borders);
  }

  ul {
    margin-left: 2rem;

    li {
      line-height: 1.5;
      text-align: justify;
      margin-bottom: 0.5rem;
    }
  }
`
