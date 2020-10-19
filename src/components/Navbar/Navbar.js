import React,{useState,useEffect} from 'react'
import { FaBars,FaTimes } from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,NavItem,NavLinks,NavItemBtn,NavBtnLink} from './Navbar.element'
import {Button} from '../../globalStyle'
import {IconContext} from 'react-icons/lib'

function Navbar() {
    const [click,setClick] = useState(false)
    const [button,setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }

    }

    useEffect(()=>{
        showButton();
    },[])
    window.addEventListener('resize',showButton);  
      return (
        <>
        <IconContext.Provider value = {{color:'#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={closeMobileMenu}>
                    <NavIcon/>
                    Ultra
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes />: <FaBars/>}
                </MobileIcon>
                <NavMenu onClick={handleClick} click ={click}>
                    <NavItem>
                        <NavLinks to="/">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/services">Services</NavLinks>
                    </NavItem>              
                    <NavItem>
                        <NavLinks to="/products">Products</NavLinks>
                    </NavItem>
                    {button ? (
                        <NavBtnLink to ="/sign-up"><Button primary>Sign Up</Button></NavBtnLink>
                    ): (
                        <NavBtnLink to ="/sign-up"><Button fontBig primary>Sign Up</Button></NavBtnLink>

                    )}
                    </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
