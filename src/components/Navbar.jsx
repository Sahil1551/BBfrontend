import React,{useEffect} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button}  from "@nextui-org/react";
import '../index.css'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import Logo from '/Logo.png'

export default function App() {
  const navigate=useNavigate();
    const [user,setUser]=React.useState(null)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const accesstoken=localStorage.getItem('accesstoken')
    
      
    useEffect(()=>{
      const fetchUser=async()=>{
        if(accesstoken){
        try{
          const response=await axios.get('https://b-bbackend.vercel.app/user/info',{
            headers: { Authorization: `Bearer ${accesstoken}` }
          })
          setUser(response.data)
        }
        catch(err){
          console.error(err);
        }
      }
      }
      fetchUser();
    },[accesstoken])
    
  
  const handleLogout=async()=>{
    localStorage.removeItem('accesstoken')
    setUser(null)
    navigate('/');

  }
    const menuItems = [
      "Home",
      "Catalog",
      "About Us",
      "Special Offers",
      "Review",
      "Contact Us",
      "Log Out",
    ];
    return (
        <Navbar className="shadow-lg" shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <img src={Logo} width='40px' alt="" />
              <p className="font-bold text-inherit dancing-script-regular text-2xl">Bliss Bakerss</p>
            </NavbarBrand>
          </NavbarContent>
    
          <NavbarContent className="hidden sm:flex gap-6" justify="center">
            <NavbarItem>
              <Link to="/" className="relative text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full" >
              Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to='/Catalog' className ="relative text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full" href="#">
              Catalog
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to='/About' className="relative text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full" href="#">
              About Us
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link to='Reviews' className="relative text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full" href="#">
              Review
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to='ContactUs' className="relative text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full" href="#">
              Contact Us
              </Link>
            </NavbarItem>
            
            </NavbarContent>
            <NavbarContent justify="end">
        {user ? (
          <Button onClick={handleLogout} color="danger" variant="flat">
            Log Out
          </Button>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link to='/Login'>Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" to='/Signin' variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>  <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2 ? "foreground" : index === menuItems.length - 1 ? "danger" : "foreground"
                  }
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>)
}
