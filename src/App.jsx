import './App.css'
import InfinityClinic from './components/Homepage'
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  

  return (
    <>
      <InfinityClinic /> 
      <SpeedInsights /> 
    </>
  )
}

export default App
