import React from 'react'

export default function LengthOfBeam(props) {
  return (
    <>
      <h2 className='claculator-conversation-title' style={{ textAlign: 'center', fontWeight: '600', fontSize: '1.4vw' }}>Length</h2>
      <br />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 className='claculator-conversation-title'>Length of Beam :</h3>
        <div className='Calculator-Side-A' style={{ width: '80%' }}>
          <br />
          <h3 className='sigma-symbol' style={{ fontSize: '0.8vw' }}>(L)</h3>
          <div className='input-and-select-div'>
            <input
              className='calculator-input'
              type="number"
              value={props.lengthValue}
              onChange={props.lengthonChange}
            />
             <select
              className='Calculator-select-option'
              value={props.LengthSelectedUnit}
              onChange={props.LengthselectedUnitOnchange}
            >
              {props.LengthUnitOption}
            </select>
          </div>
        </div>
      </div>

    </>
  )
}
