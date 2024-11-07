import React from 'react';
import UseFetch from '../useFetch/UseFetch';
import WindowResize from '../WindowResize';
const Recipe = () => {
  
  const { data, loading } = UseFetch('https://dummyjson.com/recipes');
  const windowSize = WindowResize()
  console.log(data);
  if(loading) return <h2>Fetching recipes list Please wait</h2>

  return (
    <>
    <h2>Recipe</h2>
    <p>Current window width is {windowSize.width} and current window height is {windowSize.height}</p>
    {data?.recipes?.length > 0 ? (
      data.recipes.map((recipeItem, index) => (
        <div key={index}>
          <img src={recipeItem.image} alt={recipeItem.name} style={{width:"100px",height:"100px"}}/>
          <label>{recipeItem.name}</label>
        </div>
      ))
    ) : (
      <p>No recipes available.</p>
    )}
  </>
  
  );
};

export default Recipe;
