import {render} from "@testing-library/react"
import InfoSection from "../components/infoSection/infoSection"

const characterTestDetails = {
    name: 'Chewbacca',
    eyeColor: 'blue',
    hairColor: 'brown',
    skinColor: 'unknown',
    birthYear: '200BBY',
    vehicleConnection: {
        vehicles: [
            {name: 'AT-ST'},
        ],
    },
}

describe('InfoSection component', () => {
    it('render InfoSection', () => {
        const {getByText} = render(
            <InfoSection characterDetails={characterTestDetails} loading={false} error={false}/>
        )

        expect(getByText('General Information')).toBeInTheDocument()
        expect(getByText('Eye Color')).toBeInTheDocument()
        expect(getByText('Hair Color')).toBeInTheDocument()
        expect(getByText('Skin Color')).toBeInTheDocument()
        expect(getByText('Birth Year')).toBeInTheDocument()
        expect(getByText('blue')).toBeInTheDocument()
        expect(getByText('brown')).toBeInTheDocument()
        expect(getByText('unknown')).toBeInTheDocument()
        expect(getByText('200BBY')).toBeInTheDocument()
        expect(getByText('Vehicles')).toBeInTheDocument()
        expect(getByText('AT-ST')).toBeInTheDocument()
    })

    it('renders InfoSection while loading', () => {
        const {getByText} = render(
            <InfoSection characterDetails={characterTestDetails} loading={true} error={false}/>
        )

        const loadingElement = getByText('Loading')
        expect(loadingElement).toBeInTheDocument()
    })

    it('renders InfoSection with error', () => {
        const {getByText} = render(
            <InfoSection characterDetails={characterTestDetails} loading={false} error={true}/>
        )

        const errorElement = getByText('Failed to Load Details')
        expect(errorElement).toBeInTheDocument()
    })
})