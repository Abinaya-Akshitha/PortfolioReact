import React, { Fragment } from 'react'
import {VscHome} from 'react-icons/vsc'
import {FiUser} from 'react-icons/fi'
import {BsCode} from 'react-icons/bs'
import {MdOutlineDashboard, MdOutlineContactPage, MdEmail} from 'react-icons/md'
import {AiFillLinkedin, AiFillGithub, AiOutlineUnorderedList} from 'react-icons/ai'
import {Link, NavLink} from "react-router-dom";

function Sidebar() {
  return (
    <Fragment>
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 background-dark slide-in-left">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <Link to="/" className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 ff-jost fw-600">Abinaya Akshitha S</span>
                    </Link>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link align-middle px-0 text-white">
                                <VscHome className='fs-5'/> <span className="ms-1">Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link align-middle px-0 text-white">
                                <FiUser className='fs-5'/> <span className="ms-1 ">Education</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/skills" className="nav-link align-middle px-0 text-white">
                                <BsCode className='fs-5'/> <span className="ms-1">Skills</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/mywork" className="nav-link align-middle px-0 text-white">
                                <MdOutlineDashboard className='fs-5'/><span className="ms-1">My Work</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resume" className="nav-link align-middle px-0 text-white">
                                <AiOutlineUnorderedList className='fs-5'/> <span className="ms-1">Resume</span>
                            </NavLink>
                        </li>
                    </ul>
                    <hr/>
                    <div className="dropdown pb-4 dropup">
                        <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <MdOutlineContactPage className='fs-5'/>
                            <span className="d-none d-sm-inline mx-1">Contact</span>
                        </a>
                        <ul className="dropdown-menu shadow" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item text-black" href="mailto:akshitha18.2000@gmail.com" target="/blank"><MdEmail className='fs-5'/> Email</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item text-black" href="https://www.linkedin.com/in/abinaya-akshitha-s-/" target="/blank"><AiFillLinkedin className='fs-5'/> LinkedIn</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item text-black" href="https://github.com/Abinaya-Akshitha" target="/blank"><AiFillGithub className='fs-5'/> Github</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                        </ul>
                    </div>
                </div>
            </div>

    </Fragment>
  )
}

export default Sidebar