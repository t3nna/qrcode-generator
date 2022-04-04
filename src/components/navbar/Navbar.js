import {ReactComponent as BellIcon} from '../../icons/bell.svg';
import {ReactComponent as MessengerIcon} from '../../icons/messenger.svg';
import {ReactComponent as CaretIcon} from '../../icons/caret.svg';
import {ReactComponent as PlusIcon} from '../../icons/plus.svg';
import {ReactComponent as CogIcon} from '../../icons/cog.svg';
import {ReactComponent as ChevronIcon} from '../../icons/chevron.svg';
import {ReactComponent as ArrowIcon} from '../../icons/arrow.svg';
import {ReactComponent as BoltIcon} from '../../icons/bolt.svg';
import {ReactComponent as ClosedBurger} from "../../icons/burger-closed.svg";


import React, {useEffect, useRef, useState} from "react";
import '../../styles/navbar.scss'
import {CSSTransition} from "react-transition-group";
import NavItem from "./NavItem";
import ColorPicker from "../colorPicker/ColorPicker";
import Dropdown from "../dropdown/Dropdown";
import ColorPalette from "../colorPalette/ColorPalette";
import Background from "../Background";
import Foreground from "../Foreground";


export default function Navbar() {
    const [burger, setBurger] = useState(false)

    const [background, setBackground] = useState('#fff')

    const handleChangeComplete = color =>{
        setBackground(color.hex)
        // console.log(color.hex)
    }






    return (
        <header className={'header'}>
            <nav className={burger? "nav active" : 'nav'}>
                <div className="nav-content">
                    <ul className="initial-nav">

                        <li className="logo">
                            QrCode
                        </li>
                        <li className={burger? "burger-button open" : 'burger-button'} onClick={()=>setBurger(!burger)}>
                            <div className={burger? "menu-btn open" : 'menu-btn'}>
                                <div className="menu-btn__burger"/>
                            </div>
                        </li>

                    </ul>
                    <ul className={burger? "properties scroll": "properties"}>
                        <li className="properties-item-container">
                            <Dropdown title={'Background'}>
                                <Background/>
                            </Dropdown>
                        </li>
                        <li className="properties-item-container">
                            <Dropdown title={'Foreground'}>
                                <Foreground/>
                            </Dropdown>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}


function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{height: menuHeight}} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon/>}
                        // rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        // rightIcon={<ChevronIcon />}
                        goToMenu="animals">
                        Animals
                    </DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon/>}>
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon/>}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon/>}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon/>}>JavaScript</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon/>}>Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon/>}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}