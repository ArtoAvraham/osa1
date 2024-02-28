// Header. jsx
import react from 'react'

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

export default Header

// Content.jsx
import React from 'react'
import Part from './Part'

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  )
}

export default Content

// Part.jsx
import React from 'react'

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

export default Part

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys';
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavat: 10
    },
    {
      nimi: 'Propseilla dataa välittäminen',
      tehtavat: 7
    },
    {
      nimi: 'Komponentin tila',
      tehtavat: 14
    }
  ];

  return (
    <div>
      <h1>{kurssi}</h1>
      {osat.map(osa => (
        <p key={osa.nimi}>{osa.nimi} - {osa.tehtavat} tehtävää</p>
      ))}
    </div>
  );
};

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
  };

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(part => (
        <p key={part.name}>{part.name} - {part.exercises} exercises</p>
      ))}
    </div>
  );
};



export default App