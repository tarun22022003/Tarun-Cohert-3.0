import React from 'react'
import SearchBar from './Components/SearchBar'
import Tabs from './Components/Tabs'
import ResultGrid from './Components/ResultGrid'
import HomeDefault from './Components/HomeDefault'
const App = () => {


  return (
    <div className='min-h-full w-full bg-gray-950 text-white'>
     <SearchBar/>
     <Tabs/>
     <ResultGrid/>
    </div>
  )
}

export default App
