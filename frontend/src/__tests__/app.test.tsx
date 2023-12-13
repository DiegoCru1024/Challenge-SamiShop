import React from 'react'
import {render, getByText} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import WebTemplate from "../templates/webTemplate"
import MobileTemplate from "../templates/mobileTemplate";

const testCharactersData = [
    {id: 'cGVvcGxlOjM=', name: 'R2-D2', species: {name: 'Droid'}, homeworld: {name: 'Naboo'}},
    {id: 'cGVvcGxlOjEz', name: 'Chewbacca', species: {name: 'Wookie'}, homeworld: {name: 'Kashyyyk'}},
    {id: 'cGVvcGxlOjE1', name: 'Greedo', species: {name: 'Rodian'}, homeworld: {name: 'Rodia'}},
    {id: 'cGVvcGxlOjQ0', name: 'Darth Maul', species: {name: 'Zabrak'}, homeworld: {name: 'Dathomir'}},
]

const testCharacterDetailsData = {
    id: 'cGVvcGxlOjQ0',
    name: 'Darth Maul',
    eyeColor: 'yellow',
    hairColor: 'none',
    skinColor: 'red',
    birthYear: '54BBY',
    vehicleConnection: {
        vehicles: [
            {name: 'Sith speeder'}
        ]
    }
}

describe('App Component Web', () => {
    it('render App Web', () => {
        const {getByText} = render(
            <BrowserRouter>
                <WebTemplate
                    charactersData={testCharactersData}
                    charactersLoading={false}
                    charactersError={false}
                    detailsData={testCharacterDetailsData}
                    detailsLoading={false}
                    detailsError={false}/>
            </BrowserRouter>
        )

        testCharactersData.map(character => {
            expect(getByText(character.name)).toBeInTheDocument()
            expect(getByText(`${character.species.name} from ${character.homeworld.name}`)).toBeInTheDocument()
        })

        expect(getByText('yellow')).toBeInTheDocument()
        expect(getByText('none')).toBeInTheDocument()
        expect(getByText('red')).toBeInTheDocument()
        expect(getByText('54BBY')).toBeInTheDocument()
        expect(getByText('Sith speeder')).toBeInTheDocument()
    })

    it('render App Web while loading data', () => {
        const {getByText} = render(
            <BrowserRouter>
                <WebTemplate
                    charactersData={testCharactersData}
                    charactersLoading={true}
                    charactersError={false}
                    detailsData={testCharacterDetailsData}
                    detailsLoading={false}
                    detailsError={false}/>
            </BrowserRouter>
        )

        const loadingElement = getByText('Loading')
        expect(loadingElement).toBeInTheDocument()
    })

    it('render App Web while loading details', () => {
        const {getByText} = render(
            <BrowserRouter>
                <WebTemplate
                    charactersData={testCharactersData}
                    charactersLoading={false}
                    charactersError={false}
                    detailsData={testCharacterDetailsData}
                    detailsLoading={true}
                    detailsError={false}/>
            </BrowserRouter>
        )

        const loadingElement = getByText('Loading')
        expect(loadingElement).toBeInTheDocument()
    })

    it('render App Web with data error', () => {
        const {getByText} = render(
            <BrowserRouter>
                <WebTemplate
                    charactersData={testCharactersData}
                    charactersLoading={false}
                    charactersError={true}
                    detailsData={testCharacterDetailsData}
                    detailsLoading={false}
                    detailsError={false}/>
            </BrowserRouter>
        )

        const errorElement = getByText('Failed to Load Data')
        expect(errorElement).toBeInTheDocument()
    })

    it('render App Web with details error', () => {
        const {getByText} = render(
            <BrowserRouter>
                <WebTemplate
                    charactersData={testCharactersData}
                    charactersLoading={false}
                    charactersError={false}
                    detailsData={testCharacterDetailsData}
                    detailsLoading={false}
                    detailsError={true}/>
            </BrowserRouter>
        )

        const errorElement = getByText('Failed to Load Details')
        expect(errorElement).toBeInTheDocument()
    })
})

describe('App Component Mobile', () => {
    it('render App Mobile', () => {
        const {getByText} = render(
            <BrowserRouter>
                <MobileTemplate
                    charactersData={testCharactersData}
                    charactersLoading={false}
                    charactersError={false}
                    detailsData={testCharacterDetailsData}
                    detailsLoading={false}
                    detailsError={false}/>
            </BrowserRouter>
        )

        testCharactersData.map(character => {
            expect(getByText(character.name)).toBeInTheDocument()
            expect(getByText(`${character.species.name} from ${character.homeworld.name}`)).toBeInTheDocument()
        })
    })

    it('render App Mobile while loading data', () => {
        const {getByText} = render(
            <BrowserRouter>
                <MobileTemplate
                    charactersData={testCharactersData}
                    charactersLoading={true}
                    charactersError={false}
                    detailsData={testCharacterDetailsData}
                    detailsLoading={false}
                    detailsError={false}/>
            </BrowserRouter>
        )

        const loadingElement = getByText('Loading')
        expect(loadingElement).toBeInTheDocument()
    })

    it('render App Mobile while data error', () => {
        const {getByText} = render(
            <BrowserRouter>
                <MobileTemplate
                    charactersData={testCharactersData}
                    charactersLoading={false}
                    charactersError={true}
                    detailsData={testCharacterDetailsData}
                    detailsLoading={false}
                    detailsError={false}/>
            </BrowserRouter>
        )

        const loadingElement = getByText('Failed to Load Data')
        expect(loadingElement).toBeInTheDocument()
    })
})
