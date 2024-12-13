import React, { useState, useEffect } from 'react'

// modules
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Link } from 'react-router-dom';

// images
import Background from '../../images/BeamDeflaction-FirstSection-Background.jpg'
import CrossSectionImg from '../../images/beam deflection image/cross section.png'
import YoungsModulusImg from '../../images/beam deflection image/youngs modulus.jpg'
import FixedSupportSymbolsImg from '../../images/beam deflection image/fixed support symbol.png'
import PinnedSupportSymbolsImg from '../../images/beam deflection image/BeamDeflaction-Blackbox-Pined-support.png'
import RollerSupportSymbolsImg from '../../images/beam deflection image/BeamDeflaction-Blackbox-roller-support.png'
import PointLoadSymbolsImg from '../../images/beam deflection image/point load symbol.png'
import PointLoadSymbolsForReactionsImg from '../../images/beam deflection image/point load symbol for reactions.png'
import DistributedLoadSymbolsImg from '../../images/beam deflection image/distributed support symbol.png'
import Non_DistributedLoadSymbolsImg1 from '../../images/beam deflection image/non distributed support symbol 01.png'
import Non_DistributedLoadSymbolsImg2 from '../../images/beam deflection image/non distributed support symbol 02.png'

// Files
import OutputParameterFile from './FormulaSections/OutputParameterFile';
import InputsParametersFile from './FormulaSections/InputsParametersFile';
import OutputsofDeflection from './Topics/OutputsofDeflection';
import LengthOfBeam from './Topics/LengthOfBeam';
import YoungsModules from './Topics/YoungsModules';
import CrossSection from './Topics/CrossSection';
import SupportPage from './Topics/SupportPage';
import LoadPage from './Topics/LoadPage';

// CSS
import '../../Css/BeamDeflection.css';
import '../../Css/NumberLine.css'

// icons
import { GrLinkTop } from "react-icons/gr";


Chart.register(...registerables);

export default function BeamDeflection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  const [isActive3, setIsActive3] = useState(false);

  const toggleClass3 = () => {

    setIsActive3(true);
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



  // Deflection function code

  const YoungModulessunits = ['Mpa', 'Pa'];
  const YoungModulessConversionFactors = {
    Mpa: [1, 1e6],
    Pa: [1e-6, 1],
  };
  const [youngModules, setYoungModulessValue] = useState(0);
  const [YoungModulesselectedUnit, setYoungModulessSelectedUnit] = useState('Mpa');
  const [YoungModulessInMPa, setYoungModulessInMPa] = useState(0);

  const handleYoungModulesChange = (value) => {
    setYoungModulessValue(value);
    const factor = YoungModulessConversionFactors[YoungModulesselectedUnit][0];
    setYoungModulessInMPa(parseFloat(value) * factor);
  };

  const handleYoungModuleschange = (unit) => {
    let newValue = parseFloat(youngModules);
    if (unit === 'Pa' && YoungModulesselectedUnit === 'Mpa') {
      newValue *= 1e6;
      if (newValue >= 1000) {
        newValue = newValue.toExponential(3);
      }
    } else if (unit === 'Mpa' && YoungModulesselectedUnit === 'Pa') {
      newValue /= 1e6;
    }
    setYoungModulessSelectedUnit(unit);
    setYoungModulessValue(isNaN(newValue) ? 0 : newValue);
  };


  const [area, setArea] = useState(0);
  const [areaSelectedUnit, setareaSelectedUnit] = useState('mm²');
  const [internalareaValue, setInternalareaValue] = useState(0); // Always in mm
  const areaUnits = ['mm²', 'm²'];
  const areaMetricConversionFactors = {
    'mm²': [1, 1e-6], // 1 mm² = 1e-6 m²
    'm²': [1e6, 1],   // 1 m² = 1e6 mm²
  };

  const handleareaInputChange = (value) => {
    setArea(value);
    const factor = areaMetricConversionFactors[areaSelectedUnit][0];
    setInternalareaValue(parseFloat(value) * factor);
  };

  const handleareaUnitChange = (unit) => {
    const newMetricValueInMM = parseFloat(area) * areaMetricConversionFactors[areaSelectedUnit][0];
    const convertedValue = newMetricValueInMM / areaMetricConversionFactors[unit][0];
    setareaSelectedUnit(unit);
    setArea(isNaN(convertedValue) ? 0 : convertedValue);
  };

  const [inertia, setInertia] = useState(0);
  const [InertiaSelectedUnit, setInertiaSelectedUnit] = useState('mm⁴');
  const [internalInertiaValue, setInternalInertiaValue] = useState(0); // Always in mm
  const InertiaUnits = ['mm⁴', 'm⁴'];
  const InertiaMetricConversionFactors = {
    'mm⁴': [1, 1e-12], // 1 mm⁴ = 1e-12 m⁴
    'm⁴': [1e12, 1],   // 1 m⁴ = 1e12 mm⁴
  };

  const handleInertiaInputChange = (value) => {
    setInertia(value);
    const factor = InertiaMetricConversionFactors[InertiaSelectedUnit][0];
    setInternalInertiaValue(parseFloat(value) * factor);
  };

  const handleInertiaUnitChange = (unit) => {
    const newMetricValueInMM = parseFloat(inertia) * InertiaMetricConversionFactors[InertiaSelectedUnit][0];
    const convertedValue = newMetricValueInMM / InertiaMetricConversionFactors[unit][0];
    setInertiaSelectedUnit(unit);
    setInertia(isNaN(convertedValue) ? 0 : convertedValue);
  };

  const [supports, setSupports] = useState([{ type: 'fixed', position: 0 }]);
  const [pointLoads, setPointLoads] = useState([{ position: 0, magnitude: 10000 }]);
  const [pointLoadSelectedUnit, setPointLoadSelectedUnit] = useState('KN'); // Default unit is Newton



  const [distributedLoads, setDistributedLoads] = useState([
    { start_position: 0, end_position: 0, start_magnitude: 0, end_magnitude: 0 },
  ]);
  const [distributedLoadSelectedUnit, setDistributedLoadSelectedUnit] = useState('KN/m'); // Default unit is Newton/meter


  const [reactionData, setReactionData] = useState([]);
  const [deflectionData, setDeflectionData] = useState([]);
  const [shearForceData, setShearForceData] = useState([]);
  const [bendingMomentData, setBendingMomentData] = useState([]);
  const handlePointLoadChange = (index, field, value) => {
    const newPointLoads = [...pointLoads];
    newPointLoads[index][field] = Number(value);
    setPointLoads(newPointLoads);
  };

  const handleDistributedLoadChange = (index, field, value) => {
    const newDistributedLoads = [...distributedLoads];
    newDistributedLoads[index][field] = Number(value);
    setDistributedLoads(newDistributedLoads);
  };

  const handleSupportChange = (index, field, value) => {
    const newSupports = [...supports];
    newSupports[index][field] = value;
    setSupports(newSupports);
  };

  const addSupport = () => {
    setSupports([...supports, { type: 'fixed', position: 0 }]);
  };

  const addPointLoad = () => {
    setPointLoads([...pointLoads, { position: 0, magnitude: 0 }]);
  };

  const addDistributedLoad = () => {
    setDistributedLoads([...distributedLoads, { start_position: 0, end_position: 0, start_magnitude: 0, end_magnitude: 0 }]);
  };


  const [length, setLength] = useState(2000); // Length in selected unit
  const [internalLengthValue, setInternalLengthValue] = useState(0); // Always in mm
  const [lengthSelectedUnit, setLengthSelectedUnit] = useState('mm');
  const LengthUnits = ['mm', 'm'];
  const LengthMetricConversionFactors = {
    mm: [1, 0.001],
    m: [1000, 1],
  };

  // Handle input change for length
  const handleLengthInputChange = (value) => {
    setLength(value);
    const factor = LengthMetricConversionFactors[lengthSelectedUnit][0];
    setInternalLengthValue(parseFloat(value) * factor);
  };

  // Handle unit change for length
  const handleLengthUnitChange = (unit) => {
    const newMetricValueInMM = parseFloat(length) * LengthMetricConversionFactors[lengthSelectedUnit][0];
    const convertedValue = newMetricValueInMM / LengthMetricConversionFactors[unit][0];
    setLengthSelectedUnit(unit);
    setLength(isNaN(convertedValue) ? 0 : convertedValue);
  };

  // Dynamically calculate step size
  const calculateStepSize = () => {
    const desiredLabels = 5; // Target number of labels
    const range = length; // Use length in the selected unit for display
    if (range < 10) {
      return 0.5; // Show points for small ranges
    }
    return Math.ceil(range / desiredLabels / 5) * 5; // Round to nearest 5 for clean steps
  };

  const step = calculateStepSize(); // Calculate step size
  const values = Array.from({ length: Math.ceil(length / step) + 1 }, (_, i) => i * step);

  // Get the image source based on the support type
  const getSupportImage = (type) => {
    switch (type) {
      case "fixed":
        return FixedSupportSymbolsImg; // Replace with your image path
      case "roller":
        return RollerSupportSymbolsImg; // Replace with your image path
      case "pinned":
        return PinnedSupportSymbolsImg; // Replace with your image path
      default:
        return "";
    }
  };

  // Send data to the backend
  const sendData = () => {
    axios
      .post(
        'http://127.0.0.1:5000', // Ensure this matches your Flask host and port
        {
          length: Number(length), // Use internalLengthValue in mm for the backend
          youngmodules: Number(youngModules),
          area: Number(area),
          inertia: Number(inertia),
          supports: supports.map((s) => ({ type: s.type, position: Number(s.position) })),
          point_loads: pointLoads,
          distributed_loads: distributedLoads,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setReactionData(response.data.reactions);
        setDeflectionData(response.data.deflection_data);
        setShearForceData(response.data.shear_force_data);
        setBendingMomentData(response.data.bending_moment_data);
        console.log('Response from Flask:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  const deflectionChartData = {
    labels: deflectionData.map(item => item.position),
    datasets: [
      {
        fill: true,
        borderColor: '#1f77b4',
        backgroundColor: 'rgba(31, 119, 180, 0.1)',
        pointBackgroundColor: '#1f77b4',
        pointBorderColor: '#fff',
        data: deflectionData.map(item => item.deflection),
        pointRadius: 0,
      },
    ],
  };

  const shearForceChartData = {
    labels: shearForceData.map(item => item.position),
    datasets: [
      {
        fill: true,
        borderColor: '#1f77b4',
        backgroundColor: 'rgba(31, 119, 180, 0.1)',
        pointBackgroundColor: '#1f77b4',
        pointBorderColor: '#fff',
        pointRadius: 0,
        data: shearForceData.map(item => item.shear_force),
      },
    ],
  };

  const bendingMomentChartData = {
    labels: bendingMomentData.map(item => item.position),
    datasets: [
      {
        fill: true,
        borderColor: '#1f77b4',
        backgroundColor: 'rgba(31, 119, 180, 0.1)',
        pointBackgroundColor: '#1f77b4',
        pointBorderColor: '#fff',
        pointRadius: 0,
        data: bendingMomentData.map(item => item.bending_moment),
      },
    ],
  };

  // const beamLength = 1000; // Example beam length in mm, replace with your actual beam length

  const shearForceChartDataoptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Length',
        },
        ticks: {
          maxTicksLimit: 8,

        },
      },
      y: {
        title: {
          display: true,
          text: 'Shear Force ',
        },
        ticks: {
          maxTicksLimit: 5,
          callback: function (value) {
            // Format ticks for the y-axis
            return value >= 1_000_000
              ? `${value / 1_000_000}M`
              : value >= 1_000
                ? `${value / 1_000}k`
                : value <= -1_000_000
                  ? `${value / 1_000_000}M`
                  : value <= -1_000
                    ? `${value / 1_000}k`
                    : value;
          },
        },
      },
    },
  };

  const bendingMomentChartDataoptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Length',
        },
        ticks: {
          maxTicksLimit: 8,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Bending Moment',
        },
        ticks: {
          maxTicksLimit: 5,
          callback: function (value) {
            // Format ticks for the y-axis
            return value >= 1_000_000
              ? `${value / 1_000_000}M`
              : value >= 1_000
                ? `${value / 1_000}k`
                : value <= -1_000_000
                  ? `${value / 1_000_000}M`
                  : value <= -1_000
                    ? `${value / 1_000}k`
                    : value;
          },
        },
      },
    },
  };
  const deflectionChartDataoptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Length',
        },
        ticks: {
          maxTicksLimit: 8,
        },
        max: length, // Ensure the last tick aligns with the beam length
      },
      y: {
        title: {
          display: true,
          text: 'Deflection '
        },
        ticks: {
          maxTicksLimit: 5,
          callback: function (value) {
            // Format ticks for the y-axis
            return value >= 1_000_000
              ? `${value / 1_000_000}M`
              : value >= 1_000
                ? `${value / 1_000}k`
                : value <= -1_000_000
                  ? `${value / 1_000_000}M`
                  : value <= -1_000
                    ? `${value / 1_000}k`
                    : value;
          },
        },
      },
    },
  };


  return (
    <>
      <div className='Background-Black'></div>
      <section className='background-white'>
        <div className='calculator-first-section-div'>
          <div className='calculator-first-section-imgdiv' style={{ height: '80vh', overflow: 'hidden' }}>
            <img className='calculator-first-section-imgdiv-img' src={Background} alt='' style={{ transform: 'translate(3vw, -5vw)' }} />
            <div className='calculator-first-section-imgdiv-shades' />
          </div>
          <div className='calculator-first-section-textdiv' style={{ top: '10vw' }}>
            <h3 className='calculator-first-section-textdiv-h1'>Beam Deflection Calculator</h3>
            <p className='calculator-first-section-textdiv-p'>
              Beam Deflection Calculator is a powerful tool used by<br />
              engineers and architects for analyzing the behavior of<br />
              beams under various loading conditions.
            </p>
          </div>
        </div>
        <section className='calculator-defination-section '>
          <br />
          <hr className='Beam-properties-calculator-hr' />
          <br />
          <div className={`calculator-defination-div BeamDeflection`}>
            <h3 className={`Beam-properties-calculator-heading BeamDeflection ${expanded ? 'expanded' : ''}`}>
              <span>Beam Deflection Calculator</span>
            </h3>
            <div className={`calculator-defination-section-div BeamDeflection ${expanded ? 'expanded' : ''}`}>
              <h3 className='Beam-properties-calculator-heading'>
                <span></span>
              </h3>
              <br />
              <br />
              <h3 className='calculator-defination-section first-important'>
                With the help of the Beam Deflection Calculator, you can easily<br />
                examine how different kinds of beams deflect under various loading scenarios.<br />
                Beam deflection is an important aspect in structural engineering and construction.

              </h3>
              <br />
              <h3 className='calculator-defination-section second-important'>
                It ensures the structural integrity of the beam and helps to prevent any potential  deformation or<br /> damage. You can easily find the deflection at any point along the length of the beam<br />  by entering parameters like the beam's material, dimensions, and applied loads.

              </h3>
              <br />
              <h3 className='calculator-defination-section third-important'>
                By using this calculator you can easily find the beam's reactions,<br />  maximum deflection, bending moment & shear stress.

              </h3>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr className='Beam-properties-calculator-hr' />
          <br />
          <br />
          <br />
          <section className='structure-analysis-calculator-calculator'>
            <div className='structure-analysis-calculator-calculator-left'>
              <br /><br />
              <button onClick={() => handleOptionChange("option1")}>Length of Beam</button>
              <button onClick={() => handleOptionChange("option2")}>Young's Modules</button>
              <button onClick={() => handleOptionChange("option3")}>Cross Section</button>
              <button onClick={() => handleOptionChange("option4")}>Support</button>
              <button onClick={() => handleOptionChange("option5")}>Load</button>
              <br /><br />
            </div>
            <div className='structure-analysis-calculator-calculator-center center'>
              {selectedOption === 'option1' && (
                <div className='CenterofDeflectionCalculator' style={{ width: '90%' }}>
                  <div className="number-line-container">
                    <div className="line" />
                    <div className="numbers">
                      {values.map((value, index) => (
                        <span
                          key={index}
                          className="number"
                          style={{
                            left: `${(value / length) * 100}%`, // Position each number dynamically
                          }}
                        >
                          {value.toLocaleString()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {selectedOption === 'option2' && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={YoungsModulusImg} alt='' style={{ width: '100%' }} />
                </div>
              )}
              {selectedOption === 'option3' && (
                <div>
                  <img src={CrossSectionImg} alt='' />
                </div>
              )}
              {selectedOption === 'option4' && (
                <div className='CenterofDeflectionCalculator' style={{ width: '90%' }}>
                  <div className="number-line-container">
                    {/* Line */}
                    <div className="line">
                      {/* Render Supports Dynamically */}
                      {supports.map((support, index) => (
                        <img
                          key={index}
                          src={getSupportImage(support.type)}
                          alt={support.type}
                          className="support-image"
                          style={{
                            left: `${(support.position / length) * 100}%`, // Calculate position dynamically
                            width: 'auto',
                            height: '15px',
                          }}
                        />
                      ))}
                    </div>

                    {/* Render Numbers Dynamically */}
                    <div className="numbers">
                      {values.map((value, index) => (
                        <span
                          key={index}
                          className="number"
                          style={{
                            left: `${(value / length) * 100}%`, // Position each number dynamically
                          }}
                        >
                          {value.toLocaleString()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {selectedOption === 'option5' && (
                <div className='CenterofDeflectionCalculator' style={{ width: '90%' }}>
                  <div className="number-line-container load">
                    {/* Line */}
                    <div className="line">
                      {/* Render Distributed Loads Dynamically */}
                      {distributedLoads.map((load, index) => (
                        <div
                          key={index}
                          className="distributed-load-container"
                          style={{
                            left: `${(load.start_position / length) * 100}%`, // Starting position of the distributed load
                            width: `${((load.end_position - load.start_position) / length) * 100}%`, // Length of the distributed load
                          }}
                        >
                          {((load.start_magnitude > load.end_magnitude && load.end_position > 0) || (load.end_magnitude < load.start_magnitude && load.start_position > 0)) && (
                            <>
                              <div className="distributed-load-magnitude">
                                <div>{load.start_magnitude}</div>
                                <div>{load.end_magnitude}</div>
                              </div>
                              <img
                                src={Non_DistributedLoadSymbolsImg2}
                                alt="Distributed Load"
                                className="distributed-load-image"
                              />
                            </>
                          )}
                          {((load.end_magnitude > load.start_magnitude && load.end_position > 0) || (load.start_magnitude < load.end_magnitude && load.start_position > 0)) && (
                            <>
                              <div className="distributed-load-magnitude">
                                <div>{load.start_magnitude}</div>
                                <div>{load.end_magnitude}</div>
                              </div>
                              <img
                                src={Non_DistributedLoadSymbolsImg1}
                                alt="Distributed Load"
                                className="distributed-load-image"
                              />
                            </>
                          )}
                          {((load.start_magnitude !== 0 || load.end_magnitude !== 0 || load.start_position !== 0 || load.end_position !== 0) &&
                            ((load.end_magnitude === load.start_magnitude) || (load.end_position > 0 && load.start_position > 0))) && (
                              <>
                                <div className="distributed-load-magnitude">
                                  <div>{load.start_magnitude}</div>
                                  <div>{load.end_magnitude}</div>
                                </div>
                                <img
                                  src={DistributedLoadSymbolsImg}
                                  alt="Distributed Load"
                                  className="distributed-load-image"
                                />
                              </>
                            )}

                        </div>
                      ))}
                    </div>

                    {pointLoads.map((pointLoad, index) => (
                      <div
                        key={index}
                        className="point-load-container"
                        style={{
                          left: `${(pointLoad.position / length) * 100}%`, // Calculate position dynamically
                        }}
                      >
                        {/* Point Load Magnitude */}

                        {/* Point Load Icon - Render only if more than one point load */}
                        {(pointLoad.position > 0 || pointLoad.magnitude > 0) && (
                          <>
                            <div className="point-load-magnitude">{pointLoad.magnitude}</div>
                            <img
                              src={PointLoadSymbolsImg}
                              alt="PL"
                              className="point-load-image"
                            />
                          </>
                        )}
                      </div>
                    ))}

                    {/* Render Numbers Dynamically */}
                    <div className="numbers">
                      {values.map((value, index) => (
                        <span
                          key={index}
                          className="number"
                          style={{
                            left: `${(value / length) * 100}%`, // Position each number dynamically
                          }}
                        >
                          {value.toLocaleString()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              )}
            </div>
            <div className='structure-analysis-calculator-calculator-right'>
              <br />
              {selectedOption === 'option1' && (
                <>
                  <LengthOfBeam
                    // lengthValue={length}
                    // lengthonChange={(e) => setLength(e.target.value)}
                    lengthValue={length}
                    LengthSelectedUnit={lengthSelectedUnit}
                    lengthonChange={((e) => handleLengthInputChange(e.target.value))}
                    LengthselectedUnitOnchange={((e) => handleLengthUnitChange(e.target.value))}
                    LengthUnitOption={
                      LengthUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))
                    }
                  />
                  <OutputsofDeflection
                    reactionData={
                      <div className="number-line-container">
                        {/* Line */}
                        <div className="line">

                        {reactionData && reactionData.length > 0 && (
                            <div>
                              {/* <h3>Reactions:</h3> */}
                              <div>
                                {reactionData.map((reaction, index) => (
                                  <>
                                    <img className="reaction-img" key={index} src={PointLoadSymbolsForReactionsImg} alt='reaction' style={{ position: 'absolute', top: '100%', width: '15px', height: '40px', transform: 'translate(-50%,0%)', left: `${(reaction.position / length) * 100}%`, }} />
                                    <span
                                      key={`position-${index}`}
                                      className="reaction-indicator"
                                    style={{ left: `${(reaction.position / length) * 100}%`, top: '0%' }}
                                    >
                                      Position: {reaction.position} mm{index < reactionData.length - 1 ? ', ' : ''}<br />
                                      Force: {(reaction.force)} N{index < reactionData.length - 1 ? ', ' : ''}<br />
                                      Moment: {(reaction.momentum)} N.m{index < reactionData.length - 1 ? ', ' : ''}
                                    </span>
                                  </>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>

                        <div className="numbers">
                          {values.map((value, index) => (
                            <span
                              key={index}
                              className="number"
                              style={{
                                left: `${(value / length) * 100}%`, // Position each number dynamically
                              }}
                            >
                              {value.toLocaleString()}
                            </span>
                          ))}
                        </div>
                      </div>}

                    deflectionChartData={
                      <Line data={deflectionChartData} options={deflectionChartDataoptions} width="200px" height="100px" />
                    }

                    shearForceChartData={
                      <Line data={shearForceChartData} options={shearForceChartDataoptions} width="200px" height="100px" />
                    }

                    bendingMomentChartData={
                      <Line data={bendingMomentChartData} options={bendingMomentChartDataoptions} width="200px" height="100px" />
                    }

                    togglefunction={isActive3}
                    toggleBreaks={toggleClass3}
                    sendData={sendData}

                  />

                </>
              )}
              {selectedOption === 'option2' && (
                <>
                  <YoungsModules
                    // YoungModules
                    // youngModulesValue={youngModules}
                    // youngModulesOnchange={(e) => setYoungModules(e.target.value)}
                    YoungModulesValue={youngModules}
                    YoungModulesselectedUnit={YoungModulesselectedUnit}
                    YoungModulesValueOnchange={((e) => handleYoungModulesChange(e.target.value))}
                    YoungModulesselectedunitOnchange={((e) => handleYoungModuleschange(e.target.value))}
                    YoungModulesoptions={
                      YoungModulessunits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))
                    }
                  />
                  <OutputsofDeflection
                    AddYoungsModulesClass={selectedOption === "option2"}

                    reactionData={
                      <div className="number-line-container">
                        {/* Line */}
                        <div className="line">

                        {reactionData && reactionData.length > 0 && (
                            <div>
                              {/* <h3>Reactions:</h3> */}
                              <div>
                              {reactionData.map((reaction, index) => (
                                  <>
                                    <img className="reaction-img" key={index} src={PointLoadSymbolsForReactionsImg} alt='reaction' style={{ position: 'absolute', top: '100%', width: '15px', height: '40px', transform: 'translate(-50%,0%)', left: `${(reaction.position / length) * 100}%`, }} />
                                    <span
                                      key={`position-${index}`}
                                      className="reaction-indicator"
                                    style={{ left: `${(reaction.position / length) * 100}%`, top: '0%' }}
                                    >
                                      Position: {reaction.position} mm{index < reactionData.length - 1 ? ', ' : ''}<br />
                                      Force: {(reaction.force)} N{index < reactionData.length - 1 ? ', ' : ''}<br />
                                      Moment: {(reaction.momentum)} N.m{index < reactionData.length - 1 ? ', ' : ''}
                                    </span>
                                  </>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>

                        <div className="numbers">
                          {values.map((value, index) => (
                            <span
                              key={index}
                              className="number"
                              style={{
                                left: `${(value / length) * 100}%`, // Position each number dynamically
                              }}
                            >
                              {value.toLocaleString()}
                            </span>
                          ))}
                        </div>
                      </div>}

                    deflectionChartData={
                      <Line data={deflectionChartData} options={deflectionChartDataoptions} width='200px' height='100px' />
                    }
                    shearForceChartData={
                      <Line data={shearForceChartData} options={shearForceChartDataoptions} width='200px' height='100px' />
                    }
                    bendingMomentChartData={
                      <Line data={bendingMomentChartData} options={bendingMomentChartDataoptions} width='200px' height='100px' />
                    }
                    togglefunction={isActive3}
                    toggleBreaks={toggleClass3}
                    sendData={sendData}

                  />
                </>
              )}
              {selectedOption === 'option3' && (
                <>
                  <CrossSection
                    // areaValue={area}
                    // areaOnChange={(e) => setArea(e.target.value)}

                    areaValue={area}
                    areaSelectedUnit={areaSelectedUnit}
                    areaonChange={((e) => handleareaInputChange(e.target.value))}
                    areaselectedUnitOnchange={((e) => handleareaUnitChange(e.target.value))}
                    areaUnitOption={
                      areaUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))
                    }

                    // inertiaValue={inertia}
                    // inertiaOnChange={(e) => setInertia(e.target.value)}
                    inertiaValue={inertia}
                    inertiaSelectedUnit={InertiaSelectedUnit}
                    inertiaonChange={((e) => handleInertiaInputChange(e.target.value))}
                    inertiaselectedUnitOnchange={((e) => handleInertiaUnitChange(e.target.value))}
                    inertiaUnitOption={
                      InertiaUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))
                    }
                  />
                  <OutputsofDeflection
                    AddCrossSectionClass={selectedOption === "option3"}

                    reactionData={
                      <div className="number-line-container">
                        {/* Line */}
                        <div className="line">

                        {reactionData && reactionData.length > 0 && (
                            <div>
                              {/* <h3>Reactions:</h3> */}
                              <div>
                              {reactionData.map((reaction, index) => (
                                  <>
                                    <img className="reaction-img" key={index} src={PointLoadSymbolsForReactionsImg} alt='reaction' style={{ position: 'absolute', top: '100%', width: '15px', height: '40px', transform: 'translate(-50%,0%)', left: `${(reaction.position / length) * 100}%`, }} />
                                    <span
                                      key={`position-${index}`}
                                      className="reaction-indicator"
                                    style={{ left: `${(reaction.position / length) * 100}%`, top: '0%' }}
                                    >
                                      Position: {reaction.position} mm{index < reactionData.length - 1 ? ', ' : ''}<br />
                                      Force: {(reaction.force)} N{index < reactionData.length - 1 ? ', ' : ''}<br />
                                      Moment: {(reaction.momentum)} N.m{index < reactionData.length - 1 ? ', ' : ''}
                                    </span>
                                  </>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>

                        <div className="numbers">
                          {values.map((value, index) => (
                            <span
                              key={index}
                              className="number"
                              style={{
                                left: `${(value / length) * 100}%`, // Position each number dynamically
                              }}
                            >
                              {value.toLocaleString()}
                            </span>
                          ))}
                        </div>
                      </div>}

                    deflectionChartData={
                      <Line data={deflectionChartData} options={deflectionChartDataoptions} width='200px' height='100px' />
                    }
                    shearForceChartData={
                      <Line data={shearForceChartData} options={shearForceChartDataoptions} width='200px' height='100px' />
                    }
                    bendingMomentChartData={
                      <Line data={bendingMomentChartData} options={bendingMomentChartDataoptions} width='200px' height='100px' />
                    }
                    togglefunction={isActive3}
                    toggleBreaks={toggleClass3}
                    sendData={sendData}

                  />
                </>
              )}
              {selectedOption === 'option4' && (
                <>
                  <SupportPage

                    Support={
                      supports.map((support, index) => (
                        <div key={index} style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                          <label style={{ color: '#fff' }}>Type:</label>
                          <div className='Calculator-Side-A' style={{ width: '25%', justifyContent: 'center' }}>
                            <br />
                            <div className='input-and-select-div' style={{ justifyContent: 'center' }}>
                              <select
                                value={support.type}
                                onChange={(e) => handleSupportChange(index, 'type', e.target.value)}
                                style={{
                                  outline: 'none',
                                  border: 'none'
                                }}
                              >
                                <option value="pinned">Pinned</option>
                                <option value="roller">Roller</option>
                                <option value="fixed">Fixed</option>
                              </select>
                            </div>
                          </div>
                          <label style={{ color: '#fff' }}>Position:</label>
                          <div className='Calculator-Side-A' style={{ width: '30%', justifyContent: 'center' }}>
                            <br />
                            <div className='input-and-select-div' style={{ justifyContent: 'center' }}>
                              <input
                                style={{
                                  border: 'none',
                                  float: 'right',
                                  textAlign: 'center',
                                  width: '70%',
                                  outline: 'none'
                                }}
                                type="number"
                                value={support.position}
                                onChange={(e) => handleSupportChange(index, 'position', e.target.value)}
                                max={length}
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    }
                    addSupportBtn={
                      <>
                        <br />
                        <button type="button" className='BeamLinkBtntoBeamProperies-AddLoad BeamLinkBtntoBeamProperies' onClick={addSupport}>Add Support</button>
                      </>
                    }
                  />
                  <OutputsofDeflection

                    AddSupportClass={selectedOption === "option4"}
                    reactionData={
                      <div className="number-line-container">
                        {/* Line */}
                        <div className="line">

                        {reactionData && reactionData.length > 0 && (
                            <div>
                              {/* <h3>Reactions:</h3> */}
                              <div>
                              {reactionData.map((reaction, index) => (
                                  <>
                                    <img className="reaction-img" key={index} src={PointLoadSymbolsForReactionsImg} alt='reaction' style={{ position: 'absolute', top: '100%', width: '15px', height: '40px', transform: 'translate(-50%,0%)', left: `${(reaction.position / length) * 100}%`, }} />
                                    <span
                                      key={`position-${index}`}
                                      className="reaction-indicator"
                                    style={{ left: `${(reaction.position / length) * 100}%`, top: '0%' }}
                                    >
                                      Position: {reaction.position} mm{index < reactionData.length - 1 ? ', ' : ''}<br />
                                      Force: {(reaction.force)} N{index < reactionData.length - 1 ? ', ' : ''}<br />
                                      Moment: {(reaction.momentum)} N.m{index < reactionData.length - 1 ? ', ' : ''}
                                    </span>
                                  </>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>

                        <div className="numbers">
                          {values.map((value, index) => (
                            <span
                              key={index}
                              className="number"
                              style={{
                                left: `${(value / length) * 100}%`, // Position each number dynamically
                              }}
                            >
                              {value.toLocaleString()}
                            </span>
                          ))}
                        </div>
                      </div>}

                    deflectionChartData={
                      <Line data={deflectionChartData} options={deflectionChartDataoptions} width='200px' height='100px' />
                    }
                    shearForceChartData={
                      <Line data={shearForceChartData} options={shearForceChartDataoptions} width='200px' height='100px' />
                    }
                    bendingMomentChartData={
                      <Line data={bendingMomentChartData} options={bendingMomentChartDataoptions} width='200px' height='100px' />
                    }
                    togglefunction={isActive3}
                    toggleBreaks={toggleClass3}
                    sendData={sendData}

                  />
                </>
              )}
              {selectedOption === 'option5' && (
                <>
                  <LoadPage
                    DistributedLoad={distributedLoads.map((load, index) => (
                      <div key={index}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <h3 className='claculator-conversation-title'>Start Position :</h3>
                          <div className='Calculator-Side-A' style={{ width: '50%', justifyContent: 'center' }}>
                            <br />
                            <h3 className='sigma-symbol'>
                            </h3>
                            <div className='input-and-select-div' style={{ width: '100%' }}>
                              <input
                                style={{
                                  border: 'none',
                                  float: 'right',
                                  textAlign: 'center',
                                  width: '100%',
                                  outline: 'none',
                                }}
                                type="number"
                                value={load.start_position}
                                max={length}
                                onChange={(e) => handleDistributedLoadChange(index, 'start_position', e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <h3 className='claculator-conversation-title'>End Position :</h3>
                          <div className='Calculator-Side-A' style={{ width: '50%', justifyContent: 'center' }}>
                            <br />
                            <h3 className='sigma-symbol'>
                            </h3>
                            <div className='input-and-select-div' style={{ width: '100%' }}>
                              <input
                                style={{
                                  border: 'none',
                                  float: 'right',
                                  textAlign: 'center',
                                  width: '100%',
                                  outline: 'none',
                                }}
                                type="number"
                                value={load.end_position}
                                max={length}
                                onChange={(e) => handleDistributedLoadChange(index, 'end_position', e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <h3 className='claculator-conversation-title'>Start Magnitude :</h3>
                          <div className='Calculator-Side-A' style={{ width: '50%', justifyContent: 'center' }}>
                            <br />
                            <h3 className='sigma-symbol'>
                            </h3>
                            <div className='input-and-select-div' style={{ width: '100%' }}>
                              <input
                                style={{
                                  border: 'none',
                                  float: 'right',
                                  textAlign: 'center',
                                  width: '100%',
                                  outline: 'none',
                                }}
                                type="number"
                                // start_magnitude
                                // end_magnitude
                                value={load.start_magnitude}
                                max={length}
                                onChange={(e) => handleDistributedLoadChange(index, 'start_magnitude', e.target.value)}
                              />
                              <select
                                value={distributedLoadSelectedUnit}
                                style={{
                                  outline: 'none',
                                  border: 'none'
                                }}
                              >
                                <option key={distributedLoadSelectedUnit} value={distributedLoadSelectedUnit}>
                                  {distributedLoadSelectedUnit}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <h3 className='claculator-conversation-title'>End Magnitude :</h3>
                          <div className='Calculator-Side-A' style={{ width: '50%', justifyContent: 'center' }}>
                            <br />
                            <h3 className='sigma-symbol'>
                            </h3>
                            <div className='input-and-select-div' style={{ width: '100%' }}>
                              <input
                                style={{
                                  border: 'none',
                                  float: 'right',
                                  textAlign: 'center',
                                  width: '100%',
                                  outline: 'none',
                                }}
                                type="number"
                                // start_magnitude
                                // end_magnitude
                                value={load.end_magnitude}
                                max={length}
                                onChange={(e) => handleDistributedLoadChange(index, 'end_magnitude', e.target.value)}
                              />
                              <select
                                value={distributedLoadSelectedUnit}
                                style={{
                                  outline: 'none',
                                  border: 'none'
                                }}
                              >
                                <option key={distributedLoadSelectedUnit} value={distributedLoadSelectedUnit}>
                                  {distributedLoadSelectedUnit}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    addDistributedLoad={
                      <>
                        <br />
                        <button type="button" className='BeamLinkBtntoBeamProperies-AddLoad BeamLinkBtntoBeamProperies' onClick={addDistributedLoad}>Add Distributed Load</button>
                      </>
                    }
                    PointLoad={pointLoads.map((load, index) => (
                      <div key={index}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <h3 className='claculator-conversation-title'>Position :</h3>
                          <div className='Calculator-Side-A' style={{ width: '50%', justifyContent: 'center' }}>
                            <div className='input-and-select-div'
                              style={{ justifyContent: 'center' }}
                            >
                              <input
                                style={{
                                  border: 'none',
                                  textAlign: 'center',
                                  width: '100%',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  outline: 'none',

                                }}
                                type="number"
                                value={load.position}
                                onChange={(e) => handlePointLoadChange(index, 'position', e.target.value)}
                                step='1'
                                min='0'
                                max={length}
                                placeholder='Position'
                              />
                            </div>
                          </div>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <h3 className='claculator-conversation-title'>Magnitude :</h3>
                          <div className='Calculator-Side-A' style={{ width: '50%', justifyContent: 'center' }}>
                            <div className='input-and-select-div'
                              style={{ justifyContent: 'center', width: '100%' }}
                            >
                              <input
                                style={{
                                  border: 'none',
                                  textAlign: 'center', width: '100%',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  outline: 'none',

                                }}
                                type="number"
                                value={load.magnitude}
                                onChange={(e) => handlePointLoadChange(index, 'magnitude', e.target.value)}
                                placeholder='Magnitude'
                              />
                              <select
                                value={pointLoadSelectedUnit}
                                style={{
                                  outline: 'none',
                                  border: 'none'
                                }}
                              >
                                <option key={pointLoadSelectedUnit} value={pointLoadSelectedUnit}>
                                  {pointLoadSelectedUnit}
                                </option>
                              </select>

                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    AddPointLoad={
                      <>
                        <br />
                        <button type="button" className='BeamLinkBtntoBeamProperies-AddLoad BeamLinkBtntoBeamProperies' onClick={addPointLoad}>Add Point Load</button>
                      </>
                    }

                  />
                  <OutputsofDeflection
                    AddloadClass={selectedOption === "option5"}
                    reactionData={
                      <div className="number-line-container">
                        {/* Line */}
                        <div className="line">

                          {reactionData && reactionData.length > 0 && (
                            <div>
                              {/* <h3>Reactions:</h3> */}
                              <div>
                              {reactionData.map((reaction, index) => (
                                  <>
                                    <img className="reaction-img" key={index} src={PointLoadSymbolsForReactionsImg} alt='reaction' style={{ position: 'absolute', top: '100%', width: '15px', height: '40px', transform: 'translate(-50%,0%)', left: `${(reaction.position / length) * 100}%`, }} />
                                    <span
                                      key={`position-${index}`}
                                      className="reaction-indicator"
                                    style={{ left: `${(reaction.position / length) * 100}%`, top: '0%' }}
                                    >
                                      Position: {reaction.position} mm{index < reactionData.length - 1 ? ', ' : ''}<br />
                                      Force: {(reaction.force)} N{index < reactionData.length - 1 ? ', ' : ''}<br />
                                      Moment: {(reaction.momentum)} N.m{index < reactionData.length - 1 ? ', ' : ''}
                                    </span>
                                  </>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>

                        <div className="numbers">
                          {values.map((value, index) => (
                            <span
                              key={index}
                              className="number"
                              style={{
                                left: `${(value / length) * 100}%`, // Position each number dynamically
                              }}
                            >
                              {value.toLocaleString()}
                            </span>
                          ))}
                        </div>
                      </div>}

                    LoadBendingDeflectionclasses={'LoadBendingDeflectionclasses'}
                    deflectionChartData={
                      <Line data={deflectionChartData} options={deflectionChartDataoptions} width='200px' height='100px' />
                    }
                    shearForceChartData={
                      <Line data={shearForceChartData} options={shearForceChartDataoptions} width='200px' height='100px' />
                    }
                    bendingMomentChartData={
                      <Line data={bendingMomentChartData} options={bendingMomentChartDataoptions} width='200px' height='100px' />
                    }
                    togglefunction={isActive3}
                    toggleBreaks={toggleClass3}
                    // SumbitBtn={
                    //   <>
                    //     <br />
                    //     <button type="submit" className='BeamLinkBtntoBeamProperies-AddLoad BeamLinkBtntoBeamProperies' onClick={sendData} >Analyze Beam</button>
                    //   </>
                    // }
                    sendData={sendData}
                  />
                </>
              )}
            </div >
          </section >
          <div className={isActive3 ? ' Beamdeflaction height110 height0 ' : ' Beamdeflaction  height0 '} ></div>
          <br />
          <br />
          <br />
          <br />
          <hr className='Beam-properties-calculator-hr' />
          <br />
          <br />
          <br />
          <br />
          <InputsParametersFile />
          <br />
          <br />
          <br />
          <hr className='Beam-properties-calculator-hr' />
          <br />
          <br />
          <br />
          <br />
          <br />
          <OutputParameterFile />
          <hr className='Beam-properties-calculator-hr' />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
        <section className='cse-header-top' onClick={scrollToTop}>
          <Link smooth="true" duration={500} offset={-70}>
            <GrLinkTop className='' />
          </Link>
        </section>
      </section>

    </>
  )
}
