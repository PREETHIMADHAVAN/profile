import './Experience.css';
const Experience = () =>{
    return (
        <div className="myExpContainer">
            <h3 className="expTitle">Experience</h3>
            <ul className="myExpList">
                <li>I am Computer Science Engineering Graduate with <span className='highlight'>4+</span> years of IT experience.</li>
                <li>
                    <div className="skillTextContainer">
                        <div className="skillText">As a Front end Developer worked in </div>
                        <ul className="skills">
                            <li className="skill highlight">HTML</li>
                            <li className="skill highlight">CSS</li>
                            <li className="skill highlight">JS</li>
                            <li className="skill highlight">Bootstrap</li>
                            <li className="skill highlight">Angular Material</li>
                            <li className="skill highlight">PrimeNg</li>
                        </ul>

                    </div>
                
                    
                </li>
                <li><span className='highlight'>Good in debugging skills & problem solving</span> and have been recognized by team leads and managers for being supportive to team members and delivering above and beyond tasks</li>
                <li>Have worked on some challenging UI like <span className='highlight'>Bubble chart with D3.js, Flow chart with JS plumb, Export the charts to powerpoint</span> with additional code changes to match the design</li>
            </ul>
           
           
        </div>
    )

}
export default Experience;