import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 1.7;
  text-align: justify;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  .description {
    br {
      display: block; /* makes it have a width */
      content: ""; /* clears default height */
      margin-top: 5px; /* change this to whatever height you want it */
    }
  }
`

export const Title = styled.h3`
  font-size: 1.5rem;
  padding: 1rem;
`

export const Skills = styled.section``

export const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.shapeHover};
  }

  & + & {
    padding-top: 1rem;
  }

  figure {
    width: 48px;
    height: 48px;
  }

  img {
    border-radius: 50%;

    // skeleton
    background: #121214;
    background-image: linear-gradient(
      to right,
      #121214 0%,
      #171719 20%,
      #121214 40%,
      #121214 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`

export const Description = styled.div`
  text-align: justify;
  line-height: 1.5;
`
