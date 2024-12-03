import React from 'react'

export default function PadeyeGeometry(props) {
  return (
    <>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Radius of Main Plate</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>R</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.RadiusofMainPlateValue}
              onChange={props.RadiusofMainPlateValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.RadiusofMainPlateselectedUnit}
              onChange={props.RadiusofMainPlateselectedUnitOnchange}
            >
              {props.RadiusofMainPlateOptions}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Thickness of Main Plate</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>t</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.ThicknessofMainPlateValue}
              onChange={props.ThicknessofMainPlateValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.ThicknessofMainPlateSelectedUnit}
              onChange={props.ThicknessofMainPlateSelectedUnitOnchange}
            >
              {props.ThicknessofMainPlateOptions}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Diameter of eye pin hole </h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>De</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.DiameterofeyepinholeValue}
              onChange={props.DiameterofeyepinholeValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.DiameterofeyepinholeselectedUnit}
              onChange={props.DiameterofeyepinholeselectedUnitOnchange}
            >
              {props.DiameterofeyepinholeOption}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Diameter of Cheek Plate</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>Dc</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.DiameterofCheekPlateInputValue}
              onChange={props.DiameterofCheekPlateInputValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.DiameterofCheekPlateSelectedUnit}
              onChange={props.DiameterofCheekPlateSelectedUnitOnchange}
            >
              {props.DiameterofCheekPlateOptions}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Thickness of Cheek Plate</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>tc</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.ThicknessofCheekPlateInputValue}
              onChange={props.ThicknessofCheekPlateInputValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.ThicknessofCheekPlateSelectedUnit}
              onChange={props.ThicknessofCheekPlateSelectedUnitOnchange}
            >
              {props.ThicknessofCheekPlateOptions}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Total Height of Pad-eye</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>H</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.inputTotalHeightofPadeyeValue}
              onChange={props.inputTotalHeightofPadeyeValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.selectedTotalHeightofPadeyeUnit}
              onChange={props.selectedTotalHeightofPadeyeUnitOnchange}
            >
              {props.TotalHeightofPadeyeOptions}
            </select>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Length of Base Plate</h3>
        <div className='Calculator-Side-A'>
          <br />
          <h3 className='sigma-symbol'>L</h3>
          <div className='input-and-select-div'>
            <input
              style={{ transform: 'translate(8px, 0px)' }}
              className='calculator-input'
              type="number"
              value={props.LengthofBasePlateInputValue}
              onChange={props.LengthofBasePlateInputValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.LengthofBasePlateSelectedUnit}
              onChange={props.LengthofBasePlateSelectedUnitOnchange}
            >
              {props.LengthofBasePlateOptions}
            </select>
          </div>
        </div>
      </div>
      <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.handleCombinedClick}>{props.togglefunction ? 'Hide' : 'Solve'}</button>

    </>
  )
}
