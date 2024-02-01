import PropTypes from "prop-types";

import styles from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <div className={styles.item}>
      <h3>{props.name}</h3>
      <p style={{ fontWeight: "bold" }}>Rp {props.price}</p>
      <p>{props.description}</p>
    </div>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default ListItem;
