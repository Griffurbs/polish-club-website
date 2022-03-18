import { Container, ListGroup } from "react-bootstrap";

import RecipeItem from "../components/recipe/RecipeItem";

function RecipePage() {
    return (
        <Container>
            <h2 className="text-center">Check out our list of family recipes!</h2>
            <ListGroup>
                <RecipeItem url="Bigos_Staropolski_Teresa_Grabiec_Silverstein.pdf" google="https://drive.google.com/file/d/17RiIMDc75xRzGp8-TznjCNjlHqF2pai_/view?usp=sharing"/>
                <RecipeItem url="Isabella Hardej’s Chruściki Recipe.docx" google="https://docs.google.com/document/d/1tPTp2LkoYys9VFc7XtnA8IF3ar5rYQQO/edit?usp=sharing&ouid=114077085495812700774&rtpof=true&sd=true"/>
                <RecipeItem url="Julia Benginow's Mother's Paczki Recipe.docx" google="https://docs.google.com/document/d/1GAZTBRohjT2o1UzIyte1au08yyNZfuhd/edit?usp=sharing&ouid=114077085495812700774&rtpof=true&sd=true"/>
                <RecipeItem url="Karolina Sydor's Morther's Zapiekanki Recipe.docx" google="https://docs.google.com/document/d/1FFnYz0XGjSwwjdee5gfSAWFXRs7zLXFV/edit?usp=sharing&ouid=114077085495812700774&rtpof=true&sd=true"/>
                <RecipeItem url="Pani_Bernadeta_Kamiska_Szarlotka_Recipe.docx" google="https://docs.google.com/document/d/1Z8wDxKg-Oghk6MraMTPF9VpUFXfkwvfj/edit?usp=sharing&ouid=114077085495812700774&rtpof=true&sd=true"/>
                <RecipeItem url="POLISH CHEESECAKE WITH CHOCOLATE BASE AND TOP.pdf" google="https://drive.google.com/file/d/1hWE2Itymxe7-HfwLV6Z1cgkWDj48ifG1/view?usp=sharing"/>
                <RecipeItem url="Polish_Honey_Cake_Teresa_Grabiec_Silverstein.pdf" google="https://drive.google.com/file/d/1qMolgV_r0aoqtGei5U2ncb6iHWy-6wcd/view?usp=sharing"/>
                <RecipeItem url="Ruskie_Pierogi_Recipe_TGS.pdf" google="https://drive.google.com/file/d/1BAId4lI3LoXtpeJ0K799BVWGSH2pwfnQ/view?usp=sharing"/>
                <RecipeItem url="Teresa_Grabiec_Silverstein_Szarlotka_Recipe.pdf" google="https://drive.google.com/file/d/1OSm-cUTQfpcuEVsAvcPspgD_6DbDbM6W/view?usp=sharing"/>
                <RecipeItem url="WAFEL PSISZINGER.docx" google="https://docs.google.com/document/d/1lQLDQfkHXnIm7MtcyQfIUvQCJebY39G9/edit?usp=sharing&ouid=114077085495812700774&rtpof=true&sd=true"/>
            </ListGroup>
        </Container>
    );
}

export default RecipePage;