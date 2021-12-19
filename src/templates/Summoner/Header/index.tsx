/* eslint-disable no-unused-vars */
import { ReactNode } from "react"

import * as S from "./styles"

type Section = {
  name: string
  label: string
  component: ReactNode
}

type HeaderProps = {
  activeSection?: Section
  setActiveSection: (section: Section) => void
  sections: Array<Section>
}

export const Header = ({
  activeSection,
  setActiveSection,
  sections
}: HeaderProps) => {
  return (
    <S.Header>
      <div></div>
      <S.Options>
        {sections.map((section) => {
          return (
            <S.Option
              key={section.name}
              onClick={() => setActiveSection(section)}
              isActive={activeSection === section}
            >
              {section.label}
            </S.Option>
          )
        })}
      </S.Options>
    </S.Header>
  )
}
