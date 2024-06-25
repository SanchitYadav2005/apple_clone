import Hilights from "./components/Hilights"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"


function App() {


  return (
    <>
      <main className="bg-black">
        <Navbar/>
        <Hero/>
        <Hilights/>
      </main>
    </>
  )
}

export default App
