import {JSX, useEffect, useState} from "react";
import {HeaderStyled} from "./HeaderStyled";
import {SubmitHandler, useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {IFormLogin, ISession} from "../../Utils/Constants/constantSession";




export interface IUserProps {
    title?:string;
}

export default function Header({}:IUserProps):JSX.Element {


    useEffect(() => {

    },[]);

    return (
        <HeaderStyled>
            <div className="content-img">
                <img src="/image/bosquejo.png"/>
            </div>
            <h4>Nombre Conjunto</h4>
            <span>Asamblea ordinaria virtual, primera convocatoria</span>
            <span>Fecha</span>
            <button>Finalizar asamblea</button>
        </HeaderStyled>
    );
}