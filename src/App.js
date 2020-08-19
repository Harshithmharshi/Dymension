import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import "./App.css"
import { BASEURL } from "./URL";
/* Components*/
const Category = React.lazy(() => import('./Components/Category'));


function App() {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(false);
    axios.get(BASEURL)
      .then((response) => {
        setLoading(true);
        console.log(response.data);
        setCategoryData(response.data.articles)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  return (
    <div className="App">
      {loading ?
        <Suspense fallback={<div className="loading"></div>}>
          <Category categoryData={categoryData} />
        </Suspense>
        : <div className="loading">Loading...</div>}
    </div>
  )
}
export default App;