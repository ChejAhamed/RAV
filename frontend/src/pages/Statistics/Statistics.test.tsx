import React from 'react';
import Statistics from './Statistics';
import {screen, render} from '../../utils/test.utils'

describe('Given a Statistics component',()=>{
 
        beforeEach(()=>{
            render(<Statistics />)
        }
           
        )
  
    test('Then Top Players should be in the document',()=>{
        
        expect(screen.queryByText(/Top Players/i)).toBeInTheDocument;
    })

 })