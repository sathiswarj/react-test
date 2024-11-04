import React from 'react'
import UseFetch from '../useFetch/UseFetch'

const Comments = () => {
  const { data, loading, error } =  UseFetch('https://dummyjson.com/comments')
  console.log(data);
  if(loading) return <h2>Fetching comments list Please wait</h2>
  return (
    <>
    <h2>Recipe</h2>
    {data?.comments?.length > 0 ? (
      data.comments.map((comment, index) => (
        <div key={index}>
           
          <p>{comment.body}</p>
        </div>
      ))
    ) : (
      <p>No recipes available.</p>
    )}
  </>
  
  )
}

export default Comments