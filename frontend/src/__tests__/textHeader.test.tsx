import React from 'react'
import {render} from '@testing-library/react'
import TextHeader from "../components/textHeader/textHeader"

describe('TextHeader Component', () => {
    it('render TitleBar', () => {
        const {getByText} = render(<TextHeader header={'New Header'}/>)
        const textElement = getByText('New Header')
        expect(textElement).toBeInTheDocument()
    })
})