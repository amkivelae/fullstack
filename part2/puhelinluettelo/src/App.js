import React, { useState } from 'react'
import Filter from './Filter.js'
import PersonForm from './personForm.js'
import PersonList from './personList.js'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '358401234567' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const regexp = new RegExp(newFilter, 'i')
  const filterList = newFilter 
  ? persons.filter(person => regexp.test(person.name))
  : persons

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

  const handleListFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleListFilter={handleListFilter} />
      <PersonForm addPerson={addPerson} newName={newName} handleNameAddition={handleNameAddition} newPhone={newPhone} handlePhoneAddition={handlePhoneAddition} />
      <h2>Numbers</h2>
      <PersonList filterList={filterList} />      
    </div>
  )
}

export default App