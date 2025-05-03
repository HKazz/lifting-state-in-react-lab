import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = (props) => {
  return (
    <div className="burger-stack">
      <h2 className="title">Your Burger</h2>
      {props.ingredients.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        <ul className="burger-stack-items">
          {props.ingredients.map((ingredient, index) => (
            <Ingredient
              key={index}
              name={ingredient.name}
              color={ingredient.color}
              onClick={() => props.onRemove(index)}
              buttonLabel="X"
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BurgerStack;
