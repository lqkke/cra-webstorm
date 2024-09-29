import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";
import {SuperButton} from "./components/Button.styled";
import {Menu} from "./components/Menu.styled";
import {myTheme} from "./styles/Theme.styled";


function App() {
    return ( //jsx js like html
        <div>
            <Menu>
                <ul>
                    <li><a href="#">menu-item1</a></li>
                    <li><a href="#">menu-item2</a></li>
                    <li><a href="#">menu-item3</a></li>
                </ul>
            </Menu>

            this is APP component(компонент функция, объявленная с большой буквы, содержщая в себе jsx)
            <Box>
                {/*<StyledBtn color={'blue'} fontSize={'20px'}> btn </StyledBtn>*/}
                <StyledBtn primary color={myTheme.colors.primary}> "hello2" </StyledBtn>
                <StyledBtn outlined> "hello2" </StyledBtn>

                {/*<SuperButton>super-0</SuperButton>*/}
                {/*<SuperButton>super-1</SuperButton>*/}
                {/*<SuperButton>super-2</SuperButton>*/}
            </Box>
            <Rating value={3}/>
            <Accordion titleValue={'меню'} collapsed={true}/>
            <Accordion titleValue={'users'} collapsed={false}/>
            <Rating value={4}/>
        </div>
    );
}


export default App;

const Box =styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    button {
        cursor: pointer;
    }
    
    ${StyledBtn} {
        cursor: zoom-in;
    }
    
    @media ${myTheme.media.tablet} {
        flex-direction: column;
    }
`
