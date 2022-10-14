
import './App.css'
import React, { PureComponent } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const studentData = [
  {
    name: 'Stephen',
    submissions: {
      beavers: 3,
      stars: 2,
    }
  },
  {
    name: 'Eduardo',
    submissions: {
      beavers: 7,
      stars: 1,
    }
  },
  {
    name: 'Pepe',
    submissions: {
      beavers: 6,
      stars: 9,
    }
  },
  {
    name: 'Gigachad',
    submissions: {
      beavers: 0,
      stars: 10,
    }
  },
]

// Using the Recharted library, create a graph as similar as you can, to the one in the #Classroom

function App() {
  return (<>
    {/* Code your solution here */}
    <BarChart
      width={700}
      height={500}
      data={studentData}
      margin={{
        top: 5,
        bottom: 5,
        right: 40,
        left: 30
      }}
    >
      <CartesianGrid strokeDasharray="4 4 " />
      <XAxis dataKey="name" />
      <YAxis dataKey='submissions.stars' />
      <Tooltip />
      <Legend align='center' />
      <Bar dataKey="submissions.beavers" name='beavers' fill="#b8860b" />
      <Bar dataKey="submissions.stars" name='stars' fill="#FFC300 " />
    </BarChart>
  </>)

}

export default App
