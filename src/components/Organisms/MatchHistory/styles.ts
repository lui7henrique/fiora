import Image from "next/image"
import styled, { css, keyframes } from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Match = styled.a<{ win: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
  /* border-right: 5px solid
    ${({ win, theme }) =>
    win ? theme.colors["success"] : theme.colors["error"]}; */
`

export const Infos = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
`

export const ChampionIcon = styled.figure`
  width: 30%;
  position: relative;
  overflow: hidden;
  border-radius: 5px 0 0 5px;

  @media (max-width: 512px) {
    width: 60%;
  }
  /* border-right: 1px solid ${({ theme }) => theme.colors.border}; */
`

export const ChampionImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  object-position: top center;

  mask-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );

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

  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

export const MatchInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`
export const Win = styled.h3<{ win: boolean }>`
  font-size: 1rem;
  color: ${({ theme, win }) =>
    win ? theme.colors.success : theme.colors.error};
  opacity: 0.7;
`

export const MatchTime = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const MatchDuration = styled.h4`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;

  @media (max-width: 512px) {
    font-size: 12px;
  }
`

export const Divisor = styled.sub`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.support};
  font-weight: normal;
  user-select: none;

  @media (max-width: 512px) {
    font-size: 14px;
  }
`

export const MatchCreation = styled.h4`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  opacity: 0.5;

  @media (max-width: 512px) {
    display: none;
  }
`

export const MatchCreationMinimal = styled.h4`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  display: none;

  @media (max-width: 512px) {
    display: block;
    font-size: 12px;
    opacity: 0.7;
  }
`

export const SummonerStats = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const KDA = styled.h4`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
  opacity: 0.5;

  @media (max-width: 512px) {
    font-size: 12px;
  }
`

export const AMA = styled.h4<{ AMA: number }>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.support};

  @media (max-width: 512px) {
    font-size: 12px;
  }

  ${({ AMA }) =>
    AMA > 2 &&
    css`
      color: ${({ theme }) => theme.colors["attention-darker"]};
    `}

  ${({ AMA }) =>
    AMA > 4 &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  font-weight: bold;
  letter-spacing: 2px;
`
export const Teams = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 512px) {
    display: none;
  }
`

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const Participant = styled.a`
  display: flex;
  gap: 0.2rem;
  align-items: center;
`

export const ParticipantIconWrapper = styled.div<{ isMainSummoner: boolean }>`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  border: 2px solid
    ${({ theme, isMainSummoner }) =>
      isMainSummoner ? theme.colors.primary : "transparent"};
`

export const ParticipantIcon = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  object-position: top center;
  filter: brightness(0.8);

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

  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

export const ParticipantNickname = styled.h4<{ isMainSummoner: boolean }>`
  font-size: 10px;
  font-weight: ${({ isMainSummoner }) => (isMainSummoner ? 500 : 300)};
  width: 16ch;
  color: ${({ theme }) => theme.colors.text};
`

const opacity = keyframes`
  0% {
    opacity: 0.2
  }

  20% {
    opacity: 0.4
  }

  40% {
    opacity: 0.6
  }
  60% {
    opacity: 0.8
  }

  80% {
    opacity: 1
  }

  100% {
    opacity: 0.2
  }
`

export const Loading = styled.h5`
  font-size: 1.2rem;
  margin-top: 1rem;
  animation: ${opacity} 1.5s linear infinite;
`
