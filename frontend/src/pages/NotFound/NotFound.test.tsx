import React from 'react';
import NotFound from './NotFound';
import {screen, render} from '../../utils/test.utils'

describe('Given a NotFound component',()=>{
 
        beforeEach(()=>{
            render(<NotFound />)
        }
           
        )
  
    test('Then  404 - Page not found should be in the document',()=>{
        
        expect(screen.queryByText(/404 - Page not found/i)).toBeInTheDocument;
    })
    
 })