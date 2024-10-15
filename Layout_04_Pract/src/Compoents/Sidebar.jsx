import Home from './Home.jsx'
import AboutUs from './AboutUs.jsx'
function Sidebar({loadPage}) {
    return(
        <>
        <div className='sidebar'>
            <button onClick={loadPage} id='Home'>Home</button>
            <button onClick={loadPage} id='AboutUs'>About Us</button>
            </div>
        </>
    )
}

export default Sidebar