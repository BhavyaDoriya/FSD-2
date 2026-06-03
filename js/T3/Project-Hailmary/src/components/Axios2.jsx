import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = "https://randomuser.me/api/"

export default function Axios2() {
    const [post, setPost] = useState(null)
    
    const fuser = () => {
        axios.get(baseURL).then((res) => {
            setPost(res.data.results[0])
        }).catch((err) => {
            console.log(err)
        })
    }
    
    useEffect(() => { fuser() }, [])
    
    if (!post) return <p>Loading...</p>
    
    return (
        <div>
            {/* Added post. prefix to access the properties correctly */}
            <img src={post.picture.large} alt="Random User" />
            <p>Name: {post.name.first} {post.name.last}</p>
            <p>Email: {post.email}</p>
            <button onClick={fuser}>Load new User</button>
        </div>
    )
}