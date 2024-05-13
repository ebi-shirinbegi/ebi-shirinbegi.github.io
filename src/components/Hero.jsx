import React, { useState} from "react";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
import { MdOutgoingMail } from "react-icons/md";
import {cv} from '../assets';
import {FaCloudDownloadAlt } from 'react-icons/fa';
import { styles } from "../styles";

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyGmailId = () => {
    const hiddenText = document.getElementById('myGmail');
    const textarea = document.createElement('textarea');
    textarea.value = hiddenText.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  
  return (
   
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
           <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
           <div className="w-1 sm:h-90 h-80 violet-gradient" />
        </div>

        {isCopied && 
        <span className="text-white-100 w-full max-w-80 rounded flex place-self-center justify-center items-center p-3 fixed top-22 z-10 bg-gradient-to-r from-indigo-300">Email has been copied! </span>}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}> Ebrahim  <span className="text-[#915eff]"> Sharifi </span> </h1>
            <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            <span className="text-[#915eff] font-bold">Software Engineer</span>
            <br />
            Experienced Software Engineer from Afghanistan with 6+ years of experience in PHP. Proven expertise in database design, collaborative teamwork, and NLP using TensorFlow and PyTorch. I have excellent communication skills and a strong passion for continuous learning. In 2021, I received a scholarship from the China West Normal University in Sichuan to pursue a master’s degree in Software Engineering. My goal is to relocate to Europe and continue my career as a Software Engineer, leveraging my skills in both traditional software development and modern AI/ML techniques.
            <br />
            <div style={{ marginTop: '20px' }} className='black-gradient py-1.5 px-2 font-[2px] rounded-xl outline-none w-fit text-white shadow-md shadow-primary'>
              <a href={cv} download="Ebrahim_Sharifi_Resume.pdf" target='_blank'>
                Resume <FaCloudDownloadAlt className="inline" />
              </a>
            </div>
            </p>
            
                <span className="inline flex flex-row gap-2 mt-7">
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:text-teal-900" target="_blank" href="https://www.linkedin.com/in/ebrahim-sharifi-086323211/"> <FaLinkedinIn /> </a>
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:text-teal-900" target="_blank" href="https://github.com/ebi-shirinbegi"> <FaGithub /> </a>
                      <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:text-teal-900" target="_blank" href="https://twitter.com/BegiEbi"> <FaTwitter /> </a>
                      {/* <span onClick={copyGmailId} className="black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer inline hover:text-teal-900">
                        <span id="myGmail" className="hidden"> Sharifi.ebrahim@outlook.com </span>
                        <MdOutgoingMail />
                      </span> */}
                  </span>
            
                <p className={`${styles.heroSubText} mt-6 text-white-100`}> Email:  <span className="text-[#915eff]"> Sharifi.ebrahim@outlook.com </span> </p>
                <p className={`${styles.heroSubText} text-white-100`}> Phone:  <span className="text-[#915eff]"> +8617608171756 </span> </p>
          
                <fieldset>
                  <legend><span> My Hobbies </span></legend>
                      <button className="pulse-button"> Playing video games  </button>
                      <button className="pulse-button"> Watching movies  </button>
                      <button className="pulse-button"> Football  </button>
                      <button className="pulse-button"> Playing piano  </button>
              </fieldset>
        </div>
      </div>
    </section>
  )
}

export default Hero;
