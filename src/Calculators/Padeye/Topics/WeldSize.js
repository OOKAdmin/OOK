import React from 'react'

export default function WeldSize(props) {
  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Base Weld Leg Size
        </h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>
            <span className='power' style={{ fontSize: '1.5vw', top: '-3px' }}>t</span>
            <span className='LowerPower'>w</span>
          </h3>
          <div className='input-and-select-div'>
            <input
              className='calculator-input'
              type="number"
              value={props.BaseWeldLegSizeValue}
              onChange={props.BaseWeldLegSizeValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.BaseWeldLegSizeSelectedUnit}
              onChange={props.BaseWeldLegSizeSelectedUnitOnchange}
            >
              {props.BaseWeldLegSizeOption}
            </select>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Cheek Plate Weld Leg Size
        </h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>
            <span className='power' style={{ fontSize: '1.5vw', top: '-3px' }}>t</span>
            <span className='LowerPower'>wc</span>
          </h3>
          <div className='input-and-select-div'>
            <input style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.CheekPlateWeldLegSize}
              onChange={props.CheekPlateWeldLegSizeOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.CheekPlateWeldLegSizeUnit}
              onChange={props.CheekPlateWeldLegSizeUnitOnchange}
            >
              {props.CheekPlateWeldLegSizeOption}
            </select>
          </div>
        </div>
      </div >
      <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.handleCombinedClick}>{props.togglefunction ? 'Hide' : 'Solve'}</button>

    </>
  )
}
