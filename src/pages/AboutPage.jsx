export default function AboutPage() {
    
  return (
    <div className="container-fluid px-0 mt-5">
    <div className="row gx-0 align-items-center justify-content-center d-flex">
      {/* Image Section */}
         <div className="col-lg-4 p-0 justify-content-center">
            <img src="/bryan-bickel.png" alt="Bryan" className="img-fluid"/>
         </div>
      {/* About Me Section*/}
      <div className="col-lg-4 p-5">
        <h1 className="display-8 fw-bold text-white">Howdy, I'm Bryan!</h1>
        <p className="lead my-4 text-white">
          Welcome to my portfolio! I'm a UI/UX designer on a journey of learning code. Through the fusion of creative vision and front-end development skills, I create captivating digital experiences that engage and delight users. Explore my work as I bridge the gap between design and code, delivering seamless journeys through intuitive interfaces.
        </p>
        {/* Icon Group */}
        <aside>
                <a className = "p-2 text-primary" href="https://dribbble.com/omgbgb" target="_blank"><i className="fa-brands fa-dribbble fa-2xl"></i></a>
                <a className = "p-2 text-primary" href="https://www.linkedin.com/in/briimcfly/" target="_blank"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                <a className = "p-2 text-primary" href="https://github.com/briimcfly" target="_blank"><i className="fa-brands fa-github fa-2xl"></i></a>
                <a className = "p-2 text-primary" href="mailto: bickel@hey.com" target="_blank"><i class="fa-solid fa-circle-envelope fa-2xl"></i></a>
            </aside>
      </div>
    </div>
  </div>
  );
}