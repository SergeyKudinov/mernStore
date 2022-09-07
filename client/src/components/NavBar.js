import React, { useContext } from "react";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {

    const history = useNavigate();
    const { user } = useContext(Context);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
            {user.isAuth ?
                <Container>
                    <Nav
                        className="me-auto"
                        style={{ color: 'white' }}
                    >
                        <Button
                            variant={"outline-light"}
                            onClick={() => history(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            className="me-4"
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                </Container>
                :
                <Container>
                    <Nav
                        className="me-auto"
                        style={{ color: 'white' }}
                    >
                        <Button
                            variant={"outline-light"}
                            onClick={() => history(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                </Container>
            }
        </Navbar>
    );
});

export default NavBar;