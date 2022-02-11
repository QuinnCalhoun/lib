import { Button, Input } from './components/elements/index'
import { useState } from 'react'
import { FormWrapper } from './components/forms/FormWrapper';

function App() {
 

  return (
    <FormWrapper>
      <Input name='email'/>
      <Input name='password' />
      <Button>Submit</Button>

    </FormWrapper>
  );
}

export default App;


//Structure - 
//  FormWrapperF
//    Inputs
//    Buttons
//    Labels
//  /FormWrapper