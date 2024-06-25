import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"


function App() {


  return (
    <>
      <main className="bg-black">
        <Navbar/>
        <Hero/>
        <Highlights/>
      </main>
    </>
  )
}

export default App
