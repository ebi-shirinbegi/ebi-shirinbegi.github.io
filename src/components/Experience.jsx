import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants'; // Make sure this path matches your project structure

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1d1836',
      color: '#fff',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      borderRadius: '0.75rem',
      padding: '2rem'
    }}
    contentArrowStyle={{
      borderRight: '7px solid #1d1836'
    }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg,
      boxShadow: '0 0 0 4px #1d1836, inset 0 2px 0 rgb(0 0 0 / 0.1), 0 4px 6px -1px rgb(0 0 0 / 0.1)'
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-3/5 h-3/5 object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-2xl font-bold text-white">
        {experience.title}
      </h3>
      <p className="text-base font-semibold text-gray-400">
        {experience.company_name}
      </p>
      <p className="text-base font-semibold text-gray-400">
        {experience.date}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-sm text-gray-300 pl-1 tracking-wide"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  if (!experiences?.length) {
    return null; // Don't render anything if experiences data is not available
  }

  return (
    <section className="relative w-full mx-auto pt-16 sm:pt-24 md:pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-12"
      >
        <p className="text-gray-400 text-lg uppercase tracking-wider">
          What I have done so far!
        </p>
        <h2 className="text-white font-black md:text-6xl sm:text-5xl text-4xl">
          Work Experience.
        </h2>
      </motion.div>

      <div className="flex flex-col">
        <VerticalTimeline
          layout={'1-column-left'}
          lineColor={'#1d1836'}
          animate={true}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

// Higher Order Component wrapper for sections
const SectionWrapper = (Component) => {
  return function HOC() {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-0 mx-auto max-w-7xl px-6 sm:px-16"
      >
        <span className="hash-span" id="work">
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper(Experience);