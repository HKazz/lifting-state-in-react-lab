import Ingredient from '../Ingredient/Ingredient';

const IngredientList = (props) => {
  return (
    <div className="ingredient-list">
      <h2 className="title">Available Ingredients</h2>
      <ul className="ingredient-list-items">
        {props.ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            name={ingredient.name}
            color={ingredient.color}
            onClick={() => props.onAdd(ingredient)}
            buttonLabel="+"
          />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
