import { useContext } from 'react';
import { NavClickContext } from '../mainComponents/TotalContent';

function Heading(props) {
  const category = useContext(NavClickContext);
  return (
    <h1
      onClick={() => {
        category('');
      }}
    >
      {props.children}
    </h1>
  );
}

export default Heading;
