import React, { useEffect, useState } from 'react'

export default function Github() {
 const [data , setData] = useState([]);

    useEffect(() =>{
     fetch("https://api.github.com/users/AAYUSH12032003")
     .then(response => response.json())
     .then(data => {
       // console.log(data);
        setData(data);
     })
    },[]);



  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img src= {data.avatar_url} alt="git picture" width={300} /> </div>
  )
}

