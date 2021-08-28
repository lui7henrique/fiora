import styled from "styled-components"

export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & + & {
    padding-top: 1rem;
    border-top: 1px solid var(--borders);
  }

  figure {
    width: 48px;
    height: 48px;
  }

  img {
    border-radius: 50%;
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

  .description {
    text-align: justify;
    line-height: 1.5;

    br {
      display: block; /* makes it have a width */
      content: ""; /* clears default height */
      margin-top: 5px; /* change this to whatever height you want it */
    }
  }
`
