export interface Adversary {
    name: string
    shortDescription: string
    tags: string[]
    motivesAndTactics: string[]
    tier: number
    type: string
    difficulty: number
    attackModifier: number
    weapon: Weapon
    damageThresholds: DamageThresholds
    hitPoints: number
    stress: number
    experience: string[]
    features: Feature[]
    image: string
}

export interface Weapon {
    name: string
    range: string
    damage: string
}

export interface DamageThresholds {
    minor: number
    major: number
    severe: number
}

export interface Feature {
    name: string
    type: string
    description: string
    flavourText: string
    cost?: Cost
}

export interface Cost {
    stress: number
}
