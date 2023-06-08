import { NavLink } from "react-router-dom"

const NavBar = ()=>{
    const activeStyles = 'underline underline-offset-4'
    const classLi = ({isActive})=> isActive ? activeStyles : undefined
    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'><NavLink to='/'>Rubio</NavLink></li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li><NavLink to='/' className={classLi}>Home</NavLink></li>
                <li><NavLink to='/education' className={classLi}>Education</NavLink></li>
                <li><NavLink to='/projects' className={classLi}>Projects</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { NavBar }