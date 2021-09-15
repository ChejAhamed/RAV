import React from 'react';
import {screen, render} from '../../utils/test.utils'
import Footer from './Footer';

describe('Given a Footer component',()=>{
 
        beforeEach(()=>{
            render(<Footer />)
        }
           
        )
  
    test('Then Social Follow should be in the document',()=>{
        
        expect(screen.queryByText(/Social Follow/i)).toBeInTheDocument;
    })

 })