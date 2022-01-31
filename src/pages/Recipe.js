import { Container, ListGroup } from "react-bootstrap";

import RecipeItem from "../components/recipe/RecipeItem";

function RecipePage() {
    return (
        <Container>
            <h2 className="text-center">Check out our list of family recipes!</h2>
            <ListGroup>
                <RecipeItem url="Bigos_Staropolski_Teresa_Grabiec_Silverstein.pdf"/>
                <RecipeItem url="Isabella Hardej’s Chruściki Recipe.docx"/>
                <RecipeItem url="Julia Benginow's Mother's Paczki Recipe.docx"/>
                <RecipeItem url="Karolina Sydor's Morther's Zapiekanki Recipe.docx"/>
                <RecipeItem url="Pani_Bernadeta_Kamiska_Szarlotka_Recipe.docx"/>
                <RecipeItem url="POLISH CHEESECAKE WITH CHOCOLATE BASE AND TOP.pdf"/>
                <RecipeItem url="Polish_Honey_Cake_Teresa_Grabiec_Silverstein.pdf"/>
                <RecipeItem url="Ruskie_Pierogi_Recipe_TGS.pdf"/>
                <RecipeItem url="Teresa_Grabiec_Silverstein_Szarlotka_Recipe.pdf"/>
                <RecipeItem url="WAFEL PSISZINGER.docx"/>
            </ListGroup>
        </Container>
    );
}

export default RecipePage;