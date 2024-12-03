import React, { useState, useEffect, useRef } from 'react'

// css
import '../Css/AboutUS.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// modules
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


// icons 
import { GiProgression } from "react-icons/gi";
import { GiDiceTarget } from "react-icons/gi";
import { GrVulnerability } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { GrLinkTop } from "react-icons/gr";


// images
import Background from '../images/AboutUs-BackgroundImg.jpg'
import DamanAnand from '../images/DamanAnand.png'
import HimanshuGupta from '../images/HimanshuGupta.png'
import Megha from '../images/MeghaAnand.png'
import RajeevYadav from '../images/rajeev.jpg'

export default function AboutUs() {
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [expanded, setExpanded] = useState(false);
  const [Vision, setVision] = useState(false);
  const [mission, setMission] = useState(false);
  const [capabilities, setCapabilities] = useState(false);
  const [OurTeam, setOurTeam] = useState(false);
  const [Member1, setMember1] = useState(false);
  const [Member2, setMember2] = useState(false);
  const [Member3, setMember3] = useState(false);
  const [WorkWithUs, setWorkWithUs] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !expanded) {
        setExpanded(true);
      }
      if (window.scrollY > 600 && !Vision) {
        setVision(true);
      }
      if (window.scrollY > 1000 && !mission) {
        setMission(true);
      }
      if (window.scrollY > 1600 && !capabilities) {
        setCapabilities(true);
      }
      if (window.scrollY > 2000 && !OurTeam) {
        setOurTeam(true);
      }
      if (window.scrollY > 2400 && !Member1) {
        setMember1(true);
      }
      if (window.scrollY > 2400 && !Member2) {
        setMember2(true);
      }
      if (window.scrollY > 2400 && !Member3) {
        setMember3(true);
      }
      if (window.scrollY > 2900 && !WorkWithUs) {
        setWorkWithUs(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expanded, Vision, mission, capabilities, OurTeam, Member1, Member2, Member3, WorkWithUs]);

  const ABOUTUSIntroHeadingRef = useRef(null);
  const ABOUTUSIntroRef = useRef(null);
  const AboutusSpecialityVisionRef = useRef(null);
  const AboutusSpecialityVisionheadingRef = useRef(null);
  const AboutusSpecialityVisiondefinationRef = useRef(null);
  const AboutusSpecialityMissionRef = useRef(null);
  const AboutusSpecialityMissionheadingRef = useRef(null);
  const AboutusSpecialityMissiondefinationRef = useRef(null);
  const AboutusSpecialityCapabilitiesRef = useRef(null);
  const AboutusSpecialityCapabilitiesheadingRef = useRef(null);
  const AboutusSpecialityCapabilitiesdefinationRef = useRef(null);
  const AboutusOurTeamHeadingRef = useRef(null);
  const AboutusOurTeamRef = useRef(null);
  const AboutusMember1Ref = useRef(null);
  const AboutusMember2Ref = useRef(null);
  const AboutusMember3Ref = useRef(null);
  const AboutusMember4Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const ABOUTUSIntro = document.querySelector('.Aboutus-information');
      const AboutusSpecialityVision = document.querySelector('.vision');
      const AboutusSpecialityMission = document.querySelector('.mission');
      const AboutusSpecialityCapabilities = document.querySelector('.Capabilities');
      const AboutusSpecialityOurTeam = document.querySelector('.OurTeam');
      const AboutusSpecialityMember1 = document.querySelector('.Member-1');
      const AboutusSpecialityMember2 = document.querySelector('.Member-2');
      const AboutusSpecialityMember3 = document.querySelector('.Member-3');
      const AboutusSpecialityMember4 = document.querySelector('.Member-4');
      // const AboutusSpecialityOurTeam= document.querySelector('.OurTeam');
      const ABOUTUSIntroPosition = ABOUTUSIntro.getBoundingClientRect().top;
      const AboutusSpecialityVisionPosition = AboutusSpecialityVision.getBoundingClientRect().top;
      const AboutusSpecialityMissionPosition = AboutusSpecialityMission.getBoundingClientRect().top;
      const AboutusSpecialityCapabilitiesPosition = AboutusSpecialityCapabilities.getBoundingClientRect().top;
      const AboutusSpecialityOurTeamPosition = AboutusSpecialityOurTeam.getBoundingClientRect().top;
      const AboutusSpecialityMember1Position = AboutusSpecialityMember1.getBoundingClientRect().top;
      const AboutusSpecialityMember2Position = AboutusSpecialityMember2.getBoundingClientRect().top;
      const AboutusSpecialityMember3Position = AboutusSpecialityMember3.getBoundingClientRect().top;
      const AboutusSpecialityMember4Position = AboutusSpecialityMember4.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (ABOUTUSIntroPosition < screenHeight) {
        ABOUTUSIntroRef.current.classList.add('expanded');
        ABOUTUSIntroHeadingRef.current.classList.add('expanded');
      }
      if (AboutusSpecialityVisionPosition < screenHeight) {
        AboutusSpecialityVisionRef.current.classList.add('expanded');
        AboutusSpecialityVisionheadingRef.current.classList.add('expanded');
        AboutusSpecialityVisiondefinationRef.current.classList.add('expanded');
      }
      if (AboutusSpecialityMissionPosition < screenHeight) {
        AboutusSpecialityMissionRef.current.classList.add('expanded');
        AboutusSpecialityMissionheadingRef.current.classList.add('expanded');
        AboutusSpecialityMissiondefinationRef.current.classList.add('expanded');
      }
      if (AboutusSpecialityCapabilitiesPosition < screenHeight) {
        AboutusSpecialityCapabilitiesRef.current.classList.add('expanded');
        AboutusSpecialityCapabilitiesheadingRef.current.classList.add('expanded');
        AboutusSpecialityCapabilitiesdefinationRef.current.classList.add('expanded');
      }
      if (AboutusSpecialityOurTeamPosition < screenHeight) {
        AboutusOurTeamHeadingRef.current.classList.add('expanded');
        AboutusOurTeamRef.current.classList.add('expanded');
      }
      if (AboutusSpecialityMember1Position < screenHeight) {
        AboutusMember1Ref.current.classList.add('expanded');
      }
      if (AboutusSpecialityMember2Position < screenHeight) {
        AboutusMember2Ref.current.classList.add('expanded');
      }
      if (AboutusSpecialityMember3Position < screenHeight) {
        AboutusMember3Ref.current.classList.add('expanded');
      }
      if (AboutusSpecialityMember4Position < screenHeight) {
        AboutusMember4Ref.current.classList.add('expanded');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className='Background-Black'></div>
      <section className='Aboutus-header-section'>
        <div className='Aboutus-header-section-background'>
          <div className='Aboutus-header-section-backgroundimg'>
            <img src={Background} alt='' />
          </div>
          <div className='calculator-first-section-textdiv'>

            <h1 className='Aboutus-header-section-backgroundtext-title'>ABOUT US</h1>
            <div className='Aboutus-lower-line'></div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />

      <section className='Aboutus-information' >
        <div className={`calculator-defination-div AboutUs`}>
          <h3 className={`Beam-properties-calculator-heading AboutUs `} ref={ABOUTUSIntroHeadingRef}>
            <span>About US</span>
          </h3>
          <div className={`calculator-defination-section-div AboutUs `} ref={ABOUTUSIntroRef}>
            <br />
            <h2 className='Aboutus-information-information'>OOK was founded on July 30th with a vision to revolutionize engineering and education by offering precise,<br /> reliable, and innovative tools for complex problem-solving. Our mission is to drive advancements in<br /> technology and learning, ensuring excellence and innovation in every aspect of <br />our work and transforming the future of these fields.</h2>
          </div>
        </div>
      </section>
      <section className='Aboutus-Speciality'>
        <div className={`calculator-defination-div AboutUsVision`} >
          <div className='vision'>
            <h3 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityVisionRef}>

              <div className='-animation'>
                <motion.div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <GiProgression style={{ fontSize: '5vw', }} />
                </motion.div>
              </div>
            </h3>
            <div className='vision-text'>
              <h1 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityVisionheadingRef}>
                <span>VISION</span></h1>
              <div className={`calculator-defination-section-div AboutUsVision `} ref={AboutusSpecialityVisiondefinationRef}>
                <h2 className='AboutUsVision-h2'>Our vision is to provide groundbreaking and dependable engineering calculators, consistently advancing technological frontiers to empower global society. We strive to facilitate problem-solving and foster accessibility worldwide, revolutionizing engineering</h2>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr style={{ width: '40%' }} />
        <div className={`calculator-defination-div AboutUsVision`}>
          <div className='mission'>
            <h3 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityMissionRef}>

              <div className='-animation'>
                <motion.div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <GiDiceTarget style={{ fontSize: '5vw', }} />
                </motion.div>
              </div>
            </h3>
            <div className='mission-text'>
              <h1 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityMissionheadingRef}>
                <span>MISSION</span></h1>
              <div className={`calculator-defination-section-div AboutUsVision `} ref={AboutusSpecialityMissiondefinationRef}>
                <h2 className='AboutUsVision-h2'>Our mission is to deliver precise and efficient results, enabling engineers and students to attain excellence. We are dedicated to providing innovative solutions that enhance productivity and facilitate success in every aspect of their work.</h2>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr style={{ width: '40%' }} />
        <div className={`calculator-defination-div AboutUsVision Capabilities`}>
          <div className='mission'>
            <h3 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityCapabilitiesRef}>

              <div className='-animation'>
                <motion.div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <GrVulnerability style={{ fontSize: '5vw', }} />
                </motion.div>
              </div>
            </h3>
            <div className='capabilities-text'>
              <h1 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityCapabilitiesheadingRef}>
                <span>CAPABILITIES</span></h1>
              <div className={`calculator-defination-section-div AboutUsVision `} ref={AboutusSpecialityCapabilitiesdefinationRef}>
                <h2 className='AboutUsVision-h2'>Structure Design | Engineering Calculators <br />| Web Designing | Consultancy.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />

      <section className='Aboutus-Meetourteam'>
        <div className={`calculator-defination-div AboutUs OurTeam`}>
          <h3 className={`Beam-properties-calculator-heading AboutUs OurTeam `} ref={AboutusOurTeamHeadingRef}>
            <span>OUR TEAM</span>
          </h3>
          <div className={`calculator-defination-section-div AboutUs OurTeam `} ref={AboutusOurTeamRef}>
            {/* <h1 className='Aboutus-Meetourteam-heading'></h1> */}
            {/* <br /> */}
            <h2 className='Aboutus-Meetourteam-defination'>Our team, featuring highly skilled engineers, software developers, and industry experts,<br /> is devoted to creating innovative and dependable engineering solutions.<br /> We are committed to addressing the diverse needs of both<br /> professionals and students, driving excellence and<br /> technological advancement in all our endeavors.</h2>
          </div>
        </div>
        <div className='Aboutus-Meetourteam-card-main'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            // navigation
            pagination={{ clickable: true }}
            autoplay={false}
            loop={true}
            spaceBetween={3}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1120: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <div className={`calculator-defination-div Member1 Member-1`}>
                <div className={`calculator-defination-section-div Member1 `} ref={AboutusMember1Ref}>
                  <div className='Aboutus-Meetourteam-card Meghaanand'>
                    <div className='Aboutus-Meetourteam-card-img'>
                      <img src={DamanAnand} alt='' />
                    </div>
                    <div className='Aboutus-Meetourteam-card-text'>
                      <div>
                        <h1 className='Aboutus-Meetourteam-card-text-name' style={{ transform: 'translate(45px, 0px)', display: 'grid', gridTemplateColumns: '3fr 1fr', float: 'right', width: '100%', alignItems: 'center' }}>Daman Anand
                          <Link style={{ float: 'right', marginRight: '15px', color: '#2275b4', width: "fit-content", height: '35px' }}  to={`https://www.linkedin.com/in/daman-anand-33b395170`}><FaLinkedin></FaLinkedin></Link>
                        </h1>
                      </div>
                      <br />
                      <h2 className='Aboutus-Meetourteam-card-text-information' style={{ fontSize: '1.5vw', fontStyle: 'italic', fontWeight: '300' }}>Founder</h2>
                      <h2 className='Aboutus-Meetourteam-card-text-information'>With a Bachelor's degree in Mechanical & Automation Engineering, Daman is a skilled Design and Structural Engineer at Dimension Consultants Pte Ltd.<br /><div style={{ marginTop: '0.5vw' }} />His goal is to utilize research and marketing skills, along with providing calculators, to continually foster mutually beneficial relationships between the company and its users.</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`calculator-defination-div Member1 Member-2`}>
                <div className={`calculator-defination-section-div Member1 `} ref={AboutusMember2Ref}>
                  <div className='Aboutus-Meetourteam-card Meghaanand'>
                    <div className='Aboutus-Meetourteam-card-img'>
                      <img src={HimanshuGupta} alt='' />
                    </div>
                    <div className='Aboutus-Meetourteam-card-text'>
                      <div>
                        <h1 className='Aboutus-Meetourteam-card-text-name' style={{ transform: 'translate(45px, 0px)', display: 'grid', gridTemplateColumns: '3fr 1fr', float: 'right', width: '100%', alignItems: 'center' }}>Himanshu Gupta
                          <Link style={{ float: 'right', marginRight: '15px', color: '#2275b4', width: "fit-content", height: '35px' }} to={`https://www.linkedin.com/in/himanshu-gupta-780121198`} ><FaLinkedin></FaLinkedin></Link>
                        </h1>
                      </div>
                      <br />
                      <h2 className='Aboutus-Meetourteam-card-text-information' style={{ fontSize: '1.5vw', fontStyle: 'italic', fontWeight: '300' }}>Quality Assurance</h2>
                      <h2 className='Aboutus-Meetourteam-card-text-information'>Himanshu has a Bachelor's Degree in Mechanical & Automation Engineering, Himanshu is an experienced Mechanical Designer at Dimension Consultants Pte Ltd.<br /><div style={{ marginTop: '0.5vw' }} />Himanshu responsibilities include result verification and handling technical data. He brings exceptional technical skills and a positive attitude to support both our users and the development team.</h2>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`calculator-defination-div Member1 Member-3`}>
                <div className={`calculator-defination-section-div Member1 `} ref={AboutusMember3Ref}>
                  <div className='Aboutus-Meetourteam-card Meghaanand'>
                    <div className='Aboutus-Meetourteam-card-img'>
                      <img src={Megha} alt='' style={{
                        zoom: '1.5',
                        width: '115px',
                        transform: 'translate(0px, 18px)',
                      }}/>
                    </div>
                    <div className='Aboutus-Meetourteam-card-text'>
                      <h1 className='Aboutus-Meetourteam-card-text-name' style={{ transform: 'translate(45px, 0px)', display: 'grid', gridTemplateColumns: '3fr 1fr', float: 'right', width: '100%', alignItems: 'center' }}>Megha
                        <Link style={{ float: 'right', marginRight: '15px', color: '#2275b4', width: "fit-content", height: '35px' }} ></Link>
                      </h1>
                      <br />
                      <h2 className='Aboutus-Meetourteam-card-text-information' style={{ fontSize: '1.5vw', fontStyle: 'italic', fontWeight: '300' }}>Product Developer </h2>

                      <h2 className='Aboutus-Meetourteam-card-text-information'>With a strong background in programming, Megha is a versatile individual who brings extensive knowledge and experience.<br /><div style={{ marginTop: '0.5vw' }} />Megha is dedicated to the development and ongoing maintenance of various OOK Calculators. </h2>
                      <br />
                      <br />
                      <br />
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`calculator-defination-div Member1 Member-4`}>
                <div className={`calculator-defination-section-div Member1 `} ref={AboutusMember4Ref}>
                  <div className='Aboutus-Meetourteam-card Meghaanand'>
                    <div className='Aboutus-Meetourteam-card-img'>
                      <img src={RajeevYadav} alt='' />
                    </div>
                    <div className='Aboutus-Meetourteam-card-text'>
                      <h1 className='Aboutus-Meetourteam-card-text-name' style={{ transform: 'translate(45px, 0px)', display: 'grid', gridTemplateColumns: '3fr 1fr', float: 'right', width: '100%', alignItems: 'center' }}>Rajeev Yadav
                        <Link style={{ float: 'right', marginRight: '15px', color: '#2275b4', width: "fit-content", height: '35px' }} ></Link>
                      </h1>
                      <br />
                      <h2 className='Aboutus-Meetourteam-card-text-information' style={{ fontSize: '1.5vw', fontStyle: 'italic', fontWeight: '300' }}>Senior Product Developer</h2>

                      <h2 className='Aboutus-Meetourteam-card-text-information'>Rajeev Yadav is proficient in supporting web applications, managing server-side operations, and overseeing database management within the Ook Calculator project.</h2>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <br />
        <br />
        <br />
        <section className='cse-header-top' onClick={scrollToTop}>
          <Link smooth="true" duration={500} offset={-70}>
            <GrLinkTop className='' />
          </Link>
        </section>
      </section >
    </>
  )
}
