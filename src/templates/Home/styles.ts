import styled from "styled-components"

export const Container = styled.section``

export const VideoBanner = styled.video`
  width: 100%;
  height: 100%;
  filter: brightness(0.3);
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    object-position: 38% center;
  }
`

export const Mute = styled.div`
  position: absolute;
  bottom: 0;
  margin: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Wrapper = styled.section`
  width: 100%;
  height: 85vh;
  position: relative;
  background-image: url("/videos/zed.mp4");
  background-size: cover;
  background-repeat: no-repeat;
`

export const WrapperContainer = styled.section`
  width: 100%;
  height: auto;
  z-index: 2;
  position: absolute;
  top: 45%;
`

export const WrapperContent = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 1rem;
`

export const Search = styled.form`
  display: flex;
  justify-content: space-between;
  border-radius: 5px 50px 50px 5px;
  height: 3.5rem;
  background: var(--white);
  padding-left: 0.5rem;
  box-shadow: rgb(0 0 0 / 80%) 0px 20px 25px -16px,
    rgb(0 0 0 / 72%) 0px 20px 20px -20px;
`

export const Input = styled.input`
  outline: 0;
  border: 0;
  font-weight: normal;
  font-size: 16px;
  color: var(--text);
  width: 100%;
  padding: 1rem;
  border-radius: 0;
`

export const Button = styled.button`
  outline: 0;
  border: 0;
  background: var(--primary);
  width: 70px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`
