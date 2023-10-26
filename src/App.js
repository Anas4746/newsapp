
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router } from 'react-router-dom';

// const App = () => {
//   const location = useLocation();
//   const page = 5
//   const api_key = process.env.REACT_APP_NOT_SECRET_CODE
//   const [progress, setProgress] = useState(0)
//   const [category, setCategory] = useState('/general')
//   setCategory(category.substring(1))
//   return (
//     <>
//       {/* <News api_key={api_key} setProgress={setProgress}  pageSize={page} country='in' category='general' /> */}
//       <Navbar />
//       <LoadingBar
//         color='#f11946'
//         height={5}
//         progress={progress}
//       />
//       <Routes>
//         <Route exact path={location.pathname} element={<News api_key={api_key} setProgress={setProgress} key='general' pageSize={page} country='in' category={category} />}>
//         </Route>
//       </Routes>
//     </>
//   )
// }

const App = () => {
  const page = 5
  const api_key = process.env.REACT_APP_NOT_SECRET_CODE
  const [progress, setProgress] = useState(0)

  return (
    <div>
      {/* <News api_key={api_key} setProgress={setProgress}  pageSize={page} country='in' category='general' /> */}
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={5}
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News api_key={api_key} setProgress={setProgress} key='general' pageSize={page} country='in' category='general' />}> </Route>
          <Route exact path="/business" element={<News api_key={api_key} setProgress={setProgress} key='business' pageSize={page} country='in' category='business' />}> </Route>
          <Route exact path="/entertainment" element={<News api_key={api_key} setProgress={setProgress} key='entertainment' pageSize={page} country='in' category='entertainment' />}> </Route>
          <Route exact path="/general" element={<News api_key={api_key} setProgress={setProgress} key='general' pageSize={page} country='in' category='general' />}> </Route>
          <Route exact path="/health" element={<News api_key={api_key} setProgress={setProgress} key='health' pageSize={page} country='in' category='health' />}> </Route>
          <Route exact path="/science" element={<News api_key={api_key} setProgress={setProgress} key='science' pageSize={page} country='in' category='science' />}> </Route>
          <Route exact path="/sports" element={<News api_key={api_key} setProgress={setProgress} key='sports' pageSize={page} country='in' category='sports' />}> </Route>
          <Route exact path="/technology" element={<News api_key={api_key} setProgress={setProgress} key='technology' pageSize={page} country='in' category='technology' />}> </Route>
        </Routes>
      </Router>
    </div>
  )
}


export default App;


