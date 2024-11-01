import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Projects.css'
import pro from './pro.jpg'

export default function Projects() {
    const { scrollYProgress } = useScroll();

    const xProject1 = useTransform(scrollYProgress, [0, 0.5], [-700, 0]); 
    const xProject2 = useTransform(scrollYProgress, [0, 0.5], [700, 0]); 
    const opacity = useTransform(scrollYProgress,[0,1],[0,1.5]) 

    const scaleProject1 = useTransform(scrollYProgress, [0, 1], [0.9, 1]); 
    const scaleProject2 = useTransform(scrollYProgress, [0, 1], [0.9, 1]); 

    return (
        <div id="projects" className="projects-container" style={{backgroundColor:"black",color:"white",paddingBottom:"50px",paddingTop:"20px"}}>
            
            <div style={{
                fontSize:"90px",
                fontWeight:"700", 
                marginBottom:"70px",
                textAlign:"left",
                marginLeft:"120px"

                }}>
                    Projects
            </div>

            <div className='project1'>
                <img src={pro} className="project-image"/>
                <div className='project-content'>
                    <h1><span style={{fontSize:"70px"}}>01</span> Title 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit doloremque vero deserunt repellat magni aspernatur, amet minima animi praesentium consectetur aliquid quaerat, voluptatibus a, distinctio at id dolore rerum.</p>
                </div>
            </div>
            <div className='project2'>
                <div className='project-content'>
                    <h1><span style={{fontSize:"70px"}}>02</span> Title 2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit doloremque vero deserunt repellat magni aspernatur, amet minima animi praesentium consectetur aliquid quaerat, voluptatibus a, distinctio at id dolore rerum.</p>
                </div>
                <img src={pro} className="project-image"/>
            </div>
            <div className='project3'>
                <img src={pro} className="project-image"/>
                <div className='project-content'>
                    <h1><span style={{fontSize:"70px"}}>03</span> Title 3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit doloremque vero deserunt repellat magni aspernatur, amet minima animi praesentium consectetur aliquid quaerat, voluptatibus a, distinctio at id dolore rerum.</p>
                </div>
            </div>
            
            <motion.div
            style={{
                opacity,
                marginTop:"70px",
                textAlign:"right",
                marginRight:"100px",
                textDecoration:"underline",
                cursor:"pointer",
                marginBottom:"30px"
                
            }}
            >--- Explore More</motion.div>
        </div>
    );
}
