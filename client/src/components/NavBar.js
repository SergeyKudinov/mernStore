import React, { useContext } from "react";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
            {user.isAuth ?
                <Container>
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button variant={"outline-light"} className="ml-4">Войти</Button>
                    </Nav>
                </Container>
                :
                <Container>
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onclick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                </Container>
            }
        </Navbar>
    );
});

export default NavBar;