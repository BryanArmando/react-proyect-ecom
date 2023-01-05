import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <>
        <Navstud>        
          <Link className="Link" to="/" >Home</Link>
          <Link className="Link" to="/about" >About</Link>
          <Link className="Link" to="/contact">Contact</Link>        
        </Navstud>
        </>
      );
}
 
export default Navbar;

const Navstud = styled.nav`
img{
    width: 40px;
}
h2{
    font-weight:400;
    color: black;
    span{
        font-weight: bold;
    }
}
padding: .4rem;
background-color: #FFFFFF;
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid rgba(0, 0, 0, 0.5);
border-top: 0;
border-left: 0;
border-right: 0;
margin: 10px;
font-weight: bold;
.Link{
    color: black;
    text-decoration: none;
    margin-right: 4rem;
}
.burguer{
    @media(min-width: 768px){
        display: none;
    }
}
.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    .Link{
        color: black;
        font-size: 2rem;
        display: block;
    }
    @media(min-width:768px){
        position: initial;
        margin: 0;
        .Link{
            font-size: 1rem;
            color: black;
            display: inline;
        }

    }
}
.links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    rigth: 0;
    text-align: center;
    .Link{
        font-size: 2rem;
        margin-top: 1rem;
        color: black;
    }

}
`