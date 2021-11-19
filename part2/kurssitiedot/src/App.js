import React from 'react'

const Header = (props) => {
  return (
    Object.entries(props.header).map(item => {
      return (
        <div>
          <h1>Web development curriculum</h1>
          <h2 key={item[1].id}>
            {item[1].name}
          </h2>
          <Part parts={item[1].parts} />
          <Total total={item[1].parts} />
        </div>
      )
    })
  )
}

const Part = (props) => {
  return (
    Object.entries(props.parts).map(item => {
      return (
        <div>
          <p key={item[1].id}>
            {item[1].name + ' ' + item[1].exercises}
          </p>
        </div>
      )
    })  
  )
}

const Total = (props) => {
  let total = props.total
  total = total.reduce((s, p) => {
    return s + p.exercises
  }, 0)
  return(
    <div>
      <h3 key={total.id}>
        {'total of '+ total + ' exercises'}
      </h3>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = (props) => {
  let header = props.courses
  return (
    <div>
      <Header header={header} />
    </div>
  )
}

export default App;