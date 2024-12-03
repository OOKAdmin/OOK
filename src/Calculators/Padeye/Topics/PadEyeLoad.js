import React from 'react'

export default function PadEyeLoad(props) {
  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Load on Pad-eye</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>P</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.LoadonPadeyeValue}
              onChange={props.LoadonPadeyeValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.LoadonPadeyeSelectedUnit}
              onChange={props.LoadonPadeyeSelectedUnitOnchange}
            >
              {props.LoadonPadeyeOption}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Angle of Load with Vertical</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>θ</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.AngleofLoadwithVerticalvalue}
              onChange={props.AngleofLoadwithVerticalvalueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.AngleofLoadwithVerticalSelectedUnit}
              onChange={props.AngleofLoadwithVerticalSelectedUnitOnchange}
            >
              {props.AngleofLoadwithVerticalOption}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Out-of Plane Angle</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>φ</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.OutofPlaneAngleValue}
              onChange={props.OutofPlaneAngleValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.OutofPlaneAngleselectedUnit}
              onChange={props.OutofPlaneAngleselectedUnitOnchange}
            >
              {props.OutofPlaneAngleOption}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Dynamic Load Factor </h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>DLF</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.DLFValue}
              onChange={props.DLFValueOnchange}
            />
          </div>
        </div>
      </div>
      <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.handleCombinedClick}>{props.togglefunction ? 'Hide' : 'Solve'}</button>

    </>
  )
}
