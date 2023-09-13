import React from 'react'
import CardNews from '../components/CardNews'

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
        <div style={{width:'33%' , backgroundColor:'blue'}}>
          여기엔 로그인 넣을꺼임
        </div>        
      </div>
      <div style={{marginTop:'5%', backgroundColor:'green'}}>
          여기엔 최근 게시글 보여주기<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    </div>
  )
}

export default Home;