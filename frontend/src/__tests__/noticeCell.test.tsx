import React from 'react'
import {render} from '@testing-library/react'
import NoticeCell from "../components/noticeCell/noticeCell"

describe('NoticeCell Component', () => {
    it('render NoticeCell', () => {
        const {getByText} = render(<NoticeCell message={'Error'}/>)
        const textElement = getByText('Error')
        expect(textElement).toBeInTheDocument()
    })
})