import Link from "next/link";
import {useCookies} from "react-cookie";
import React from "react";
import {parseJwt} from "../../helpers/jwt";
import Router from "next/router";
import Notification from "./Notification";

const Header = () => {

    const [cookies,, removeCookie] = useCookies(['jwt']);
    let userName : string | null = null;
    if (cookies.jwt) {
        const data = parseJwt(cookies.jwt);
        userName = data.fullName;
    }

    async function logout(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        removeCookie('jwt', {path: '/'});
        await Router.push('/');
    }

    return <>
        <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
            <div className="container-fluid">
                <Link href={"/"}>
                    <a className="navbar-brand" data-testID="brand_nav" href={"/"}>Skyground CRM</a>
                </Link>
                <ul className={'navbar-nav me-auto mb-2'}>
                    <li className={'nav-item'}>
                        <Link href={"/"}>
                            <a className={'nav-link'} data-testID="home-nav">Home</a>
                        </Link>
                    </li>
                    {userName === null &&
                        <li className={'nav-item'}>
                            <Link href={"/auth/login"}>
                                <a className={'nav-link'} data-testID="login-nav">Login</a>
                            </Link>
                        </li>
                    }
                    {userName === null &&
                        <li className={'nav-item'}>
                            <Link href={"/auth/register"}>
                                <a className={'nav-link'} data-testID="register-nav">Register</a>
                            </Link>
                        </li>
                    }
                </ul>
            </div>
            {userName && <div className={"welcome"} data-testID="welcome-message">Welcome <b>{userName}</b>, to logout click <a onClick={e => logout(e)} href="/logout" data-testID="logout">here</a></div>}
        </nav>
        <Notification/>
    </>
}

export default Header;
