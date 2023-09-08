import React, { useState } from 'react'
import Data from './components/Data.jsx'
import List from './components/List.jsx'
import './index.css'
function App() {
  const [people, setPeople] = useState(Data)
  return (
   <>
   <div className="container w-8 bg-black text-light align-middle

">
     <h3 className='text-center '>{people.length} Birthday Today</h3>
       <List people={people}/>
       <button className="text-center" onClick={()=>setPeople([])}>Clear All</button>

   </div>
   </>

  )
}

export default App