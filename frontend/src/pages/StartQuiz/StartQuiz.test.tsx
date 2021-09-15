import React from 'react';
import StartQuiz from './StartQuiz';
import {screen, render} from '../../utils/test.utils'

describe('Given a StartQuiz component',()=>{
 
        beforeEach(()=>{
            render(<StartQuiz />)
        }
           
        )
  
    test('Then  Question should be in the document',()=>{
        
        expect(screen.queryByText(/Question/i)).toBeInTheDocument;
    })
    test('Then  You scored should be in the document',()=>{
        
        expect(screen.queryByText(/You scored/i)).toBeInTheDocument;
    })

 })