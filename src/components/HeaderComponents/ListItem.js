import { NavClickContext } from '../mainComponents/TotalContent';
import { useContext } from 'react';

function ListItem(props) {
  const category = useContext(NavClickContext);
  return (
    <li
      onClick={() => {
        category(`/category/${props.value.toLowerCase()}`);
      }}
    >
      {props.value}
    </li>
  );
}

export default ListItem;
