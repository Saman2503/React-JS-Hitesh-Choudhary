import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
//     const [data,setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/Saman2503')
//             .then(res => res.json())
//             .then((data) => {
//                 console.log(data);
//                 setData(data)
//         })
//     }, [])
    
  return (
    <div className='text-start m-4 flex font-sans p-3 text-2xl'>
          <img src={data.avatar_url} alt="profile pic" className='mx-4 p-2' width={300}/>
          Name - {data.name}
          <br/>
          {/* <br/> */}
          UserName - {data.login}
          <br/>
          {/* <br/> */}
          Bio - {data.bio}
          <br/>
          {/* <br/> */}
          Location - {data.location}
          <br/>
          {/* <br/> */}
          Public Repository - {data.public_repos}
          <br/>
          {/* <br /> */}
          Github Followers - {data.followers}
    </div>
  )
}
// import { Form } from 'react-router-dom'

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Saman2503')
    return res.json()
}
