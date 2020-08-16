import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import "./App.css"
import { BASEURL } from "./URL";
/* Components*/
const Category = React.lazy(() => import('./Components/Category'));
const Card = React.lazy(() => import('./Components/Card'));


function App() {
  const [newsData, setNewsData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(false);
    axios.get(BASEURL)
      .then((response) => {
        setLoading(true);
        console.log(response.data);
        setNewsData(response.data.articles);
        setCategoryData(response.data.articles.slice(0, 7))
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
          <Card newsData={newsData} />
        </Suspense>
        : <div className="loading">Loading...</div>}
    </div>
  )
}
export default App;