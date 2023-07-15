import React from 'react'
import Card from './Card'
import movies from "../movies"

function App() {
  return ( 
    <div>
    <h1 className = "heading"> 🎬My movies </h1>
    <Card
    name = {movies[0].name}
    imgURL = {movies[0].imgURL}
    liked = {movies[0].liked}
    year = {movies[0].year}
    />

    <Card
    name = {movies[1].name}
    imgURL = {movies[1].imgURL}
    liked = {movies[1].liked}
    year = {movies[1].year}
    />

    <Card
    name = {movies[2].name}
    imgURL = {movies[2].imgURL}
    liked = {movies[2].liked}
    year = {movies[2].year}
    />
    </div>
  )
}

export default App