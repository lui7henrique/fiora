import styled from "styled-components"

export const Container = styled.div`
  text-align: justify;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 1rem;
`

export const Title = styled.h3`
  font-size: 1.5rem;
`

export const Lore = styled.p`
  line-height: 1.7;
`
