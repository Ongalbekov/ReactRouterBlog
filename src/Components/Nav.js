import{Link} from 'react-router-dom';
const Nav = () => {
        return ( 
                <nav>
                        <h1> My Life</h1>
                        <ul>
                                <li> <Link to='/'>Home</Link></li>
                               <li><Link to='/Blog'>Blog</Link></li>
                        </ul>
                </nav>
         );
}
 
export default Nav;