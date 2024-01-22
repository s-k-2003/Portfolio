import React, { useEffect, useState } from "react";
import 'boxicons/css/boxicons.min.css'
import '../../assests/css/Page.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Blob from '../../assests/images/Blob.png';
import ContactCover from '../../assests/images/Me2.png';
import Profile from '../../assests/images/Me.png';
import Wrap from '../../assests/images/wrap_page.png';
import KDS from '../../assests/images/kds_page.png';
import Festive from '../../assests/images/festive.png';
import Brainware from '../../assests/images/brainware_page.png';
import { useNavigate } from "react-router-dom";

const Portofilo =()=>{

    const [showMenu, setShowMenu] = useState('hide-menu');
    const [showfrontskill, setFrontShowSkill] = useState('hide-skill-frontend');
    const [showbackskill, setBackShowSkill] = useState('hide-skill-backend');
    const [activemodal1, setActiveModal1] = useState('inactive');
    const [activemodal2, setActiveModal2] = useState('inactive');
    const [activemenu, setActivemenu] = useState('home');
    const nav = useNavigate();

   const handleBackSkill = ()=>{
    if(showbackskill === 'show-skill-backend'){
        setBackShowSkill('hide-skill-backend');
    }else{
        setBackShowSkill('show-skill-backend');
        setFrontShowSkill('hide-skill-frontend');
    }
   }
   const handleFrontSkill = ()=>{
    if(showfrontskill === 'show-skill-frontend'){
        setFrontShowSkill('hide-skill-frontend');
    }else{
        setFrontShowSkill('show-skill-frontend');
        setBackShowSkill('hide-skill-backend');
    }
   }

   const handleNav=(clicked)=>{
    setActivemenu(clicked);
    setShowMenu('hide');
   }

   const handleModal = (skills)=>{
    if(skills === 'skill1'){
        setActiveModal1('active');
        setActiveModal2('inactive');
    }else{
        setActiveModal2('active');
        setActiveModal1('inactive');
    }
   }
   


   const darktheme = 'dark-theme';
   const icontheme = 'bx-sun';
 
   const selectedTheme = localStorage.getItem('selected-theme');
   const selectedIcon = localStorage.getItem('selected-icon');

   const themeButton = document.getElementById('theme-button');
   const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light';
   const getCurrentIcon = () => themeButton.classList.contains(icontheme) ? 'bx-moon' : 'bx-sun';
 
   useEffect(() => {
    const themeButton = document.getElementById('theme-button');
     if (selectedTheme) {
       document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme);
       themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](icontheme);
     }
   }, [selectedTheme, selectedIcon, darktheme, icontheme]);
 
   const handleThemeToggle = () => {
    const themeButton = document.getElementById('theme-button');
     document.body.classList.toggle(darktheme);
     localStorage.setItem('selected-theme', getCurrentTheme());
 
     themeButton.classList.toggle(icontheme);
     localStorage.setItem('selected-icon', getCurrentIcon());
   };

    return(
        <>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#" className="nav-logo">Sakthi Bala</a>
                    <div className={showMenu === 'show-menu' ? 'nav-menu show-menu' : 'nav-menu'} id="nav-menu">
                        <ul className="nav-list grid">
                            <li className="nav-item">
                                <a href="#home" className={activemenu === 'home'? 'nav-link active-link':'nav-link'} onClick={()=>handleNav('home')}>
                                    <i className="bx bx-home nav-icon"></i> Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className={activemenu === 'about'? 'nav-link active-link':'nav-link'} onClick={()=>handleNav('about')}>
                                    <i className="bx bx-user nav-icon"></i> About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className={activemenu === 'skill'? 'nav-link active-link':'nav-link'} onClick={()=>handleNav('skill')}>
                                    <i className="bx bx-file nav-icon"></i> Skills
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#services" className={activemenu === 'services'? 'nav-link active-link':'nav-link'} onClick={()=>handleNav('services')}>
                                    <i className="bx bx-briefcase-alt-2 nav-icon"></i> Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className={activemenu === 'portfolio'? 'nav-link active-link':'nav-link'} onClick={()=>handleNav('portfolio')}>
                                    <i className="bx bx-image nav-icon"></i> Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className={activemenu === 'contact'? 'nav-link active-link':'nav-link'} onClick={()=>handleNav('contact')}>
                                    <i className="bx bx-send nav-icon"></i> Contact Me
                                </a>
                            </li>
                        </ul>
                        <i className="bx bx-x nav-close" id="nav-close" onClick={()=>setShowMenu('hide-menu')}></i>
                    </div>

                    <div className="nav-btns">
                        {/* Dark Mode */}

                        <i className='bx bx-moon change-theme' id="theme-button" onClick={()=>handleThemeToggle()}></i>


                        <div className="nav-toggle" id="nav-toggle">
                            <i className="bx bxs-dashboard" onClick={()=>setShowMenu('show-menu')}></i>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="main dark-theme">
                <section className="home section" id="home">
                    <div className="home-container container grid">
                        <div className="home-content grid">
                            <div className="home-social">
                                <a href="https://www.linkedin.com/" target="_blank" className="home-social-icon">
                                    <i className="bx bxl-linkedin-square"></i>
                                </a>
                                <a href="https://www.github.com/" target="_blank" className="home-social-icon">
                                    <i className="bx bxl-github"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" className="home-social-icon">
                                    <i className="bx bxl-instagram"></i>
                                </a>
                            </div>

                            <div className="home-img">
                                <img src={Profile} alt=""className="home-blob"/>
                                {/* <img src={Profile} alt=""className="home-blob-img"/> */}

                            </div>

                            <div className="home-data">
                                <h1 className="home-title">Hi, I'm Sakthi Bala Kathalingam</h1>
                                <h3 className="home-subtitle">Web Designer</h3>
                                <p className="home-description">High level experience in web design knowledge, producing quality work.</p>
                                <a href="#contact" className="button button-flex">
                                    Contact Me <i className="bx bx-send button-icon"></i>
                                </a>
                            </div>
                        </div>

                        <div className="home-scroll">
                            <a href="#about" className="home-scoll-button button-flex">
                                <i className="bx bx-mouse home-scroll-mouse"></i>
                                <span className="home-scroll-name">
                                    Scroll down
                                    <i className="bx-bx-down-arrow-alt home-scroll-arrow"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </section>
                {/* About */}

                <section className="about section" id="about">
                    <h2 className="section-title">About Me</h2>
                    <span className="section-subtitle">My introduction</span>

                    <div className="about-container container grid">
                        <img src={Profile} alt="" className="about-img" />

                        <div className="about-data">
                            <p className="about-description">
                                Experienced web designer known for creating captivating UIs with Figma.
                                Skilled in turning concepts into engaging designsand expertise to elevate user 
                                experiences.
                            </p>

                            <div className="about-info">
                                <div>
                                    <span className="about-info-title">05+ </span>
                                    <span className="about-info-name">Languages<br/> Known</span>
                                </div>
                                <div>
                                    <span className="about-info-title">04+ </span>
                                    <span className="about-info-name">Completed <br/> Projects</span>
                                </div>
                                <div>
                                    <span className="about-info-title">01+ </span>
                                    <span className="about-info-name">Internship <br/> Completed</span>
                                </div>
                            </div>
                            <div className="about-buttons">
                                <a download="" href="../../assests/images/CV.pdf" className="button button-flex">
                                    Download CV <i className="bx bx-cloud-download button-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills */}

                <section className="skills section" id="skills">
                    <h2 className="section-title">Skills</h2>
                    <span className="section-subtitle">My technical level</span>

                    <div className="skills-container container grid">
                        <div>
                            {/* Skill 1 */}
                            <div className={showfrontskill === 'show-skill-frontend' ? "skills-content show-skills-frontend" : "skills-content hide-skills-frontend"}>
                                <div className="skills-header" onClick={()=>handleFrontSkill()}>
                                    <i className='bx bx-code-curly skills-icon' ></i>

                                    <div>
                                        <h1 className="skills-title">Frontend Developer</h1>
                                        <span className="skills-subtitle">More than 4 years</span>
                                    </div>

                                    <i className='bx bxs-chevron-down skills-arrow'></i>
                                    </div>
                                    
                                    <div className='skills-list grid'>
                                        <div className="skills-data">
                                            <div className="skills-title">
                                                <h3 className="skills-name">HTML & CSS</h3>
                                                <span className="skills-number">90%</span>
                                            </div>

                                            <div className="skills-bar">
                                                <div className="skills-percentage skills-html"></div>
                                            </div>
                                        </div>

                                        <div className="skills-data">
                                            <div className="skills-title">
                                                <h3 className="skills-name">JavaScript</h3>
                                                <span className="skills-number">85%</span>
                                            </div>

                                            <div className="skills-bar">
                                                <div className="skills-percentage skills-javascript"></div>
                                            </div>
                                        </div>

                                        <div className="skills-data">
                                            <div className="skills-title">
                                                <h3 className="skills-name">UI/UX</h3>
                                                <span className="skills-number">80%</span>
                                            </div>

                                            <div className="skills-bar">
                                                <div className="skills-percentage skills-ui-ux"></div>
                                            </div>
                                        </div>

                                        <div className="skills-data">
                                            <div className="skills-title">
                                                <h3 className="skills-name">React</h3>
                                                <span className="skills-number">85%</span>
                                            </div>

                                            <div className="skills-bar">
                                                <div className="skills-percentage skills-react"></div>
                                            </div>
                                        </div>
                                        <div className="skills-data">
                                            <div className="skills-title">
                                                <h3 className="skills-name">TypeScript</h3>
                                                <span className="skills-number">85%</span>
                                            </div>

                                            <div className="skills-bar">
                                                <div className="skills-percentage skills-typescript"></div>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* Skills 2 */}
                            <div className={showbackskill === 'show-skill-backend' ? "skills-content show-skills-backend" : "skills-content hide-skills-backend"}>
                                <div className="skills-header" onClick={()=>handleBackSkill()}>
                                    <i className='bx bxs-server skills-icon' ></i>

                                    <div>
                                        <h1 className="skills-title">Backend Developer</h1>
                                        <span className="skills-subtitle">More than 2 years</span>
                                    </div>

                                    <i className='bx bxs-chevron-down skills-arrow'></i>
                                    </div>
                                    <div className='skills-list grid'>
                                        <div className="skills-data">
                                            <div className="skills-title">
                                                <h3 className="skills-name">Java Programming</h3>
                                                <span className="skills-number">90%</span>
                                            </div>

                                            <div className="skills-bar">
                                                <div className="skills-percentage skills-java"></div>
                                            </div>
                                        </div>

                                        <div className="skills-data">
                                            <div className="skills-title">
                                                <h3 className="skills-name">Spring Tools Suite(STS)</h3>
                                                <span className="skills-number">85%</span>
                                            </div>

                                            <div className="skills-bar">
                                                <div className="skills-percentage skills-sts"></div>
                                            </div>
                                        </div>

                                        <div className="skills-data">
                                            <div className="skills-title">
                                                <h3 className="skills-name">RESTFUL API</h3>
                                                <span className="skills-number">85%</span>
                                            </div>

                                            <div className="skills-bar">
                                                <div className="skills-percentage skills-rest"></div>
                                            </div>
                                        </div>

                                        <div className="skills-data">
                                            <div className="skills-title">
                                                <h3 className="skills-name">Databases(MYSQL)</h3>
                                                <span className="skills-number">90%</span>
                                            </div>

                                            <div className="skills-bar">
                                                <div className="skills-percentage skills-mysql"></div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="qualification section" id="qualification">
                    <h2 className="section-title">Qualification</h2>
                    <span className="section-subtitle">My personal journey</span>

                    <div className="qualification-container container">
                        <div className="qualification-tabs">
                            <div className="qualification-button button--flex" onClick={()=>nav('#education')}>
                                <i className='bx bxs-graduation qualification-icon'></i>
                                Education
                            </div>

                            <div className="qualification-button button--flex">
                                <i className='bx bxs-briefcase qualification-icon'></i>
                                Internship
                            </div>
                        </div>
                        <div className="qualification-sections">
                            <div className="qualification-content qualification-active">
                                

                                <div className="qualification-data" >

                                    <div>
                                        <h3 className="qualification-title">Computer Science </h3>
                                        <span className="qualification-subtitle">Adhyapana School - Madurai</span>
                                        <div className="qualification-calendar">
                                            <i className='bx bx-calendar'></i>
                                            2020 - 2021
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <span className="qualification-rounder"></span>
                                        <span className="qualification-line"></span>
                                    </div>

                                    <div></div>

                                </div>

                                <div className="qualification-data">
                                    <div></div>

                                    <div>
                                        <span className="qualification-rounder"></span>
                                        <span className="qualification-line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification-title">Junior Web Developer</h3>
                                        <span className="qualification-subtitle">Symbiosis Technology - Madurai</span>
                                        <div className="qualification-calendar">
                                            <i className='bx bx-calendar'></i>
                                            2023 - 2024
                                        </div>
                                    </div>

                                </div>

                                <div className="qualification-data">
                                    
                                    <div>
                                        <h3 className="qualification-title">Bachelors at Computer Engineering</h3>
                                        <span className="qualification-subtitle">SKCT - Coimbatore</span>
                                        <div className="qualification-calendar">
                                            <i className='bx bx-calendar'></i>
                                            2021 - 2025
                                        </div>
                                    </div>

                                    <div>
                                        <span className="qualification-rounder"></span>
                                        <span className="qualification-line"></span>
                                    </div>

                                    
                                </div>


                            </div>

                        </div>
                    </div>
                </section>

                {/* Services */}

                <section className="services section" id="services">
                    <h2 className="section-title">Services</h2>
                    <span className="section-subtitle">What I Offer</span>

                    <div className="services-container container grid">
                        <div className="services-content">
                            <i className='bx bxs-window-alt services-icon'></i>
                            <h3 className="services-title">UI/UX <br /> Designer</h3>

                            <span className="button button-flex button-small button-link services-button" onClick={()=>handleModal('skill1')}>
                                View More 
                                <i className='bx bx-right-arrow-alt button-icon'></i>
                            </span>

                        <div className={activemodal1 === 'active' ? "services-modal show" : "services-modal"}>
                            <div className="services-modal-content">
                                <h4 className="services-modal-title">UI/UX <br/> Designer</h4>
                                <i className="bx bx-x services-modal-close" onClick={()=>setActiveModal1('inactive')}></i>

                                <ul className="services-modal-services grid">
                                    <li className="services-modal-service">
                                        <i className='bx bx-check-circle services-modal-icon'></i>
                                        <p>I develop the user interface.</p>
                                    </li>
                                    <li className="services-modal-service">
                                        <i className='bx bx-check-circle services-modal-icon'></i>
                                        <p>Interactive Web Designer.</p>
                                    </li>
                                    <li className="services-modal-service">
                                        <i className='bx bx-check-circle services-modal-icon'></i>
                                        <p>Improves user's UI experience.</p>
                                    </li>
                                    <li className="services-modal-service">
                                        <i className='bx bx-check-circle services-modal-icon'></i>
                                        <p>I create Web Designs using Latest Technologies.</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        </div>

                        <div className="services-content">
                        <i class='bx bx-expand-horizontal services-icon'></i>
                            <h3 className="services-title">Frontend <br /> Developer</h3>

                            <span className="button button-flex button-small button-link services-button" onClick={()=>handleModal('skills2')}>
                                View More 
                                <i className='bx bx-right-arrow-alt button-icon'></i>
                            </span>

                        <div className={activemodal2 === 'active' ? "services-modal show" : "services-modal"}>
                            <div className="services-modal-content">
                                <h4 className="services-modal-title">Frontend <br /> Developer</h4>
                                <i className="bx bx-x services-modal-close" onClick={()=>setActiveModal2('inactive')}></i>

                                <ul className="services-modal-services grid">
                                    <li className="services-modal-service">
                                        <i className='bx bx-check-circle services-modal-icon'></i>
                                        <p>I create websites that look great and work well on all devices .</p>
                                    </li>
                                    <li className="services-modal-service">
                                        <i className='bx bx-check-circle services-modal-icon'></i>
                                        <p>I use JavaScript to create interactive and dynamic features on websites.</p>
                                    </li>
                                    <li className="services-modal-service">
                                        <i className='bx bx-check-circle services-modal-icon'></i>
                                        <p>I ensure that websites work smoothly on all web browsers.</p>
                                    </li>
                                    <li className="services-modal-service">
                                        <i className='bx bx-check-circle services-modal-icon'></i>
                                        <p>I use advanced techniques to organize and style websites.</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        </div>


                       
                    </div>
                </section>

                {/* Portfolio */}


                <section className="portfolio section" id="portfolio">
                    <h2 className="section-title">Portfolio</h2>
                    <span className="section-subtitle">Most recent work</span>

                    <div className="portfolio-container container">
                        <div>
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            loop={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="portfolio-content grid">
                                <img src={Wrap} alt="" className="portfolio-img" />

                                <div className="portfolio-data">
                                    <h3 className="portfolio-title">Delivery Application</h3>
                                    <p className="portfolio-description">Ship your packages worldwide with a simple wrap!</p>

                                    <a href="#" className="button button-flex button-small portfolio-button">
                                        Visit 
                                        <i className='bx bx-right-arrow-alt button-icon'></i>
                                    </a>
                                </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="portfolio-content grid">
                                <img src={Festive} alt="" className="portfolio-img" />

                                <div className="portfolio-data">
                                    <h3 className="portfolio-title">Online E-Commerce Website</h3>
                                    <p className="portfolio-description">An online site where users can purchase for their special events.</p>

                                    <a href="#" className="button button-flex button-small portfolio-button">
                                        Visit 
                                        <i className='bx bx-right-arrow-alt button-icon'></i>
                                    </a>
                                </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="portfolio-content grid">
                                <img src={KDS} alt="" className="portfolio-img" />

                                <div className="portfolio-data">
                                    <h3 className="portfolio-title">Kitchen Display System</h3>
                                    <p className="portfolio-description">Order food online, reduce wait times at the billing area.</p>

                                    <a href="#" className="button button-flex button-small portfolio-button">
                                        Visit 
                                        <i className='bx bx-right-arrow-alt button-icon'></i>
                                    </a>
                                </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="portfolio-content grid">
                                <img src={Brainware} alt="" className="portfolio-img" />

                                <div className="portfolio-data">
                                    <h3 className="portfolio-title">Idea Generator Application</h3>
                                    <p className="portfolio-description">An online application that generates brainstroming ideas for users.</p>

                                    <a href="#" className="button button-flex button-small portfolio-button">
                                        Visit 
                                        <i className='bx bx-right-arrow-alt button-icon'></i>
                                    </a>
                                </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </section>

                {/* Project in Mind */}

                <section className="project section">
                    <div className="project-bg">
                        <div className="project-container container grid">
                            <div className="project-data">
                                <h2 className="project-title">You have a new project</h2>
                                <p className="project-description">Contact me now and develop a best user experience web application ready.</p>
                                <a href="#contact" className="button button-flex button-white">
                                    Contact Me 
                                    <i className='bx bx-send project-icon button-icon'></i>
                                </a>
                            </div>

                            <img src={Profile} alt="" className="project-img" />
                        </div>
                    </div>
                </section>

                {/* Contact Me */}

                <section className="contact section" id="contact">
                    <h2 className="section-title">Contact Me</h2>
                    <span className="section-subtitle">Get in Touch</span>

                    <div className="contact-container container grid">
                        <div>
                            <div className="contact-information">
                                <i className='bx bx-phone contact-icon'></i>

                                <div>
                                    <h3 className="contact-title">Call Me</h3>
                                    <span className="contact-subtitle">6380527699</span>
                                </div>
                            </div>

                            <div className="contact-information">
                                <i className='bx bx-envelope contact-icon'></i>

                                <div>
                                    <h3 className="contact-title">Mail Me</h3>
                                    <span className="contact-subtitle">sksakthibalaofficial@gmail.com</span>
                                </div>
                            </div>

                            <div className="contact-information">
                                <i class='bx bx-current-location contact-icon'></i>

                                <div>
                                    <h3 className="contact-title">Location</h3>
                                    <span className="contact-subtitle">Madurai</span>
                                </div>
                            </div>
                        </div>

                        <form action="#" className="contact-form grid">
                            <div className="contact-inputs grid">
                                <div className="contact-content">
                                    <label htmlFor="" className="contact-label">Name</label>
                                    <input type="text" className="contact-input" />
                                </div>
                                <div className="contact-content">
                                    <label htmlFor="" className="contact-label">Email</label>
                                    <input type="email" className="contact-input" />
                                </div>
                            </div>

                            <div className="contact-content">
                                <label htmlFor="" className="contact-label">Project</label>
                                <input type="text" className="contact-input" />
                            </div>

                            <div className="contact-content">
                                <label htmlFor="" className="contact-label">Message</label>
                                <textarea name="" id="" cols="0" rows="7" className="contact-input"></textarea>
                             </div>

                             <div>
                                <a href="#" className="button button-flex">
                                    Send Message
                                    <i class='bx bx-send button-icon'></i>
                                </a>
                             </div>

                        </form>
                    </div>
                </section>

                {/* Footer */}

                <footer className="footer">
                    <div className="footer-bg">
                        <div className="footer-container container grid">
                            <div>
                                <h1 className="footer-title">Sakthi Bala</h1>
                                <span className="footer-subtitle">Web designer</span>
                            </div>

                            <ul className="footer-links">
                                <li>
                                    <a href="#services" className="footer-link">Services</a>
                                </li>
                                <li>
                                    <a href="#portfolio" className="footer-link">Portfolio</a>
                                </li>

                                <li>
                                    <a href="contact" className="footer-link">Contactme</a>
                                </li>
                            </ul>

                            <div className="footer-socials">
                                <a href="https://www.facebook.com/" target="_blank" className="footer-social">
                                    <i className='bx bxl-facebook '></i>
                                </a>

                                <a href="https://www.instagram.com/" target="_blank"  className="footer-social">
                                    <i className='bx bxl-instagram'></i>
                                </a>

                                <a href="https://www.twitter.com/" target="_blank"  className="footer-social">
                                    <i class='bx bxl-twitter'></i>
                                </a>
                            </div>
                        </div>
                            <p className="footer-copy">&#169; Sakthi.All rights reserved</p>
                    </div>
                </footer>

                {/* Scroll Top */}

                <a href="#" className="scrollup" id="scroll-up">
                    <i className='bx bx-up-arrow-alt scrollup-icon'></i>
                </a>

            </main>
        </>
    );
}

export default Portofilo;