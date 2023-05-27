import {JSX} from "react";
import {LoginStyled} from "./LoginStyled";


export interface IUserProps {
    title?:string;
}

export default function Login({title}:IUserProps):JSX.Element {
    return (
        <LoginStyled>

        </LoginStyled>
    );
}