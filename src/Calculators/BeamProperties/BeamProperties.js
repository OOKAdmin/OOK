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
      if (window.scrollY > 100 && !expanded) {
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
        <div className='calculator-first-section-div'>
          <div className='calculator-first-section-imgdiv' style={{ height: '80vh', overflow: 'hidden' }}>
            <img className='calculator-first-section-imgdiv-img' src={Background} alt='' style={{ transform: 'translate(-9%, -2.5vw)', width: '125%' }} />
            <div className='calculator-first-section-imgdiv-shades' />
          </div>
          <div className='calculator-first-section-textdiv'>
            <h3 className='calculator-first-section-textdiv-h1'>Beam Properties Calculator</h3>
            <p className='calculator-first-section-textdiv-p'>Powerful tool for engineers, architects, and researchers <br />
              to evaluate the behavior of different kinds <br /> of Cross Sections.
            </p>
          </div>
        </div>


        <section className='calculator-defination-section '>
          <br />
          <hr className='Beam-properties-calculator-hr' />
          <div className={`calculator-defination-div SectionModules`}>
            <h3 className={`Beam-properties-calculator-heading SectionModules ${expanded ? 'expanded' : ''}`}>
              <span>OOK Beam Properties Calculator</span>
            </h3>
            <div className={`calculator-defination-section-div SectionModules ${expanded ? 'expanded' : ''}`}>
              <h3 className='calculator-defination-section first-important'>
                Specialized tool designed for the analysis and design<br />
                of structural elements, such as beams, columns,<br />
                shafts, and members of varying cross-sections.<br />
              </h3>
              <br />
              <h3 className='calculator-defination-section second-important'>
                This calculator makes it easier to analyze and optimize section properties in detail for<br />
                structural integrity, efficiency, and safety in a variety of construction projects.<br />
              </h3>
              <br />
              <h3 className='calculator-defination-section third-important'>
                Easily calculate and visualize the geometric properties of various cross-section shapes,<br />
                including Area, Centroid distances, Moments of Inertia, Section Modulus, and<br />
                Torsional Constant essential for structural analysis and design.<br />
              </h3>
            </div>
          </div>
          <hr className='Beam-properties-calculator-hr' />
          <br />
        </section>

        <section className='structure-analysis-calculator-calculator'>
          <div className='structure-analysis-calculator-calculator-left'>
            <br /><br />
            <button onClick={() => handleOptionChange("option1")}>Square</button>
            <button onClick={() => handleOptionChange("option2")}>Rectangle</button>
            <button onClick={() => handleOptionChange("option3")}>Hollow rectangle (rectangle tube)</button>
            <button onClick={() => handleOptionChange("option4")}>Tee section</button>
            <button onClick={() => handleOptionChange("option5")}>Channel section</button>
            <button onClick={() => handleOptionChange("option6")}>I-beam with equal flanges</button>
            <button onClick={() => handleOptionChange("option7")}>L section (unequal legs)</button>
            <button onClick={() => handleOptionChange("option8")}>Solid circle</button>
            <button onClick={() => handleOptionChange("option9")}>Hollow circle or pipe</button>
            <br /><br />
          </div>
          <div className='structure-analysis-calculator-calculator-center center'>
            {selectedOption === 'option1' && (
              <img src={Square} alt="" />
            )}
            {selectedOption === 'option2' && (
              <img src={Rectangle} alt="" />
            )}
            {selectedOption === 'option3' && (
              <img src={HollowRectangle} alt="" style={{height: '565px' }}/>
            )}
            {selectedOption === 'option4' && (
              <img src={TSection} alt="" />
            )}
            {selectedOption === 'option5' && (
              <img src={CChannel} alt=""
                style={{
                  transform: 'translate(5%, 0px)'
                }} />
            )}
            {selectedOption === 'option6' && (
              <img src={IBeam} alt="" style={{height: '565px' }}/>
            )}
            {selectedOption === 'option7' && (
              <img src={LSection} alt="" />
            )}
            {selectedOption === 'option8' && (
              <img src={Circle} alt="" style={{ width: '450px', height: '450px' }} />
            )}
            {selectedOption === 'option9' && (
              <img src={HollowCircle} alt="" />
            )}
          </div>
          <div className='structure-analysis-calculator-calculator-right bemProperties'>
            <h3 className='color-white text-aligh-center'>Input</h3>
            <br />
            {selectedOption === 'option1' && (

              <SquareFile
                togglefunction={isActive3}
                toggleBreaks={toggleClass3}

                MetricOrImperial={MetricOrImperial}
                MetricOrImperialBtn={toggleMetricOrImperial}
              />
            )}
            {selectedOption === 'option2' && (

              <RectangleFile
                togglefunction={isActive3}
                toggleBreaks={toggleClass3}

                MetricOrImperial={MetricOrImperial}
                MetricOrImperialBtn={toggleMetricOrImperial}
              />
            )}
            {selectedOption === 'option3' && (

              <HollowReactangleFile
                togglefunction={isActive3}
                toggleBreaks={toggleClass3}

                MetricOrImperial={MetricOrImperial}
                MetricOrImperialBtn={toggleMetricOrImperial}
              />
            )}
            {selectedOption === 'option4' && (

              <TeeSectionFile
                togglefunction={isActive3}
                toggleBreaks={toggleClass3}

                MetricOrImperial={MetricOrImperial}
                MetricOrImperialBtn={toggleMetricOrImperial}
              />
            )}
            {selectedOption === 'option5' && (

              <ChannelFile
                togglefunction={isActive3}
                toggleBreaks={toggleClass3}

                MetricOrImperial={MetricOrImperial}
                MetricOrImperialBtn={toggleMetricOrImperial}
              />
            )}
            {selectedOption === 'option6' && (

              <IsectionFile
                togglefunction={isActive3}
                toggleBreaks={toggleClass3}

                MetricOrImperial={MetricOrImperial}
                MetricOrImperialBtn={toggleMetricOrImperial}
              />
            )}
            {selectedOption === 'option7' && (

              <LsectionFile
                togglefunction={isActive3}
                toggleBreaks={toggleClass3}

                MetricOrImperial={MetricOrImperial}
                MetricOrImperialBtn={toggleMetricOrImperial}
              />
            )}
            {selectedOption === 'option8' && (

              <SolidCircleFile
                togglefunction={isActive3}
                toggleBreaks={toggleClass3}

                MetricOrImperial={MetricOrImperial}
                MetricOrImperialBtn={toggleMetricOrImperial}
              />
            )}
            {selectedOption === 'option9' && (

              <HollowCircleFile
                togglefunction={isActive3}
                toggleBreaks={toggleClass3}

                MetricOrImperial={MetricOrImperial}
                MetricOrImperialBtn={toggleMetricOrImperial}
              />
            )}
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

        <section className='cse-header-top' onClick={scrollToTop}>
          <Link smooth="true" duration={500} offset={-70}>
            <GrLinkTop className='' />
          </Link>
        </section>
      </section>

    </>
  )
}
