interface CharacterInfo {
    id: string,
    name: string,
    species: Species,
    homeworld: Homeworld,
}

interface Species {
    name: string
}

interface Homeworld {
    name: string
}

export default CharacterInfo