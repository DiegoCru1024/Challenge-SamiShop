import React from 'react'
import {render} from '@testing-library/react'
import TitleBar from "../components/titleBar/titleBar"

describe('TitleBar Component', () => {
    it('render TitleBar', () => {
        const {getByText} = render(<TitleBar title={'Test'}/>)
        const textElement = getByText('Test')
        expect(textElement).toBeInTheDocument()
    })
})