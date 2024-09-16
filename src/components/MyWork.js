import React, { Fragment } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
//carousel-item  -->individual carousel item or slide...

const projects = [
  {
    id: 1,
    title: " Zoho Invoice",
    description: "Zoho Invoice is an online invoicing and billing software designed to help businesses manage their billing processes.The Zoho Invoice use javascript to calculate SGST,CGST and total. It is a user-friendly website",
    images: ["z-1.png", "z-2.png"],
    liveLink: "https://zohoinvoicee-f69a.vercel.app", 
    codeLink: "https://github.com/Abinaya-Akshitha/zohoinvoicee.git"
  },
  {
    id: 2,
    title: "To-Do List",
    description: "This To-Do List application demonstrate state management and user interaction. Users can add new tasks to the list,delete tasks by clicking delete button and can move task up or down in list.The input field updates in real time as the user types, and tasks are managed in a dynamic and interactive manner. ",
    images: ["t-1.png","t-2.png","t-3.png"],
    liveLink: "https://todolist18.vercel.app", 
    codeLink: "https://github.com/Abinaya-Akshitha/Todo.git"
  },
  {
    id: 3,
    title: "React Portfolio",
    description: "This portfolio website, crafted using React, highlights my skills. It presents a curated selection of my projects and expertise, offering a clean and responsive interface that reflects my commitment to modern web design and user experience.",
    images: ["resume1.png", "resume2.png", "resume3.png"],
    codeLink: "https://github.com/Yagnik-Gohil/NoteMarketPlaceHTML"
  },
  {
    id: 4,
    title: "Netflix clone",
    description: "This website is a demonstartion of a Netflix Clone. It has an seperate row for each movies like Drama, Horror, Comedy and so on. This is done by using Html and Css. ",
    images: ["n-2.png", "n2.png"],
    codeLink: "https://github.com/Abinaya-Akshitha/NetflixClone.git"
   },
   {
     id: 5,
     title: "Portfolio",
     description: "This website demonstarte personal portfolio that includes Home, About, Skills, Works and Contact.This is done by using Html ,Css and Javascript.",
     images: ["p-1.png", "p-2.png", "p-3.png"],
     liveLink: "https://akshitha-portfolio-2023.netlify.app",
     codeLink: "https://github.com/Abinaya-Akshitha/portfolio.git"
   },
];
const Carousel = ({ id, images }) => (
  <div id={`carouselExampleControls${id}`} className="carousel slide my-1" data-bs-ride="carousel">
    <div className="carousel-inner">
      {images.map((image, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
          <img src={`../portfolio-images/${image}`} className="d-block w-100" alt="..." />
        </div>
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="prev">
      <GrPrevious />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${id}`} data-bs-slide="next">
      <GrNext />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
const Project = ({ project }) => (
  <div className="col-md-4 text-center my-2">
    <Carousel id={project.id} images={project.images} />
    <h5 className="ff-jose my-1">{project.title}</h5>
    <p className="project-description">{project.description}</p>
    <div className="row d-flex justify-content-center">
      {project.liveLink && (
        <a href={project.liveLink} className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank">
          <BsLaptop /> Watch Live
        </a>
      )}
      {project.codeLink && (
        <a href={project.codeLink} className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank">
          <AiFillGithub /> Source Code
        </a>
      )}
    </div>
  </div>
);

function MyWork() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
            </div>
          </div>
          <hr />
          <div className="row">
            {projects.map(project => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyWork;
