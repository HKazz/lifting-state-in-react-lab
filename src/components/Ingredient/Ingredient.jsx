const Ingredient = ({ name, color, onClick, buttonLabel }) => {
  return (
    <li className="ingredient-item" style={{ backgroundColor: color }}>
      <span className="ingredient-name">{name}</span>
      <button className="ingredient-button" onClick={onClick}>{buttonLabel}</button>
    </li>
  );
};

export default Ingredient;