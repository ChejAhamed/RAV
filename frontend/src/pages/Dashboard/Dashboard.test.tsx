import React from 'react';
import {screen, render} from '../../utils/test.utils'
import Dashboard from './Dashboard';

describe('Given a Dashboard component',()=>{
 
        beforeEach(()=>{
            render(<Dashboard />)
        }
           
        )
  
    test('Then Choose the subject of the quiz should be in the document',()=>{
        
        expect(screen.queryByText(/Choose the subject of the quiz/i)).toBeInTheDocument;
    })

 })