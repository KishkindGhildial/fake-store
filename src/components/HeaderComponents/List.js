import ListItem from './ListItem';

function List(props) {
  const contents = props.contents;
  const listItems = contents.map(content => (
    <ListItem key={content.toString()} value={content} />
  ));
  return <ul>{listItems}</ul>;
}

export default List;
