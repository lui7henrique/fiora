export function FormatTag(tag: string) {
  switch (tag) {
    // Start
    case "LANE":
      return "Rota"
    case "Jungle":
      return "Selva"

    // Tools
    case "GOLDPER":
      return "goldper"
    case "CONSUMABLE":
      return "Consumíveis"
    case "VISION":
      return "Visão"

    // Defense
    case "HEALTH":
      return "Vida"
    case "HEALTHREGEN":
      return "Recuperação de vida"
    case "ARMOR":
      return "Armadura"
    case "SPELLBLOCK":
      return "Bloqueio de feitiço"

    // Attack
    case "LIFESTEAL":
      return "Roubo de vida"
    case "CRITICALSTRIKE":
      return "Dano crítico"
    case "ATTACKSPEED":
      return "Velocidade de ataque"
    case "DAMAGE":
      return "Dano"

    // Magic
    case "MANA":
      return "Mana"
    case "SPELLDAMAGE":
      return "Poder de habilidade"
    case "COOLDOWNREDUCTION":
      return "Redução de tempo de recarga"
    case "MANAREGEN":
      return "Recuperação de mana"

    // Moviment
    case "BOOTS":
      return "Botas"
    case "NONBOOTSMOVEMENT":
      return tag

    // Uncategorized
    case "ACTIVE":
      return "Ativo"
    case "MAGICPENETRATION":
      return "Penetração mágica"
    case "ARMORPENETRATION":
      return "Penetração de armadura"
    case "AURA":
      return "Aura"
    case "ONHIT":
      return "Dano ao contato"
    case "TRINKET":
      return "Sentinela"
    case "SLOW":
      return "Lentidão"
    case "STEALTH":
      return "Furtividade"
    case "SPELLVAMP":
      return "Vampirismo mágico"
    case "TENACITY":
      return "Tenacidade"

    // default case
    default:
      return tag
  }
}
