import React, { useState } from "react";
import styled from "styled-components";
import Logo from '../Logo';
import Busca from "../Busca";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Drawer } from "@material-ui/core";
import { ProfileSideBar } from "../../../pages";


const NavBar = styled.div`
    background-color: #308BC5;
    width: 100%;
    padding: 4px 16px;
    position: sticky;
    display: flex;
    justify-content: space-between;

    .desktop {
        display: none;
    }

    .nav-mobile {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    .pesquisa {
        display: flex;
        align-items: center;
    }

    .lista {
        display: none;
    }

    @media (min-width: 860px){
        padding: 0.5rem 1vw;
        justify-content: space-between;
        .hamburger {
            display: none;
        }
        .desktop {
            display: flex;
            align-items: center;
        }
        .nav-mobile {
            display: flex;
            justify-content: initial;
            align-items: center;
        }
        .lista {
            display: flex;
            color: white;
            list-style-type: none;
            font-size: 14px;
            margin-left: 1rem;
        }
        .lista-items {
            margin-right: 32px;
        }
        .lista-items:first-child {
            font-weight: 700;
        }
        .email {
            color: #2F4A71;
            font-weight: 700;
        }

    }
    @media (min-width: 1130px){
        padding: 0.5rem 10vw;
    }
`;

const Nav = ({usuario}) => {
    const [state, setState] = useState({
        right: false
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <NavBar>
            <div className="nav-mobile">
            <Logo>Orkut</Logo>
            <MenuIcon
            className="hamburger"
            fontSize="large"
            style={{ color: 'white' }}
            onClick={toggleDrawer('right', true)}
            />
            <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            <ProfileSideBar usuario={usuario}/>
            </Drawer>
            {/* lista no desktop */}
            <ul className="lista">
                <li className="lista-items">Perfil</li>
                <li className="lista-items">Amigos</li>
                <li className="lista-items">Comunidades</li>
            </ul>
            </div>
            {/* responsivo */}
            <div className="desktop">
            <p className="email">{usuario.email}</p>
            <p style={{ color: 'white', marginLeft: '1rem', marginRight: '1rem' }}>Sair</p>
            <div className="pesquisa">
                <SearchIcon style={{ color: 'white', position: 'absolute', marginLeft: '0.5rem' }}/>
                <Busca placeholder="Pesquisar no Orkut"/>
            </div>
            </div>
        </NavBar>
    );
}

export default Nav;