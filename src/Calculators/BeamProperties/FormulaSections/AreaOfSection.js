import React, { useState, useEffect, useRef } from 'react'

// Side Image
import Areaimg from '../../../images/Beam-Properties-Area-Side-Image.jpg'

// Images
import SquareImg from '../../../images/Beam-Properties-Area-Square.png'
import RectangleImg from '../../../images/Beam-Properties-Rectangle.png'
import HollowReactangleImg from '../../../images/Beam-Properties-Area-Hollow-Rect.png'
import TeeSectionImg from '../../../images/Beam-Properties-Area-T-Section.png'
import ChannelImg from '../../../images/Beam-Properties-Area-C-Channel.png'
import IsectionImg from '../../../images/Beam-Properties-Area-I-Section.png'
import LsectionImg from '../../../images/Beam-Properties-Area-L-Angle.png'
import SolidCircleImg from '../../../images/Beam-Properties-Area-Circle.png'
import HollowcircleImg from '../../../images/Beam-Properties-Area-Hollow-Circle.png'
export default function AreaOfSection() {
    const [isActive, setIsActive] = useState(true);

    const toggleClass = () => {
        setIsActive(!isActive);
    };
    // Black box tranaction
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 1 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);
    // scroll transtion

    const targetRef = useRef(null);

    // Function to handle the button click
    const handleScroll = () => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCombinedClick = () => {
        handleScroll();
        toggleClass();
    };
    return (
        <>
            <section className='structure-analysis-calculator-formula-dropdown-section'>
                <div className="container-fluid text-white bg-black py-4 align-items-center justify-content-center d-flex" style={{ maxWidth: '85%', margin: '0 auto', height: '70vh' }}>
                    <div className="row justify-content-evenly py-4 align-items-center" >
                        {/* Text Column */}
                        <div className="col-lg-6 col-md-12 mb-4 py-0 px-0">
                            <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 ${isVisible ? 'scrolled' : ''}`}>Area of section(A):</h3>
                            <h1 ref={textRef} />
                            <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 defination scrollfromhere  ${isVisible ? 'scrolled' : ''}`}>
                                Total amount of space inside the section.
                            </h3>
                            <button className={`gbp-h3 structure-analysis-calculator-information-h3-button-Discovermore  ${isVisible ? 'scrolled' : ''}`} onClick={handleCombinedClick}>Discover more</button>

                        </div>

                        {/* Image Column */}
                        <div className="col-lg-4 col-md-12">
                            <img
                                src={Areaimg} // Replace with your image URL
                                alt="Placeholder"
                                className="img-fluid"
                                style={{ borderRadius: '20px' }}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <h3 className='calculator-defination-section text-center first-important heading' style={{ fontSize: '2vw', }}>
                    What are the significance of area of sections?
                </h3>
                <h5 className='calculator-defination-section defination text-center second-important' style={{ marginTop: '15px', fontSize: '1.2vw', }}>
                    Used for calculations of stress, strain, and moments of inertia.
                </h5>
                <br />
                <br />
                <h3 className='calculator-defination-section text-center third-important heading' style={{ fontSize: '2vw', }}>
                    What are the inputs to calculate the area of section?
                </h3>
                <h5 className='calculator-defination-section text-center third-important' style={{ marginTop: '15px', fontSize: '1.2vw', }}>
                    Dimension of cross-section
                </h5>
                <br />
                <br />
                <h3 className='calculator-defination-section text-center third-important heading' style={{ fontSize: '2vw', }}>
                    How to calculate the area of cross section?
                </h3>
                <h5 className='calculator-defination-section text-center third-important' style={{ marginTop: '15px', fontSize: '1.2vw', }}>
                    Area of section for various cross section can be calculated by using these formulas:
                </h5>

                <br ref={targetRef} />
                <br />


                <div className={isActive ? 'mae-calculator-info custom-container py-5 ' : 'mae-calculator-info custom-container py-5 active'}>
                    <table className="table custom-table text-center align-middle">
                        <tbody>
                            <tr>
                                <td style={{ width: '30%' }}>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Cross Section Shape</h3>
                                </td>
                                <td style={{ width: '40%' }}>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Formula</h3>
                                </td>
                                <td style={{ width: '30%' }}>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Section Name</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={SquareImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt="Square Diagram"
                                        style={{ width: '18vw', height: '14vw', }} />
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>A = a<sup>2</sup></h3>
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px'>Square</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={RectangleImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt="Rectangle Diagram"
                                        style={{ width: '18vw', height: '14vw', }} />
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>A = d.b</h3>
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Rectangle</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={HollowReactangleImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt="Rectangle Diagram"
                                        style={{
                                            width: '13.5vw',
                                            height: '16vw',
                                        }} />
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>A
                                        <span className='equalesto'>=</span>
                                        (d.b) – (d<span className='LowerPower'>i </span> <span style={{ margin: '0 5px', marginRight: '2px' }}>.</span>b<span className='LowerPower'>i</span>)
                                    </h3>
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Hollow rectangle</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={TeeSectionImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt="Rectangle Diagram" />
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>A
                                        =
                                        t.b
                                        +t
                                        <span className='LowerPowerminus2px'>w</span>
                                        .d</h3>
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Tee Section</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={ChannelImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt="Rectangle Diagram" />
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                        A
                                        <span className='equalesto'>=</span>
                                        t.b+2t
                                        <span className='LowerPowerminus2px'>w</span>

                                        .d</h3>
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>C channel</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={IsectionImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt="Rectangle Diagram" />
                                </td>
                                <td>

                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                        A
                                        <span className='equalesto'>=</span>
                                        t
                                        <span className='LowerPowerminus2px'>w</span>

                                        .d+2t.b</h3>
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>I Section</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img className='structure-analysis-calculator-formula-dropdown-section-img' src={LsectionImg} alt=''
                                        style={{
                                            width: '13vw',
                                            height: '15vw',
                                            transform: 'rotate(-90deg)'
                                        }}
                                    />
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                        A
                                        <span className='equalesto'>=</span>
                                        t(b+d−t)</h3>
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>L section</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img className='structure-analysis-calculator-formula-dropdown-section-img' src={SolidCircleImg} alt=''
                                        style={{
                                            width: '13vw',
                                            height: '15vw',
                                        }} />
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                        A
                                        <span className='equalesto'>=</span>
                                        π.r
                                        <span className='power'>2</span>
                                    </h3>
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Circle</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img className='structure-analysis-calculator-formula-dropdown-section-img' src={HollowcircleImg} alt=''
                                        style={{
                                            width: '15vw',
                                            height: '15vw',
                                        }} />
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                        A
                                        <span className='equalesto'>=</span>
                                        π(r-r
                                        <span className='LowerPower'>i</span>
                                        )
                                    </h3>
                                </td>
                                <td>
                                    <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Hollow circle</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <br />
                <br />
                <h3 className='calculator-defination-section text-center first-important heading' style={{ fontSize: '1.8vw', }}>
                    What are the units of area of cross-section?
                </h3>
                <h5 className='calculator-defination-section text-center second-important' style={{ marginTop: '15px', fontSize: '1.2vw' }}>
                    S.I Units of area of cross-section is mm
                    <span className='power'>2</span>

                </h5>
                <h5 className='calculator-defination-section text-center third-important' style={{ marginTop: '15px', fontSize: '1.2vw' }}>
                    Imperial Units of the area of cross-section is in
                    <span className='power'>2</span>
                    .
                </h5>
                <br />
                <br />
                <br />
                <br />
            </section>
        </>
    )
}
