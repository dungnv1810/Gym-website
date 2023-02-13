import React, {useRef, useEffect} from "react";
import logo from "../../assets/img/dumble.png"
import "../../Styles/header.css";

const nav__link = [
    {
        id: 1,
        path: '#home',
        display: 'Home'
    },
    {
        id: 2,
        path: '#schedule',
        display: 'Schedule'
    },
    {
        id: 3,
        path: '#classes',
        display: 'Classes'
    },
    {
        id: 4,
        path: '#prising',
        display: 'Prising'
    },
]
const Header = () => {
    const headerRef = useRef(null)
    const headerfunc = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('sticky__header')
        }else{
            headerRef.current.classList.remove('sticky__header')

        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', headerfunc)
        return () => window.removeEventListener('scroll',headerfunc )
    },[])
    const handleOnlick = (e) => {
        e.preventDefault()
        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop
        window.scrollTo({
            left:0,
            top:location - 80
        })
    }
    return(
        <header className="header" ref={headerRef} >
            <div className="container">
                <div className="nav_wrapper">
                    {/* ==== logo ==== */}
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt=''/>
                        </div>
                        <h2>FitBody</h2>
                    </div>
                    {/* === navigation === */}
                    <div className="navigation">
                        <ul className="menu">
                            {
                                nav__link.map((item, array, index) => {
                                    return(
                                        <li className="nav__item" key={item.id}>
                                            <a onClick={handleOnlick} href={item.path}>{item.display}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* ==== nav right ==== */}
                    <div className="nav__right">
                        <button className="register__btn">Register</button>
                        <span className="mobile__menu">
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;