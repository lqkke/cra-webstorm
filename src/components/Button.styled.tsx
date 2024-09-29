import styled from "styled-components";
import {MyAnimations} from "../styles/animations/Animations";
import {css} from "styled-components";

type StyledBtnPropsType = {
    fontSize?: string
    color?: string
    primary?: boolean
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    //background-color: ${props => props.color || 'red'};
    padding: 10px 20px;
    //color: snow;
    font-size: ${props => props.fontSize};
    font-weight: bold;
    
    //&:last-child {
    //    background-color: black;
    //}
    
    ${props => props.primary && css<StyledBtnPropsType>`
        //primary
        background-color: ${props => props.color || 'red'};
        color: snow;
    `}
    
    ${props => props.outlined && css<StyledBtnPropsType>`
        //outlined
        border: 2px solid ${props => props.color || 'red'};
        color: ${props => props.color || 'red'};
        background-color: transparent;
    `}
    
    
    
    
`


export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: green;

    &:hover {
        background-color: blueviolet;
        animation: ${MyAnimations} 2s ease-in-out infinite;
        
    }
`
