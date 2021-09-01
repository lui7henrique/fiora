import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  section + section {
    border-top: 1px solid var(--borders);
  }
`
