import React from 'react'

export default function CrossSection(props) {
  return (
    <>
      <h2 className='claculator-conversation-title' style={{ textAlign: 'center', fontWeight: '600', fontSize: '1.4vw' }}>Cross Section</h2>
      <br />

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Area :</h3>
        <div className='Calculator-Side-A' style={{ width: '80%' }}>
          <br />
          <h3 className='sigma-symbol' style={{ fontSize: '0.8vw' }}>(A)</h3>
          <div className='input-and-select-div'>
            <input
              className='calculator-input'
              type="number"
              value={props.areaValue}
              onChange={props.areaonChange}
            />
            <select
              className='Calculator-select-option'
              value={props.areaSelectedUnit}
              onChange={props.areaselectedUnitOnchange}
            >
              {props.areaUnitOption}
            </select>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Moment of inertia:</h3>
        <div className='Calculator-Side-A' style={{ width: '80%' }}>
          <br />
          <h3 className='sigma-symbol' style={{ fontSize: '0.8vw' }}>(I)</h3>
          <div className='input-and-select-div'>
            <input
              className='calculator-input'
              type="number"
              value={props.inertiaValue}
              onChange={props.inertiaonChange}
            />
            <select
              className='Calculator-select-option'
              value={props.inertiaSelectedUnit}
              onChange={props.inertiaselectedUnitOnchange}
            >
              {props.inertiaUnitOption}
            </select>
          </div>
        </div>
      </div>

      {props.SumbitBtn}
    </>
  )
}
