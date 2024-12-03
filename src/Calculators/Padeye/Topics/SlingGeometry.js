import React from 'react'

export default function SlingGeometry(props) {
  return (
    <>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Sling Diameter</h3>
        <div className='Calculator-Side-A' style={{ width: '65%' }}>
          <br />
          <h3 className='sigma-symbol'>
            <span className='power' style={{ fontSize: '1.5vw', top: '-3px' }}>D</span>
            <span className='LowerPower' style={{ fontSize: '0.55vw' }}>sling</span>
          </h3>
          <div className='input-and-select-div'>
            <input
              className='calculator-input'
              type="number"
              value={props.SlingDiameterValue}
              onChange={props.SlingDiameterValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.SlingDiameterUnit}
              onChange={props.SlingDiameterUnitOnchange}
            >
              {props.SlingDiameterOption}
            </select>
          </div>
        </div>
      </div>
      <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.handleCombinedClick}>{props.togglefunction ? 'Hide' : 'Solve'}</button>

      </>
  )
}
