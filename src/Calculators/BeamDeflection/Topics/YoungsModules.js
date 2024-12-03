import React from 'react'

export default function YoungsModules(props) {
  return (
    <>
      <h2 className='claculator-conversation-title' style={{ textAlign: 'center', fontWeight: '600', fontSize: '1.4vw' }}>Youngs Modules</h2>
      <br />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Youngs Modules:</h3>
        <div className='Calculator-Side-A' style={{ width: '80%' }}>
          <br />
          <h3 className='sigma-symbol' style={{ fontSize: '0.8vw' }}>(E)</h3>
          <div className='input-and-select-div'>
            <input
              className='calculator-input'
              type="number"
              value={props.YoungModulesValue}
              onChange={props.YoungModulesValueOnchange}
            />
            <select
              className='Calculator-select-option'
              value={props.YoungModulesselectedUnit}
              onChange={props.YoungModulesselectedunitOnchange}
            >
              {props.YoungModulesoptions}
            </select>
          </div>
        </div>
      </div>
      {props.SumbitBtn}
    </>
  )
}
