interface CharacterDetails {
    name: string,
    eyeColor: string,
    hairColor: string,
    skinColor: string,
    birthYear: string,
    vehicleConnection: VehicleConnection
}

interface VehicleConnection {
    vehicles: Vehicles[]
}

interface Vehicles {
    name: string
}

export default CharacterDetails