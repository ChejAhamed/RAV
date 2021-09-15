import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import Login from './Login'

describe('Given a Login component',()=>{

    test('calls onClick prop when clicked', () => {
        const initialState={
            authUser:{name:'Andy'}
        }
    const handleLoginClick = jest.fn()
        render(<Login />, {initialState})
    fireEvent.click(screen.getByTestId('submit'))
    expect(handleLoginClick).toHaveBeenCalledTimes(1)
    })

})