import React from 'react'
import Container from '../ui/container'
import './header1.css'
import {Link} from 'react-router-dom'

const Header = () =>{
    return (
        <header className="header">
            <Container>
                <div className="nav-content">
                    <img src={`${process.env.PUBLIC_URL}/images/first_screen/logo_firstscreen.png`} alt="logo FloraMind" className="logo" />
                    <nav className="nav">
                         <Link to='/' className="header-link">О нас</Link>
                        <Link to='/' className="header-link">Галерея</Link>
                        <Link to='/' className="header-link">Отзывы</Link>
                        <Link to='/' className="header-link">FloraAi</Link>
                    </nav>
                    <div className="auth_links">
                        <Link to='/' className="header-link">Вход</Link>
                        <p>|</p>
                        <Link to='/' className="header-link">Регистрация</Link>
                    </div>
                </div>
            </Container>
        </header>
    );

}

export default Header