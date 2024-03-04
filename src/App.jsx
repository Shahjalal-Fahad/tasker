import './App.css'
import Footer from './task/Footer'
import Header from './task/Header'
import HeroSection from './task/HeroSection'
import TaskBoard from './task/TaskBoard'


function App() {


  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </>
  )
}

export default App
