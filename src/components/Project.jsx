function Project(props){
    return (
        <div className="card">
            <a href ={props.link} target="_blank">
                <img className="card-img-top" src = {props.image} alt="Project Image"/>
            </a>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
            <div class="card-body">
                <a href={props.link} class="card-link" target="_blank">View Project</a>
            </div>
        </div>
    )
}

export default Project;