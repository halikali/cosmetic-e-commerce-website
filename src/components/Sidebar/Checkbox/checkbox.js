import "./Checkbox.scss";

const checkbox = ({ name }) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input type={"checkbox"} className="checkbox__input" />
        {name}
      </label>
    </div>
  );
};

export default checkbox;
