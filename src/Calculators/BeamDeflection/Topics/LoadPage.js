import React from 'react'

export default function LoadPage(props) {
  return (
    <>
        <h2 className='claculator-conversation-title' style={{textAlign:'center', fontWeight:'600',fontSize:'1.4vw'}}>Distributed Load</h2>
        <br/>
        {props.DistributedLoad}
        {props.addDistributedLoad}
        <br/>
        <br/>
        <hr style={{width:'70%', margin:'auto'}}/>
        <br/>
        
        <h2 className='claculator-conversation-title' style={{textAlign:'center', fontWeight:'600',fontSize:'1.4vw'}}>Point Load</h2>
        {props.PointLoad}
        <br/>
        {props.AddPointLoad}
        <br/>
        <br/>
        <hr style={{width:'70%', margin:'auto'}}/>
        <br/>
        {props.SumbitBtn}
    </>
  )
}
