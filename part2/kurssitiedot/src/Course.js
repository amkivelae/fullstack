import React from 'react'

const Course = (props) => {
    let header = props.course
    return (
        <div>
            <Header header={header} />
        </div>
    )
}

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

export default Course;