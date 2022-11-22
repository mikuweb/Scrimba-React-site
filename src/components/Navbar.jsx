import "../style.css"

export const Navbar = () => {

    return (
        <div className="nav__container">
        <div className="nav__left">
        <img  className="nav__logo" src="../images/react-icon.png" width="40px"/>
         <p>ReactFacts</p>
         </div>

         <p className="nav__right">React Course - Project 1</p>  
        </div>
    )
}