import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: 358401234567 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone] = useState()

  const addPerson = (event) => {
    event.preventDefault()
    const checkName = persons.find(element => element.name === newName)
    if(checkName) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    } else {
      const nameObject = {
        name: newName,
        phone: newPhone
      }

      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  const handleNameAddition = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneAddition = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameAddition}/>
        </div>
        <div>
        number: <input 
          value={newPhone}
          onChange={handlePhoneAddition}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <li key={person.name}>{person.name} +{person.phone}</li>
        ))}
      </div>
    </div>
  )

}

export default App