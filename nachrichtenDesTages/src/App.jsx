import { useState } from "react"
import Navibar from "./Components/Navibar"
import NewsBoard from "./Components/NewsBoard"

const App = () => {
  const [ category, setCategory ] = useState("general");
  return (
    <div>
      <Navibar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  )
}

export default App
