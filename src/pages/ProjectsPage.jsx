import Header from '../components/Header'
import Project from '../components/Project'
import projects from '../utils/projectList'

export default function ProjectsPage() {
const title = "Projects"

  return (
    <div className="p-5">
      <Header title={title} />
      <div className='container'>
        <div className='row'>
            {projects.map((project, index)=> (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                <Project
                title={project.title}
                image={project.image}
                description={project.description}
                link={project.link}
                />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}