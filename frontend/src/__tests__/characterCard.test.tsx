import React from 'react'
import {render} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import CharacterInfo from "../interfaces/characterInfo"
import CharacterCard from "../components/characterCard/characterCard"

const testCharacter: CharacterInfo = {
    id: '1',
    name: 'R2-D2',
    species: {
        name: 'Droid',
    },
    homeworld: {
        name: 'Naboo',
    },
}

describe('CharacterCard Component', () => {
    it('render CharacterCard', () => {
        const {getByText} = render(
            <BrowserRouter>
                <CharacterCard character={testCharacter}/>
            </BrowserRouter>
        )

        const characterName = getByText('R2-D2')
        const characterSpecies = getByText('Droid from Naboo')

        expect(characterName).toBeInTheDocument()
        expect(characterSpecies).toBeInTheDocument()
    })
})
