import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar className="bg-red" variant="dark">
                <Container>
                    <div className="float-left">
                        <Link to="/" className="text-white ms-3 text-decoration-none">🏠 Home</Link>
                        <Link to="/contacto" className="text-white ms-3 text-decoration-none">📔 Contacto</Link>
                    </div>
                    <Navbar.Brand className="float-right">Happy Cake 🍰</Navbar.Brand>
                </Container>



            </Navbar>
        </>
    );
}
