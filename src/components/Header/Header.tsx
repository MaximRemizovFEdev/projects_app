import { NavLink, NavLinkRenderProps } from "react-router-dom";
import "./style.css";

export const Header = () => {
    const getClassNav = ({ isActive, isPending }: NavLinkRenderProps) =>
        isPending ? "pending" : isActive ? "active" : "";

    return (
        <>
            <div className="header-background"></div>
            <div className="header-wrapper">
                <NavLink to="/" className={getClassNav}>Проекты</NavLink>
                <NavLink to="/cv" className={getClassNav}>Анкета</NavLink>
                <NavLink to="/goals" className={getClassNav}>Цели</NavLink>
                <NavLink to="/todos" className={getClassNav}>ToDo</NavLink>
            </div>
        </>
    )
}