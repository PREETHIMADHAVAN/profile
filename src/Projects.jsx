import { useState } from 'react';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
const Projects = () =>{
    const [selectedItem,setSelectedItem] = useState(1);
    function changePage(pageInc){
        setSelectedItem((prevState) =>{
            let newPage = prevState + pageInc
            if(newPage!=0 && newPage != 6){
               return newPage
            }
            return prevState
        })

    }
    return (
        <div className="projectsContainer">
            <div className="projectsTitle">Projects</div>
            <div className="projects">
                {
                selectedItem == 1 && 
                    (
                        <div className="project" >
                        <div className="projectTitle">Migration of NPT project to Angular 14</div>
                        <div className="projectDesc">
                            <ul>
                                <li>Working on analyzing and collecting the requirements from Legacy Application(Oracle ADF) and rewriting in Angular 14.</li>
                                <li>Implemented Micro FrontEnd Architecture for easy maintenance and loosely coupled modules to ensure its availability all time.</li>
                                <li>Worked on Jsplumb for creating flowcharts and also exporting the same to PPT.</li>
                            </ul>
    
                        </div>
                    </div>

                    )
                }
                {
                    selectedItem == 2 &&  
                    (
                        <div className="project">
                        <div className="projectTitle">My Learning Studio</div>
                        <div className="projectDesc">
                            <ul>
                                <li>Worked in developing new UI pages along with Lazy loading.</li>
                                <li>Improved the performance in the Search module using ChangeDetection Strategy, Pagination</li>
                                <li>Created charts with D3js.</li>
                            </ul>
                        </div>
                    </div>
                        
                    )
                }
                {
                    selectedItem == 3 &&
                    (
                        <div className="project">
                    <div className="projectTitle">Digital First</div>
                        <div className="projectDesc">
                            <ul>
                                <li>Revamped the portal according to new brand guidelines of the organization using Angular, Sharepoint and authorization using MSAL.</li>
                            </ul>
                        </div>
                    </div>
                        
                    )
                }
                {
                    selectedItem == 4 &&
                    (
                        <div className="project">
                        <div className="projectTitle">Unit Test case Implementation</div>
                            <div className="projectDesc">
                                <ul>
                                    <li>Developed Angular Unit Test Cases using Karma & Jasmine for a Client Project and improved the test case coverage from 30% to 75%</li>
                                </ul>
                            </div>
                        </div>
                        
                    )
                }
                {
                    selectedItem == 5 &&
                    (
                        <div className="project">
                        <div className="projectTitle">Automatic HTML Layout Creation</div>
                            <div className="projectDesc">
                                <ul>
                                    <li>Worked in “Automatic HTML Layout Generation” using AI.Captured a HTML layouts from an image using Object Detection technique with YOLO and converted it to HTML file.</li>
                                </ul>
                            </div>
                        </div>
                        
                    )
                }
            
               
                
                
               
               
                
            </div>
            <div className="carousalNav">
                <input type="radio" name="carousalNav" checked={selectedItem==1} onClick={()=> setSelectedItem(1)} />
                <input type="radio" name="carousalNav" checked={selectedItem==2} onClick={()=> setSelectedItem(2)} />
                <input type="radio" name="carousalNav" checked={selectedItem==3} onClick={()=> setSelectedItem(3)} />
                <input type="radio" name="carousalNav" checked={selectedItem==4} onClick={()=> setSelectedItem(4)} />
                <input type="radio" name="carousalNav" checked={selectedItem==5} onClick={()=> setSelectedItem(5)} />
            </div>
            <div className="singlePageNav">
            <div className={"prevPage "+  (selectedItem == 1?'disabled':'')} onClick={() =>changePage(-1)}><FontAwesomeIcon icon={faAngleLeft} /></div>
            <div className={"nextPage "+  (selectedItem == 5?'disabled':'')} onClick={() =>changePage(1)}><FontAwesomeIcon icon={faAngleRight} /></div>
            </div>
        </div>
    )

}
export default Projects;