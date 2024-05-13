import React from "react";
import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';
import SkillBar from "./SkillBars";
import "./MySkills.css";
import { machineLearnings, webAndDatabases, toolsAndMethods, softSkills } from '../../constants';
import {styles} from "../../styles";

export default function MySkills() {

  return (
    <section id="skills" className={`${styles.paddingX} max-w-7xl mx-auto relative z-0 mt-10`}>
       <motion.div variants={textVariant()} className="mt-5">
        <p className={styles.sectionSubText}> Technologies && Skills </p>
        <h2 className={styles.sectionHeadText}> Skills. </h2>
      </motion.div>
      <div className="skills">
        <div className="technical-skills">
          <h3 className="font-bold text-[24px] sm:mt-5"> AI/ML/NLP </h3>
          {machineLearnings.map((machineLearning, index) => (
            <SkillBar
              key={index}
              skill={machineLearning.front}
              percentage={machineLearning.percentage}
            />
          ))}
        </div>
        <div className="technical-skills">
        <h3 className="font-bold text-[24px] sm:mt-5"> Web & Database </h3>
          {webAndDatabases.map((webAndDatabase, index) => (
            <SkillBar
              key={index}
              skill={webAndDatabase.backEnd}
              percentage={webAndDatabase.percentage}
            />
          ))}
        </div>

        <div className=" personal-skills">
          <h3 className="font-bold text-[24px] sm:mt-5"> Tools & Methods</h3>
          {toolsAndMethods.map((toolsAndMethod, index) => (
            <SkillBar
              key={index}
              skill={toolsAndMethod.tools}
              percentage={toolsAndMethod.percentage}
            />
          ))}
        </div>
        <div className=" personal-skills">
          <h3 className="font-bold text-[24px] sm:mt-5"> Soft Skills </h3>
          {softSkills.map((softSkill, index) => (
            <SkillBar
              key={index}
              skill={softSkill.soft}
              percentage={softSkill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
