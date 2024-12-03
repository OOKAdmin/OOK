import React from 'react'

export default function Materialproperty(props) {
  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Material Yield Stress</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>
            <span className='power' style={{ fontSize: '1.5vw', top: '-3px' }}>σ</span>
            <span className='LowerPower'>y</span>
          </h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.MaterialYieldStresValue}
              onChange={props.MaterialYieldStresValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.MaterialYieldStresselectedUnit}
              onChange={props.MaterialYieldStressselectedunitOnchange}
            >
              {props.MaterialYieldStressoptions}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Electrode Tensile Strength
          <span className='calculator-coversation-title-span' style={{ fontSize: '0.7vw', position: 'relative', top: '3px' }}> (for Weld)</span>
        </h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>
            <span className='power' style={{ fontSize: '1.5vw', top: '-3px' }}>σ</span>
            <span className='LowerPower'>u</span>
          </h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.ElectrodeTensileStrengthValue}
              onChange={props.ElectrodeTensileStrengthOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.ElectrodeTensileStrengthSelectedUnitValue}
              onChange={props.ElectrodeTensileStrengthSelectedUnitOnchange}
            >
              {props.ElectrodeTensileStrengthoptions}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Modulus of Elasticity</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>E</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.ModulusofElasticityValue}
              onChange={props.ModulusofElasticityValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.ModulusofElasticitySelectedUnit}
              onChange={props.ModulusofElasticitySelectedUnitOnchange}
            >
              {props.ModulusofElasticityoptions}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Poisson's Ratio</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>V</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.PoissonsRatioValue}
              onChange={props.PoissonsRatioOnchange}
            />
          </div>
        </div>
      </div>

      <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.handleCombinedClick}>{props.isActive3 ? 'Hide' : 'Solve'}</button>
    </>
  )
}
