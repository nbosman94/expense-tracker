
import Tracker from "./pages/Tracker"
import {Routes, Route} from "react-router-dom"
import ProfilePage from "./pages/ProfilePage"
import OverviewPage from "./pages/OverviewPage"


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<ProfilePage/>}/>
      <Route path="/overview" element={<OverviewPage/>}/>
     
     </Routes>
    </>
  )
}

export default App
