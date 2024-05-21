import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar'
import Content from './assets/Components/Content'
import RatingCards from './assets/Components/RatingCards'
import Section1 from './assets/Components/Section1'
import Section2 from './assets/Components/Section2'
import Section3 from './assets/Components/Section3'
import Section4 from './assets/Components/Section4'
import Bottom_Navbar from './assets/Components/Bottom_Navbar'


function App() {
  const [count, setCount] = useState(0)
return(<>

<div className='bg text-white sora-family'> 
  <Navbar/>
  <Content/>
  <RatingCards/>
  <Section1/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Bottom_Navbar/>
</div>

</>)
}
export default App;
