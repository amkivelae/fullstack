import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const points = ListCreator(anecdotes.length)
  //const copy = [...points]

  const [selected, setSelected] = useState(0)
  const [copy, setCopy] = useState([...points])

  const Add = () => {
    let voteCopy = [...copy]
    let vote = voteCopy[selected]
    vote += 1
    voteCopy[selected] = vote
    setCopy(voteCopy)
    console.log(copy)
  }

  const Select = () => {
    let number = Math.floor(Math.random() * 6)
    if (number !== selected) {
      setSelected(number)
    } else {
      Select()
    }
  }

  const MostVotes = () => {
    let copyArr = [...copy]
    let max = Math.max(...copy)
    let index = copyArr.indexOf(max)
    return (
      <div>
        <p>{anecdotes[index]}</p>
        <p>has {copy[index]} votes</p>
      </div>
      )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {copy[selected]} votes</p>
      <button onClick={Add}>Vote</button> <button onClick={Select}>Click me!</button>
      <h1>Anecdote with most votes</h1>
      <MostVotes />
    </div>
  )
}

const ListCreator = (number) => {
  return (
    new Array(number).fill(0)
    )
}

export default App;