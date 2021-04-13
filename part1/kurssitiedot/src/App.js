import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  let p1 = props.p[0]
  let p2 = props.p[1]
  let p3 = props.p[2]
  return (
    <div>
      <Part p={p1} />
      <Part p={p2} />
      <Part p={p3} />
    </div>
  )
}

const Part = (props) => {
  let part = props.p
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  let e1 = props.tot[0]
  let e2 = props.tot[1]
  let e3 = props.tot[2]
  return (
    <div>
      <p>Number of exercises {e1.exercises + e2.exercises + e3.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content p={course.parts} />
      <Total tot={course.parts} />
    </div>
  )
}

export default App;
