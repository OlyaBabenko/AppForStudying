import React, {FC} from "react";
import image from "../../assets/image/header-logo.png";
import style from "./Header.module.scss";

const Header = () => {
    return (
        <div className={style.header}>
            <img src={image} alt="Logo" className={style.image}/>
        </div>
    )
}

export default Header;