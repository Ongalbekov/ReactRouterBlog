import {Link} from 'react-router-dom';
const Home = () => {
        return (   
        <div className='home'>
        <div className="imgHome">
        </div>
        <div className='textHome'> 
        <h2>Welcome to my <br /> simple Blog</h2>
                <Link to='/Blog'>Go to articles</Link>
        </div>
        </div>
       
         );
}
 
export default Home;