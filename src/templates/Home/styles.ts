import Image from "next/image"
import styled, { css } from "styled-components"

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

export const PreviouslySummoners = styled.div<{
  isVisible: boolean
}>`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 5px 5px;

  background-color: ${(props) => props.theme.colors.shape}33;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  max-height: 0;
  overflow-y: auto;

  transition: all 0.2s ease-in-out;
  overflow: 9999;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.shapeHover};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      max-height: 200px;
    `}
`

export const PreviouslySummoner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  transition: all 0.1s ease-in-out;
  justify-content: space-between;

  &:hover {
    background-color: ${(props) => props.theme.colors.shape}80;
  }
`

export const PreviouslySummonerBasicInfos = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 95%;
`

export const PreviouslySummonerIconContainer = styled.figure`
  width: 3rem;
  height: 3rem;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`

export const PreviouslySummonerIcon = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PreviouslySummonerInfos = styled.div``

export const PreviouslySummonerName = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

export const PreviouslySummonerLevel = styled.sub`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.support};
`
