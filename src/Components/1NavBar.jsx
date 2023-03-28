import React, { useState } from 'react';
// import { Link ,NavLink } from 'react-router-dom';
import './1NavBar.css';


const NavBar = () => {

    const [active, setActive] = useState('الرئيسية');
    const [menuactive, setMenuActive] = useState('NavBar_SideMenu');
    const [togglerIcon, setTogglerIcon] = useState('Toggler');

    const activate = (choice) => {
        setActive(choice);
    };

    const ToggleMenu =()=>{
        menuactive ==='NavBar_SideMenu' ? setMenuActive("NavBar_SideMenu nav_active") : setMenuActive("NavBar_SideMenu"); 
        togglerIcon==='Toggler' ? setTogglerIcon('Toggler toggle') : setTogglerIcon('Toggler');
    }


    return (
        <> 
        <nav className='NavBar'>

            <ul className={menuactive}>
                <li >
                    <button className='LangBtn' href="#">ENG</button>
                </li>
                <li>
                    <a href="#">تسجيل الدخول</a>
                </li>
                <li className='trackShipment'>
                    <a  href="#">تتبع شحنتتك</a>
                </li>
                <li>
                    <a className={active === 'كلم المبيعات' ? 'active' : ''} onClick={() => activate('كلم المبيعات')} href="#">كلم المبيعات</a>
                </li>
                <li>
                    <a className={active === 'الاسعار' ? 'active' : ''} onClick={() => activate('الاسعار')} href="#">الاسعار</a>
                </li>
                <li>
                    <a className={active === 'الرئيسية' ? 'active' : ''} onClick={() => activate('الرئيسية')} href="#">الرئيسية</a>
                </li>
            </ul>
            
            <div className="brandContainer" > 
                <div className={togglerIcon} onClick={ToggleMenu}>
                    <div className='line1' ></div>
                    <div className='line2' ></div>
                    <div className='line3' ></div>
                </div>   
                <a  href="https://bosta.co/"> 
                    <img className="bostaLogo" src='bostaLogo.png'/> 
                </a>
            </div>

        </nav> 
        </>
    );
};

export default NavBar;