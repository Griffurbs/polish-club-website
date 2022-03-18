import { ListGroup } from "react-bootstrap";

function RecipeItem(props) {
    return (
        <ListGroup.Item variant="secondary">
            <a href={props.google}>{props.url}</a>
        </ListGroup.Item>
    );
}

export default RecipeItem;