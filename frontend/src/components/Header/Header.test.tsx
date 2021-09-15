import React from 'react';
import {screen, render} from '../../utils/test.utils'
import Header from './Header';

describe('Given a Header component',()=>{
 
        beforeEach(()=>{
            render(<Header />)
        }
           
        )
  
    test('Then React Angulor Vue should be in the document',()=>{
        
        expect(screen.queryByText(/React  Angulor  Vue/i)).toBeInTheDocument;
    })

 })