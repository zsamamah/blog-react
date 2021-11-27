import React, { Component } from 'react'
import './style.css';

const skillsData=[
    {
        iTag:<i className="far fa-file-code fa-5x"></i>,
        skillName:'Front-end web development',
        explain:<p>
        I write semantic markup with accessibility in mind. I keep my CSS
        manageable and scalable strictly following <b>BEM</b> conventions.
        </p>,
        hr: <hr />,
        frameworks:['HTML 5','CSS 3','Bootstrap']
    },
    {
        iTag:<i className="far fa-file-code fa-5x"></i>,
        skillName:'Front-end web development',
        explain:<p>
        I write semantic markup with accessibility in mind. I keep my CSS
        manageable and scalable strictly following <b>BEM</b> conventions.
        </p>,
        hr: <hr />,
        frameworks:['HTML 5','CSS 3','Bootstrap']
    },
    {
        iTag:<i className="far fa-file-code fa-5x"></i>,
        skillName:'Front-end web development',
        explain:<p>
        I write semantic markup with accessibility in mind. I keep my CSS
        manageable and scalable strictly following <b>BEM</b> conventions.
        </p>,
        hr: <hr />,
        frameworks:['HTML 5','CSS 3','Bootstrap']
    },
    {
        iTag:<i className="far fa-file-code fa-5x"></i>,
        skillName:'Front-end web development',
        explain:<p>
        I write semantic markup with accessibility in mind. I keep my CSS
        manageable and scalable strictly following <b>BEM</b> conventions.
        </p>,
        hr: <hr />,
        frameworks:['HTML 5','CSS 3','Bootstrap']
    },
    {
        iTag:<i className="far fa-file-code fa-5x"></i>,
        skillName:'Front-end web development',
        explain:<p>
        I write semantic markup with accessibility in mind. I keep my CSS
        manageable and scalable strictly following <b>BEM</b> conventions.
        </p>,
        hr: <hr />,
        frameworks:['HTML 5','CSS 3','Bootstrap']
    },
    {
        iTag:<i className="far fa-file-code fa-5x"></i>,
        skillName:'Front-end web development',
        explain:<p>
        I write semantic markup with accessibility in mind. I keep my CSS
        manageable and scalable strictly following <b>BEM</b> conventions.
        </p>,
        hr: <hr />,
        frameworks:['HTML 5','CSS 3','Bootstrap']
    }
];

export class Skill extends Component {
    render() {
        return(
    <div className="skill_card" key={this.props.id}>
        <div>{this.props.itag}</div>
        <h2>{this.props.skillname}</h2>
        {this.props.explain}
        {this.props.hr}
        <div className="frameworks">
            <ul>
                {this.props.frameworks.map((i,index)=>{return <li key={index}> {i} </li>})}
            </ul>
        </div>
    </div>
        );
    }
}
function MySkills(){
    return (skillsData.map((el,index)=>{
        return <Skill id={index} itag={el.iTag} skillname={el.skillName} explain={el.explain} hr={el.hr} frameworks={el.frameworks} />
    }));
}
function AllSkills() {
    return(
        <div className="zaid_skills">
            {MySkills()}
        </div>
    );
}

export default AllSkills
