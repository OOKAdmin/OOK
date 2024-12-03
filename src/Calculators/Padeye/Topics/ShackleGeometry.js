import React from 'react'

export default function ShackleGeometry(props) {
  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Shackle SWL</h3>
        <h3 className='sigma-symbol' style={{ color: '#fff', marginRight: '10px', fontSize: '1vw' }}>(
          <span className='power' style={{ fontSize: '1vw', top: '0px' }}>SWL</span>
          <span className='LowerPower' style={{ fontSize: '0.5vw', top: '3px', position: 'relative' }} >sh</span>
          )
        </h3>
        <div className='Calculator-Side-A' style={{ width: '52%' }}>
          <br />
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.ShackleSWLValue}
              onChange={props.ShackleSWLValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.ShackleSWLUnit}
              onChange={props.ShackleSWLUnitOnchange}
            >
              {props.ShackleSWLOption}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Shackle Inside Length</h3>
        <h3 className='sigma-symbol' style={{ color: '#fff', marginRight: '10px', fontSize: '1vw' }}>(
          <span className='power' style={{ fontSize: '1.5vw', top: '0px' }}>L</span>
          <span className='LowerPower' style={{ fontSize: '0.5vw', top: '3px', position: 'relative' }}>sh</span>
          )
        </h3>
        <div className='Calculator-Side-A' style={{ width: '52%' }}>
          <br />
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.ShackleInsideLength}
              onChange={props.ShackleInsideLengthOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.ShackleInsideLengthUnit}
              onChange={props.ShackleInsideLengthUnitOnchange}
            >
              {props.ShackleInsideLengthoption}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Shackle Jaw Width</h3>
        <h3 className='sigma-symbol' style={{ color: '#fff', marginRight: '10px', fontSize: '1vw' }}>(
          <span className='power' style={{ fontSize: '1.5vw', top: '0px' }}>W</span>
          <span className='LowerPower' style={{ fontSize: '0.5vw', top: '3px', position: 'relative' }}>sh</span>
          )
        </h3>
        <div className='Calculator-Side-A' style={{ width: '52%' }}>
          <br />
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.ShackleJawWidthvalue}
              onChange={props.ShackleJawWidthvalueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.ShackleJawWidthUnit}
              onChange={props.ShackleJawWidthUnitOnchange}
            >
              {props.ShackleJawWidthOptions}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Shackle Pin Diameter</h3>
        <h3 className='sigma-symbol' style={{ color: '#fff', marginRight: '10px', fontSize: '1vw' }}>(
          <span className='power' style={{ fontSize: '1.5vw', top: '0px' }}>D</span>
          <span className='LowerPower' style={{ fontSize: '0.5vw', top: '3px', position: 'relative' }}>p</span>
          )
        </h3>
        <div className='Calculator-Side-A' style={{ width: '52%' }}>
          <br />
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.ShacklePinDiameterValue}
              onChange={props.ShacklePinDiameterValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.ShacklePinDiameterUnit}
              onChange={props.ShacklePinDiameterUnitOnchange}
            >
              {props.ShacklePinDiameterOption}
            </select>
          </div>
        </div>
      </div>
      <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.handleCombinedClick}>{props.togglefunction ? 'Hide' : 'Solve'}</button>

    </>
  )
}
