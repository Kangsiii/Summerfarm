import React from 'react'
import CardNews from '../components/CardNews'
import LoginBox from '../user/LoginBox';

function Home() {
  return (
    <div>
      <div style={{display:"flex" ,marginTop:'5%'}}>
        <div  style={{width:'33%', backgroundColor:'yellow'}}>
          
        </div>
        <div style={{width:'33%', }}>
          <CardNews/>
        </div>
        <div >
          <LoginBox />
        </div>        
      </div>
      <div style={{marginTop:'5%', backgroundColor:'green'}}>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    </div>
  )
}


export default Home;