import React from 'react'
import { useNavigate } from 'react-router-dom'
import './button-mainscreen.css'

const Button = ({ text, className, to, type = "button" }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        // Проверяем, является ли ссылка внешней (начинается с http:// или https://)
        if (to && (to.startsWith('http://') || to.startsWith('https://'))) {
            window.open(to, '_blank', 'noopener,noreferrer');
        } else {
            // Иначе используем стандартную навигацию React Router
            navigate(to);
        }
    }

    return (
        <button
            type={type}
            className={className}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}

export default Button