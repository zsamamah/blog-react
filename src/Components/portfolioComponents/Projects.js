import React, { Component } from 'react'
import quiz from '../assets/quizWebsite.png';
import cupcake from '../assets/bestCupcakes.png';
import './style.css';
const projectData=[
    {
        imageSrc: `${quiz}`,
        imageAlt: "quizWebsite",
        projectName: 'Quiz Website',
        description:<p>
        Test your knowledge in HTML ,CSS and JavaScript
        </p>,
        formAction:"https://zsamamah.github.io/projectTwo-QuizWebsite/index.html"
    },
    {
        imageSrc: `${cupcake}`,
        imageAlt: "bestCupcakes",
        projectName: 'Best Cupcakes',
        description:<p>
        This is task on HTML, CSS, Bootstrap and JavaScript
        </p>,
        formAction:"https://zsamamah.github.io/best_cupcake/"
    }
];

export class Projects extends Component {
    render() {
        return projectData.map(
            (el,index)=>{
                return <div className="project_container" key={index}>
                    <img src={el.imageSrc} alt={el.imageAlt} />
                    <h3>{el.projectName}</h3>
                    {el.description}
                    <div className="readmore">
                        <form action={el.formAction}>
                            <button type="submit">Visit Website</button>
                        </form>
                    </div>
                </div>
            }
        )
    }
}

export default Projects
