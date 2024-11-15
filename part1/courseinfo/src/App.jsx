const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log(props.parts)
  return (
    <>
      {props.parts.map((part, i) => {
        return (
          <Part part={part.part} exercises={part.exercises} />
        )
      })} 
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.number}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    {"part": part1, "exercises":  exercises1},
    {"part": part2, "exercises":  exercises2},
    {"part": part3, "exercises":  exercises3}
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total number={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App