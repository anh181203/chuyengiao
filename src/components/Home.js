import React from "react";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import "../components/Homecss.css";
import Update from "./Update";
function Home() {
  const [loading, setLoading] = useState([]);
  const [seachTitle, setSearchTitle] = useState([]);

  
  const[showUpdate, setShowUpdate] = useState(false)
  const handOnClose =()=> setShowUpdate(false)

  ///load data
  const [post, setPost] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      const res =
        await axios.get`https://63da85232af48a60a7cfddd6.mockapi.io/api/products`;
      setPost(res.data);
    };
    loadPosts();
  }, []);

  const listItem = post.map((post) => (
    <div className="inline-block max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div key={post.id}>
        <img className="rounded-t-lg" src={post.image} alt=""></img>
        <p>{post.decriptions}</p>
      </div>
    </div>
  ));
  //////////////////
  //tìm kiếm
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://63da85232af48a60a7cfddd6.mockapi.io/api/products?search=${seachTitle}`
      );

      if (res.status === 200) {
        setPost(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

///////

  
  return (
    <div>
      <div >
        <button
          onClick={()=> setShowUpdate(true)}
         className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl">
          Open Modal
        </button>
      </div>
      <h3>Search Filter</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <button onClick={getData}>tiem kiem</button>
      {listItem}

      <Update onClose={handOnClose} visibel ={showUpdate}/>
    </div>
  );
}

export default Home;
