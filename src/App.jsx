import { useState } from 'react'
import Newsletter from './Components/Newsletter';
import { Successstate } from './Components/Success';

function App() {
  const [page, setPage] = useState(0);
  const [emailaddress, setEmailAddress] = useState('');

  const onChangeEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  }

  const newsletter = () => setPage(0);
  const success = () => setPage(1);
  

  return (
    <>
     {page === 0 && (
      <Newsletter
      emailaddress={emailaddress}
      onChangeEmailAddress={onChangeEmailAddress}
      onSubmitEmailAddress={success}
      />
     )}


     {page === 1 && (
      <Successstate
      email={emailaddress}
      onClickDismiss={newsletter}
      />

     )}
     
    </>
  )
}

export default App
