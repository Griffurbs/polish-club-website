import { Container } from "react-bootstrap";
import '../App.css'

var book_imgs = [
    {
        key: 0,
        img: "IMG_6468.jpg"
    },
    {
        key: 0,
        img: "IMG_6469.jpg"
    },
    {
        key: 0,
        img: "IMG_6470.jpg"
    },
    {
        key: 0,
        img: "IMG_6471.jpg"
    },
    {
        key: 0,
        img: "IMG_6472.jpg"
    },
    {
        key: 0,
        img: "IMG_6473.jpg"
    },
    {
        key: 0,
        img: "IMG_6474.jpg"
    },
    {
        key: 0,
        img: "IMG_6475.jpg"
    },
    {
        key: 0,
        img: "IMG_6476.jpg"
    },
    {
        key: 0,
        img: "IMG_6477.jpg"
    },
    {
        key: 0,
        img: "IMG_6478.jpg"
    },
    {
        key: 0,
        img: "IMG_6479.jpg"
    },
    {
        key: 0,
        img: "IMG_6480.jpg"
    },
    {
        key: 0,
        img: "IMG_6481.jpg"
    },
    {
        key: 0,
        img: "IMG_6482.jpg"
    },
    {
        key: 0,
        img: "IMG_6483.jpg"
    },
    {
        key: 0,
        img: "IMG_6484.jpg"
    },
    {
        key: 0,
        img: "IMG_6485.jpg"
    },
    {
        key: 0,
        img: "IMG_6486.jpg"
    },
    {
        key: 0,
        img: "IMG_6487.jpg"
    },
    {
        key: 0,
        img: "IMG_6488.jpg"
    },
]

function BooksPage(){
    return (
        <Container>
            <p>All these books are owned by the Polish Club at UT and are available to be checked out by members at any time. No member may check out more than three books at any one time. Book rentals last until the end of the semester. After that, they must be returned to the Polish Club. Failure to do so will result in being charged the price of the book. Please let us know which book(s) you would like to check out by emailing us at TexasPolishClub@gmail.com
            <br /><br />
            All these books were gifted to the Polish Club by Consul General Robert Rusiecki of the Polish Consulate in Houston. We thank the Consul General and the Houston Consulate for their generosity.</p>
            <div className="books m-auto">
                {book_imgs.map((book) => 
                    <div className="m-auto">
                        <img src={"/books/" + book.img} className="row text-center m-auto img-fluid" alt="book"/>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default BooksPage;