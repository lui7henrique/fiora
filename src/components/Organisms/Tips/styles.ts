import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  line-height: 1.7;
  text-align: justify;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
`

export const Title = styled.h3`
  font-size: 1.5rem;
  padding: 1rem;
`

export const Tips = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-top: 1px solid var(--borders);

  ul {
    margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
      line-height: 1.5;
      text-align: justify;
      margin-bottom: 0.5rem;
    }
  }
`
