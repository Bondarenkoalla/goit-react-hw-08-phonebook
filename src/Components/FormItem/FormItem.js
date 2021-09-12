import PropTypes from "prop-types";

const FormItem = ({ name, id, number, deleteItem }) => {
  return (
    <>
      <li key={id}>
        <p>
          {name}: {number}
        </p>
      </li>
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </>
  );
};
export default FormItem;
FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
