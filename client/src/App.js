import { Button, Input } from './components/elements/index'
import { useState } from 'react'

function App() {
  const [formState, setFormState] = useState({})


  return (
    <>
      <Input name='login' handleChange={setFormState} />
      <Button>Hello World</Button>
    </>
  );
}

export default App;
