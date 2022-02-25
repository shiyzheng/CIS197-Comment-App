import React, { useState, useEffect } from 'react'
import Voter from './Voter'

 
const CreatePost = (myPosts, setMyPosts) => {
  const [userInputName, changeUserInputName] = useState('')
  const [userInputPost, changeUserInputPost] = useState('')

  return (
      <>
      <form onChange = {e => {
        e.preventDefault()
        if (userInputName && userInputPost) {
          e => setMyPosts(myPosts =>[...myPosts, [userInputName, userInputPost, 3]])
        }
        changeUserInputName('')
        changeUserInputPost('')
      }}>
        <input class="input is-success" type="text" name="name" placeholder="Name" onChange={e => changeUserInputName(e.target.value)} />
        <input class="input is-success" type="text" name="post" placeholder="Create a post" onChange={e => changeUserInputPost(e.target.value)} />
        <button class="button is-success">
          Submit
        </button>
      </form>
      <Voter />
      </>
      
    )
  
}

export default CreatePost