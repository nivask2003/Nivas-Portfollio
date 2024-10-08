import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon}) =>(
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt="web development" className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>

  </Tilt>
)




const About = () =>{
  return(
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <p className={styles.heroHeadText}>Overview</p>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I am Nivas Kumar, from Madurai. I graduated with a Bachelor of Computer Applications (BCA) from Mannar Thirumalai Naicker College.
      I have completed a Full Stack Development course in Java and am currently studying the MERN stack. For my college final year project, 
      I developed an online e-commerce website using PHP and MySQL. At present, I am working on another online e-commerce website using the MERN stack.

      In addition, I completed an internship at Vedam Info Tech Solution, Madurai, where I gained practical experience in PHP and front-end development. 
      I am passionate about building efficient, user-friendly applications and continuously improving my skills. My goal is to contribute to innovative software projects 
      and grow as a professional developer.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) =>(
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  );
}
export default SectionWrapper(About, "about");