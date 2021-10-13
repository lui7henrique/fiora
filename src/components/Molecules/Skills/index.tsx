import { usePlayer } from "hooks/usePlayer"
import Image from "next/image"
import { useState } from "react"

import { VideoPlayer } from "../VideoPlayer"
import * as S from "./styles"

interface ISkillsProps {
  skills: {
    id: string
    name: string
    description: string
    image: string
    video: string
  }[]
  passive: {
    name: string
    description: string
    image: string
    video: string
  }
}
export function Skills({ skills, passive }: ISkillsProps) {
  const { showPlayer, openPlayer } = usePlayer()
  const [skillVideo, setSkillVideo] = useState("")

  const handleShowSkillVideo = (video: string) => {
    setSkillVideo(video)
    openPlayer()
  }

  return (
    <S.Container>
      <S.Title>Skills</S.Title>

      {showPlayer && <VideoPlayer url={skillVideo} />}

      <S.Skills>
        <S.Skill onClick={() => handleShowSkillVideo(passive.video)}>
          <figure>
            <Image
              src={passive.image}
              alt={`${passive.name} icon`}
              width={48}
              height={48}
              layout="fixed"
            />
          </figure>
          <div>
            <h4>{passive.name}</h4>
            <S.Description
              dangerouslySetInnerHTML={{
                __html: passive.description ?? ""
              }}
              className="description"
            />
          </div>
        </S.Skill>

        {skills.map((skill) => {
          return (
            <S.Skill
              key={skill.id}
              onClick={() => handleShowSkillVideo(skill.video)}
            >
              <figure>
                <Image
                  src={skill.image}
                  alt={`${skill.name} icon`}
                  width={48}
                  height={48}
                  layout="fixed"
                />
              </figure>
              <div>
                <h4>{skill.name}</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: skill.description ?? ""
                  }}
                  className="description"
                />
              </div>
            </S.Skill>
          )
        })}
      </S.Skills>
    </S.Container>
  )
}
