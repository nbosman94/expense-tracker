
import Tracker from "./pages/Tracker"
import {Routes, Route} from "react-router-dom"
import ProfilePage from "./pages/ProfilePage"
import OverviewPage from "./pages/OverviewPage"
import PageLayout from "./Layout/PageLayout"


function App() {
  

  return (
    <>
    <PageLayout>
    <Routes>
      <Route path="/" element={<ProfilePage/>}/>
      <Route path="/overview" element={<OverviewPage/>}/>
     
     </Routes>

     </PageLayout>
    </>
  )
}

export default App
