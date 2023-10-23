import { useState } from 'react'
import './App.css'
import PrimaryInput from './components/Input/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react'
import { useIdentityMutation } from './hooks/useIdentityMutation'

function App() {
  const { mutate } = useIdentityMutation()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName: secondName
    })
  }

  return (
    <div className='container'>
      <form>
        <div className='name-form-container'>
          <PrimaryInput 
            value={firstName} 
            onChange={event => setFirstName(event.target.value)}
            name="firstName"
            label="Name"
            placeholder="ex: Mary"
          />
          <PrimaryInput 
            value={secondName} 
            onChange={event => setSecondName(event.target.value)}
            name="secondName"
            label="Last Name"
            placeholder="Williams"
          />
        </div>
        <Spacer height="4" />
        <PrimaryInput 
          value={email} 
          onChange={event => setEmail(event.target.value)}
          name="email"
          label="Your e-mail"
          placeholder="yourname@email.com"
        />
        <Spacer height="4" />
        <Button colorScheme='purple' width="100%" onClick={submit}>Sent</Button>
      </form>
      <Spacer width="6" maxWidth="6"/>
      <div className="product-details">
        <h2>Monthly Signature</h2>
        <Spacer height="4" />
        <p>You will pay</p>
        <span>$ 250,00</span>
        <Spacer height="4" />
        <p>Rules: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
  )
}

export default App
