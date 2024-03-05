import { useEffect } from 'react'
import './Home.css'
// import profileImg from './assets/profile.jpg'
import profileImg from './assets/pic1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
const Home = () =>{
    var greetings ="";
    

    // useEffect(()=>{
        const currDate = new Date()
        const currTime = currDate.getHours();
        greetings = (currTime < 12)? "Good Morning":(currTime <= 17)? "Good Afternoon": "Good Evening";

    // },[])

    
    return (
        <>
        <div className="homeContainer">

            <div className="profileimgContainer">
                <img src={profileImg} alt="portfolio image"  className='profileImg'/>
               
            </div>
            <div className="homeTextContainer">
                    <span className="greetings">{greetings},</span>
                    <div className='nameContainer'>
                        <div>I am</div>
                     <div className='name'>Preethi&nbsp;Mathavan</div></div>
                </div>
            <div className="nextPageButton"><FontAwesomeIcon icon={faAngleDoubleDown} /></div>

        </div>


       
        </>
    )

}

export default Home