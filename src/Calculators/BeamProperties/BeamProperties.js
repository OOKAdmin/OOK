import React, { useState, useEffect } from 'react'
// Header Background Image
import Background from '../../images/Beam-Properties-Background.jpg'

// Caculator Topic Images
import Square from '../../images/Beam-Properties-Square.png'
import Rectangle from '../../images/Beam-Properties-Rectangle.png'
import HollowRectangle from '../../images/Beam-Properties-Hollow-Rect.png'
import TSection from '../../images/Beam-Properties-T.png'
import CChannel from '../../images/Beam-Properties-C-Channel.png'
import IBeam from '../../images/Beam-Properties-I.jpg'
import LSection from '../../images/Beam-Properties-L.png'
import Circle from '../../images/Beam-Properties-Circle.png'
import HollowCircle from '../../images/Beam-Properties-Hollow-Circle.png'

// CSS
import '../../Css/BeamProperties.css'

// Shape topic Files
import SquareFile from './Topics/SquareFile'
import RectangleFile from './Topics/RectangleFile'
import HollowReactangleFile from './Topics/HollowReactangleFile'
import TeeSectionFile from './Topics/TeeSectionFile'
import ChannelFile from './Topics/ChannelFile'
import IsectionFile from './Topics/IsectionFile'
import LsectionFile from './Topics/LsectionFile'
import SolidCircleFile from './Topics/SolidCircleFile'
import HollowCircleFile from './Topics/HollowCircleFile'
import AreaOfSection from './FormulaSections/AreaOfSection'
import PrincipleAxis from './FormulaSections/PrincipleAxis'
import TorsionalConstant from './FormulaSections/TorsionalConstant'
import SectionModulus from './FormulaSections/SectionModulus'
import AreaMomentsOfInertia from './FormulaSections/AreaMomentsOfInertia'
import Centroid from './FormulaSections/Centroid'

// modules
import { Link } from 'react-router-dom';

// icons
import { GrLinkTop } from "react-icons/gr";

export default function BeamProperties() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const [expanded, setExpanded] = useState(false);
  const [Sectionthird, setSectionthird] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150 && !expanded) {
        setExpanded(true);
      }
      if (window.scrollY > 350 && !Sectionthird) {
        setSectionthird(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expanded, Sectionthird]);

  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  const [isActive3, setIsActive3] = useState(false);

  const toggleClass3 = () => {
    setIsActive3(previsActive3 => !previsActive3);

  };

  const [MetricOrImperial, setMetricOrImperial] = useState("option1");

  const toggleMetricOrImperial = (option) => {
    setMetricOrImperial(option);

  };
  return (
    <>
      <div className='Background-Black'></div>
      <section className='background-white'>
        <div className="position-relative">
          {/* Image section */}
          <div className="position-relative overflow-hidden" style={{ height: '80vh' }}>
            <img
              src={Background}
              alt="Background"
              className=" h-100"
              style={{ objectFit: 'cover', objectPosition: 'center', width: '123%', transform: 'translateX(-9%)' }}
            />
          </div>

          {/* Text section */}
          <div className="container text-left text-black position-absolute top-50 translate-middle"
            style={{
              left: '48%'
            }}
          >
            <h3 className="display-4" style={{fontWeight:'600'}}>Beam Properties Calculator</h3>
            <p className="fs-5">
              Powerful tool for engineers, architects, and researchers to evaluate
              <br />
              the behavior of different kinds of Cross Sections.
            </p>
          </div>
        </div>


        <section className="calculator-definition-section text-center py-5">
          <div className="container">
            <hr className="mb-4" />
            <br />
            <h1
              className={`display-4 mb-4 ${expanded ? "expanded" : ""}`}
              style={{fontWeight:'600'}}
            >
              OOK Beam Properties Calculator
            </h1>

            <div className={`content ${expanded ? "expanded" : ""}`}>
              <p className="first-important lead mb-4" style={{ fontWeight: "500" }}>
                Specialized tool designed for the analysis and design
                <br />
                of structural elements, such as beams, columns,
                <br />
                shafts, and members of varying cross-sections.
              </p>
              <p className="second-important lead mb-4" style={{ fontWeight: "500" }}>
                This calculator makes it easier to analyze and optimize section properties in detail for
                <br />
                structural integrity, efficiency, and safety in a variety of construction projects.
              </p>
              <p className="third-important lead" style={{ fontWeight: "500" }}>
                Easily calculate and visualize the geometric properties of various cross-section shapes,
                <br />
                including Area, Centroid distances, Moments of Inertia, Section Modulus, and
                <br />
                Torsional Constant essential for structural analysis and design.
              </p>
            </div>

            <hr className="mt-4" />
          </div>
        </section>

        <section className="container-fluid py-4 justify-content-center align-items-center d-flex">
          <div className="row structure-analysis-calculator-calculator">
            {/* Left Section */}
            <div className="col text-center py-5 structure-analysis-calculator-calculator-left ps-0 pe-0" style={{flex: '0 0 29%'}}>
              <div className="d-flex flex-column gap-0 w-100 text-center" style={{justifyContent:'center', alignItems:'center'}}>
                <button className="btn mb-2 text-center" onClick={() => handleOptionChange("option1")}>Square</button>
                <button className="btn mb-2 text-center" onClick={() => handleOptionChange("option2")}>Rectangle</button>
                <button className="btn mb-2 text-center" onClick={() => handleOptionChange("option3")}>Hollow rectangle (rectangle tube)</button>
                <button className="btn mb-2 text-center" onClick={() => handleOptionChange("option4")}>Tee section</button>
                <button className="btn mb-2 text-center" onClick={() => handleOptionChange("option5")}>Channel section</button>
                <button className="btn mb-2 text-center" onClick={() => handleOptionChange("option6")}>I-beam with equal flanges</button>
                <button className="btn mb-2 text-center" onClick={() => handleOptionChange("option7")}>L section (unequal legs)</button>
                <button className="btn mb-2 text-center" onClick={() => handleOptionChange("option8")}>Solid circle</button>
                <button className="btn mb-2 text-center" onClick={() => handleOptionChange("option9")}>Hollow circle or pipe</button>
              </div>
            </div>

            {/* Center Section */}
            <div className="col text-center py-3 structure-analysis-calculator-calculator-center bg-white justify-content-center align-items-center d-flex" style={{flex: '0 0 44%'}}>
              {selectedOption === 'option1' && <img src={Square} alt="Square" className="img-fluid" />}
              {selectedOption === 'option2' && <img src={Rectangle} alt="Rectangle" className="img-fluid" />}
              {selectedOption === 'option3' && <img src={HollowRectangle} alt="Hollow Rectangle" className="img-fluid custom-img" />}
              {selectedOption === 'option4' && <img src={TSection} alt="Tee Section" className="img-fluid" />}
              {selectedOption === 'option5' && <img src={CChannel} alt="Channel Section" className="img-fluid custom-transform" />}
              {selectedOption === 'option6' && <img src={IBeam} alt="I-beam" className="img-fluid custom-img" />}
              {selectedOption === 'option7' && <img src={LSection} alt="L Section" className="img-fluid" />}
              {selectedOption === 'option8' && <img src={Circle} alt="Solid Circle" className="img-fluid custom-circle" />}
              {selectedOption === 'option9' && <img src={HollowCircle} alt="Hollow Circle" className="img-fluid" />}
            </div>

            {/* Right Section */}
            <div className="col text-center py-3 bemProperties structure-analysis-calculator-calculator-right" style={{flex: '0 0 27%'}}>
              <h3 className="text-white">Input</h3>
              <div className="mt-3">
                {selectedOption === 'option1' && <SquareFile togglefunction={isActive3} toggleBreaks={toggleClass3} MetricOrImperial={MetricOrImperial} MetricOrImperialBtn={toggleMetricOrImperial} />}
                {selectedOption === 'option2' && <RectangleFile togglefunction={isActive3} toggleBreaks={toggleClass3} MetricOrImperial={MetricOrImperial} MetricOrImperialBtn={toggleMetricOrImperial} />}
                {selectedOption === 'option3' && <HollowReactangleFile togglefunction={isActive3} toggleBreaks={toggleClass3} MetricOrImperial={MetricOrImperial} MetricOrImperialBtn={toggleMetricOrImperial} />}
                {selectedOption === 'option4' && <TeeSectionFile togglefunction={isActive3} toggleBreaks={toggleClass3} MetricOrImperial={MetricOrImperial} MetricOrImperialBtn={toggleMetricOrImperial} />}
                {selectedOption === 'option5' && <ChannelFile togglefunction={isActive3} toggleBreaks={toggleClass3} MetricOrImperial={MetricOrImperial} MetricOrImperialBtn={toggleMetricOrImperial} />}
                {selectedOption === 'option6' && <IsectionFile togglefunction={isActive3} toggleBreaks={toggleClass3} MetricOrImperial={MetricOrImperial} MetricOrImperialBtn={toggleMetricOrImperial} />}
                {selectedOption === 'option7' && <LsectionFile togglefunction={isActive3} toggleBreaks={toggleClass3} MetricOrImperial={MetricOrImperial} MetricOrImperialBtn={toggleMetricOrImperial} />}
                {selectedOption === 'option8' && <SolidCircleFile togglefunction={isActive3} toggleBreaks={toggleClass3} MetricOrImperial={MetricOrImperial} MetricOrImperialBtn={toggleMetricOrImperial} />}
                {selectedOption === 'option9' && <HollowCircleFile togglefunction={isActive3} toggleBreaks={toggleClass3} MetricOrImperial={MetricOrImperial} MetricOrImperialBtn={toggleMetricOrImperial} />}
              </div>
            </div>
          </div>
        </section>



         <div className={isActive3 ? ' height110 ' : ' height110 height0 '} ></div>

        <br />
        <br />
        <br />
        <br />
        <hr className="Beam-properties-calculator-hr"></hr>
        <br />
        <br />
        <br />
        <AreaOfSection />
        <hr className="Beam-properties-calculator-hr"></hr>
        <br />
        <br />
        <br />
        <PrincipleAxis />
        <br />
        <br />
        <br />
        <br />
        <hr className="Beam-properties-calculator-hr"></hr>
        <br />
        <br />
        <br />
        <br />
       <Centroid />
        <hr className="Beam-properties-calculator-hr"></hr>
        <br />
        <br />
        <br />
        <br />
        <br />
         <AreaMomentsOfInertia />
        <hr className="Beam-properties-calculator-hr"></hr>
        <br />
        <br />
        <br />
        <br />
        <SectionModulus />
        <hr className="Beam-properties-calculator-hr"></hr>
        <br />
        <br />
        <br />
        <br />
        <TorsionalConstant />

        {/*<section className='cse-header-top' onClick={scrollToTop}>
          <Link smooth="true" duration={500} offset={-70}>
            <GrLinkTop className='' />
          </Link>
        </section> */}
      </section>

    </>
  )
}
