import { Container, Row } from "react-bootstrap";

function DonationPage() {
    return (
        <Container>
            <Row>

                <p>
                <b><h3>Donation statement</h3></b>

                Please consider donating to the Polish Club at UT. Any donation is greatly appreciated. The Polish Club is a non-profit and relies on outside funding to keep the club running. Thank you very much for your support and generosity.
                </p>
                <h3>How to donate:</h3>
                <p>Payments can be made using PayPal. If you do not have a PayPal account, you can make a payment using a debit/credit card through the PayPal link as well. We are asking donors to please enter their names and email addresses in the "comment" section of their PayPal payment so the club can properly express its gratitude. Anonymous donations are also acceptable. Alternatively, checks can be made out to the "Polish Club at UT" and mailed to:
                <br/>
                Polish Club at UT
                <br/>
                c/o Department of Slavic and Eurasian Studies
                <br/>
                2505 University Avenue, Stop F3600
                <br/>
                Burdine Hall 452
                <br/>
                Austin, TX 78712</p>
            </Row>
            <Row>
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="G8TUX8SPHFSA6" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </Row>
        </Container>
    );
}

export default DonationPage;