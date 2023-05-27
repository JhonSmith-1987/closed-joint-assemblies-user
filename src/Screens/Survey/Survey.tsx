import {JSX, useEffect} from "react";
import {HomeStyled} from "./HomeStyled";
import {ISession} from "../../Utils/Constants/constantSession";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";


export interface IHomeProps {
    title?: string;
    setSessionHome: (validation: string | null) => void;
}

export default function Home({title, setSessionHome}: IHomeProps): JSX.Element {


    useEffect(() => {
        setSessionHome(sessionStorage.getItem("sessionStorage"));
    }, [setSessionHome]);

    return (
        <HomeStyled>
            <Header/>
            <div className="work-space">
                <Nav/>
                <div className="counter-routes">
                    <Switch>
                        <Route path="/home/survey">
                            <PageFirs/>
                        </Route>
                        <Route path="/home/segunda">
                            <PageSecond/>
                        </Route>
                        <Redirect to="/home/primero"/>
                    </Switch>
                </div>
            </div>
        </HomeStyled>
    );
}

function PageFirs() {
    return <h1>esta es la vista primero</h1>;
}
function PageSecond() {
    return <h1>esta es la vista segunda</h1>;
}