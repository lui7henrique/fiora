import Image from "next/image"

import * as S from "./styles"
interface ISkillsProps {
  skills: {
    id: string
    name: string
    description: string
    image: string
  }[]
  passive: {
    name: string
    description: string
    image: string
  }
}
export function Skills({ skills, passive }: ISkillsProps) {
  return (
    <S.Skills>
      <S.Skill>
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
          <div
            dangerouslySetInnerHTML={{
              __html: passive.description ?? ""
            }}
            className="description"
          />
        </div>
      </S.Skill>
      {skills.map((skill) => {
        return (
          <S.Skill key={skill.id}>
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
  )
}
