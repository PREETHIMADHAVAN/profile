import './AboutMe.css';
const AboutMe = () => {
    return (
        <div className="aboutMeContainer">
            <div className="centerLine">
                <div className="startPoint"></div>
                <div className="endPoint"></div>
            </div>
            <div className="timelines">
                <div className='row'>
                    <div className="timelinePeriod">Oct 2022 - Present</div>
                    <div className="timelineDetails">
                        <div className="timelineTitle">Technology Analyst</div>
                        <div className="location">Infosys</div>
                        <div className="location">Bangalore</div>
                    </div>
                </div>
                <div className='row'>
                    <div className="timelinePeriod">Jan 2022 - Oct 2022</div>
                    <div className="timelineDetails">
                        <div className="timelineTitle">Associate</div>
                        <div className="location">Cognizant</div>
                        <div className="location">Coimbatore</div>
                    </div>
                </div>
                <div className='row'>
                    <div className="timelinePeriod">July 2022 - Dec 2021</div>
                    <div className="timelineDetails">
                        <div className="timelineTitle">Program Analyst</div>
                        <div className="location">Cognizant</div>
                        <div className="location">Coimbatore</div>
                    </div>
                </div>
                <div className='row'>
                    <div className="timelinePeriod">July 2019 - June 2020</div>
                    <div className="timelineDetails">
                        <div className="timelineTitle">Program Analyst Trainee</div>
                        <div className="location">Cognizant</div>
                        <div className="location">Coimbatore</div>
                    </div>
                </div>
                <div className='row'>
                    <div className="timelinePeriod">July 2015 - Apr 2019</div>
                    <div className="timelineDetails">
                        <div className="timelineTitle">B.E. Computer Science</div>
                        <div className="location">Kongu Engineering College</div>
                        <div className="location">Perundurai</div>
                    </div>
                </div>
                <div className='row'>
                    <div className="timelinePeriod">July 2001 - Apr 2015</div>
                    <div className="timelineDetails">
                        <div className="timelineTitle">Schooling</div>
                        <div className="location">U.R.C Palanimmal Matric Hr Sec School</div>
                        <div className="location">Erode</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AboutMe;