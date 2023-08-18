import { NavLink } from "react-router-dom"

const NavBar = ()=>{
    const activeStyles = "underline underline-offset-4 text-gray-600 font-semibold text-yellow"
    const classLi = ({isActive})=> isActive ? activeStyles : 'font-semibold hover:text-yellow'
    return(
        <nav className='z-40 w-full fixed top-0 py-6'>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="text-3xl font-bold font-playfair">Rubio</h4>

                <ul className='flex items-center gap-3 font-opensans'>
                    <li><NavLink to='/' className={classLi}>Home</NavLink></li>
                    <li><NavLink to='/education' className={classLi}>Education</NavLink></li>
                    <li><NavLink to='/projects' className={classLi}>Projects</NavLink>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export { NavBar }