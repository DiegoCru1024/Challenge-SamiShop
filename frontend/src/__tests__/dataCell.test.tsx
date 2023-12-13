import React from 'react'
import {render} from '@testing-library/react'
import DataCell from "../components/dataCell/dataCell"

describe('DataCell Component', () => {
    it('render DataCell with label', () => {
        const {getByText} = render(<DataCell label={'Label 1'}/>)
        const labelElement = getByText('Label 1')
        expect(labelElement).toBeInTheDocument()
    })

    it('render DataCell with label and value', () => {
        const {getByText} = render(<DataCell label={'Label 1'} value={'Value 1'}/>)
        const labelElement = getByText('Label 1')
        const valueElement = getByText('Value 1')
        expect(labelElement).toBeInTheDocument()
        expect(valueElement).toBeInTheDocument()
    })
})