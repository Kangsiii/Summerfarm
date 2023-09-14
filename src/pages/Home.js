import React from 'react'
import CardNews from '../components/CardNews'
import Login from '../user/Logincom';

function Home() {
  return (
    <div>
      <div style={{display:"flex" ,marginTop:'5%'}}>
        <div  style={{width:'33%', backgroundColor:'yellow'}}>
          여기엔 모름;;
        </div>
        <div style={{width:'33%', }}>
          <CardNews/>
        </div>
        <div >
          <Login/>
        </div>        
      </div>
      <div style={{marginTop:'5%', backgroundColor:'green'}}>
          여기엔 최근 게시글 보여주기<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    </div>
  )
}

export default Home;