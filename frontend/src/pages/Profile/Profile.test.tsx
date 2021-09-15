import React from 'react';
import Profile from './Profile'
import {screen, render} from '../../utils/test.utils'


describe('Given a Profile component',()=>{
 
        beforeEach(()=>{
            render(<Profile />)
        }
           
        )
  
    test('Then Top Players should be in the document',()=>{
        
        expect(screen.queryByText(/Profile/i)).toBeInTheDocument;
    })

 })