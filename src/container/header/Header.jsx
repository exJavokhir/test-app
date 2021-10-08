import Navbar from "../../components/navbar/navbar"

const Header = ({setActive, active})=>{
    return (
        <Navbar
            setActive={setActive}
            active={active}
        />
    )
}

export default Header