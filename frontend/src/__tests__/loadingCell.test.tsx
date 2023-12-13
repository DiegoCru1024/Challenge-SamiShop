import React from 'react'
import {render} from '@testing-library/react'
import LoadingCell from "../components/loadingCell/loadingCell"

describe('LoadingCell Component', () => {
    it('render LoadingCell', () => {
        const {getByText} = render(<LoadingCell/>)
        const textElement = getByText('Loading')
        expect(textElement).toBeInTheDocument()
    })
})