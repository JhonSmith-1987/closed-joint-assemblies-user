import {JSX, useEffect, useState} from "react";
import {LoginStyled} from "./LoginStyled";
import {SubmitHandler, useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {IFormLogin, ISession} from "../../Utils/Constants/constantSession";




export interface IUserProps {
    title?:string;
    setSessionHome: (validation:string|null) => void;
}

export default function Login({title,setSessionHome}:IUserProps):JSX.Element {

    const loggerUser:IFormLogin = {
        "email": "john@gmail.com",
        "password": "123456",
        "token": "sskfjkljgas4654fsdga465gf541sfdg654"
    }
    const history = useHistory();

    const [message, setMessage] = useState<string>('');


    const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>();

    const onSubmit: SubmitHandler<IFormLogin> = data => login(data);


    function login(data: IFormLogin) {
        if (loggerUser.email !== data.email) {
            setMessage('Email incorrecto...');
        }if (loggerUser.password !== data.password) {
            setMessage('Password incorrecto...');
        }else {
            sessionStorage.setItem("sessionStorage", "ok");
            setSessionHome(sessionStorage.getItem('sessionStorage'));
            history.push('/home');
        }
    }

    useEffect(() => {
        setSessionHome(sessionStorage.getItem('sessionStorage'));
    },[]);

    return (
        <LoginStyled>
            <div className="content-form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="content-login">
                        <label>Email</label>
                        <input
                            {...register("email", {required: "Email es requerido"})}
                            aria-invalid={errors.email ? "true" : "false"}
                            type="email"
                            autoFocus
                            required
                        />
                        {errors.email?.type === 'required' && <span className="error" role="alert">{errors.email?.message}</span>}
                    </div>
                    <div className="content-login">
                        <label>Password</label>
                        <input
                            {...register("password", {required: "Contraseña requerida"})}
                            aria-invalid={errors.password ? "true" : "false"}
                            type="password"
                            required
                        />
                        {errors.password?.type === 'required' && <span className="error" role="alert">{errors.password?.message}</span>}
                    </div>
                    <input type="submit" value="Ingresar"/>
                </form>
                <span className="error" role="alert">{message}</span>
            </div>
        </LoginStyled>
    );
}