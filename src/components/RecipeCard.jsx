import React from "react";

import './RecipeCard.css'
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };
  return (
    <div className='recipe_card'>
      <div>
        <div className='recipe_img_container'>
          <img src={recipe.image_url} />
          {/* <img src="https://www.atablefullofjoy.com/wp-content/uploads/2020/02/German-Chocolate-Cake-Recipe-SQUARE.jpg" /> */}
        </div>
        <h3>{recipe.recipe_name}</h3>
      </div>
      <button className="blue-btn" onClick={handleClick}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
