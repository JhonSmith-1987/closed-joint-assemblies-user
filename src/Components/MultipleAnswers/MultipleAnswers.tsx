import {JSX, useEffect} from "react";
import {NavStyled} from "./NavStyled";
import {Link} from "react-router-dom";


export interface INavProps {
    title?: string;
}

export default function Nav({}: INavProps): JSX.Element {


    useEffect(() => {

    }, []);

    return (
        <NavStyled>
            <h3>Nombre del usuario</h3>
            <div className="containt-button">
                <h4>Acciones</h4>
                <Link className="button" to="/home/survey">
                    Encuesta
                </Link>
                <Link className="button" to="/home/segunda">
                    Quorum mora
                </Link>
                <Link className="button" to="/home/tres">
                    Bloquear asistencia
                </Link>
                <Link className="button" to="/home/cuatro">
                    Link - codigo QR
                </Link>
                <Link className="button" to="/home/cinco">
                    Sorteo
                </Link>
                <div className="button-logout-mobile">
                    Finalizar asamblea
                </div>
            </div>
        </NavStyled>
    );
}