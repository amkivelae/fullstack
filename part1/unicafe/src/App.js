import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100

  return (
    <div>
      <h1>give feedback</h1>
      <p><Button text="good" val={[good, setGood]} /> <Button text="neutral" val={[neutral, setNeutral]} /> <Button text="bad" val={[bad, setBad]} /></p>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (good || neutral || bad) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text="good" val={good} />
            <StatisticsLine text="neutral" val={neutral} />
            <StatisticsLine text="bad" val={bad} />
            <StatisticsLine text="all" val={all} />
            <StatisticsLine text="average" val={isNaN(average) ? 0 : average} />
            <StatisticsLine text="positive" val={isNaN(positive) ? 0 + " %" : positive + " %"} />
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <p>no feedback given</p>
      </div>
    )
  }
}

const Button = ({ text, val }) => {
  const value = val[0]
  const func = val[1]
  return (
    <button onClick={() => func(value + 1)}>{text}</button>
  )
}

const StatisticsLine = ({ text, val }) => {
  return (
    <tr>
      <td>{text}</td><td>{val}</td>
    </tr>
  )
}

export default App;