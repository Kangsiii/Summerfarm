import React, { useState } from 'react';
import BuyPostForm from './BuyPostForm'; 

function ProduceForm() {
    const [produceInfo, setProduceInfo] = useState({
      ProduceName: '',
      ProduceDescription: '',
      Category: '',
      Price: '',
      HarvestSeason: '',
      ProducerName: '',
      PhotoURL: '',
    });
  
    const [showBuyPostForm, setShowBuyPostForm] = useState(false);
    const [formDisabled, setFormDisabled] = useState(false); // 폼 필드 활성화/비활성화 상태 추가
  
    const handleProduceRegistration = async () => {
        if (!produceInfo.ProduceName || !produceInfo.ProduceDescription) {
          alert('농산물 이름과 설명은 필수 입력 항목입니다.');
        } else {
          // 필수 정보가 모두 입력되었을 때 폼 필드들을 비활성화하고 BuyPostForm을 렌더링
          setFormDisabled(true);
          setShowBuyPostForm(true);
      
          // 로컬 스토리지에서 userID 가져오기
          const userID = localStorage.getItem('userID');
          
      
          // userID를 포함하여 요청 보내기
          try {
            const response = await fetch('http://localhost:3003/api/producerregister', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...produceInfo,
                UserID: userID, // userID를 요청에 포함
              }),
            });    
            if (response.ok) {
                const data = await response.json();
              // 서버 응답이 성공적으로 수신됐을 때 처리
              console.log('데이터가 서버로 전송되었습니다.');
              localStorage.setItem('ProduceID', data.ProduceID);
            } else {
              // 서버 응답이 실패했을 때 처리
              console.error('서버 응답이 실패했습니다.');
            }
          } catch (error) {
            // 오류 발생 시 처리
            console.error('데이터 전송 중 오류가 발생했습니다.', error);
          }
        }
      };
      

  return (
    <div>
      <h2>농산물 등록</h2>
      <form>
        <div>
          <label>농산물 이름 (필수)</label>
          <input
            type="text"
            value={produceInfo.ProduceName}
            onChange={(e) => setProduceInfo({ ...produceInfo, ProduceName: e.target.value })}
            disabled={formDisabled} // 폼 필드 활성화/비활성화 설정
          />
        </div>
        <div>
          <label>농산물 설명 (필수)</label>
          <textarea
            value={produceInfo.ProduceDescription}
            onChange={(e) => setProduceInfo({ ...produceInfo, ProduceDescription: e.target.value })}
            disabled={formDisabled} // 폼 필드 활성화/비활성화 설정
          />
        </div>
        <div>
          <label>카테고리</label>
          <input
            type="text"
            value={produceInfo.Category}
            onChange={(e) => setProduceInfo({ ...produceInfo, Category: e.target.value })}
            disabled={formDisabled} // 폼 필드 활성화/비활성화 설정
          />
        </div>
        <div>
          <label>가격</label>
          <input
            type="number"
            value={produceInfo.Price}
            onChange={(e) => setProduceInfo({ ...produceInfo, Price: e.target.value })}
            disabled={formDisabled} // 폼 필드 활성화/비활성화 설정
          />
        </div>
        <div>
          <label>수확 시기</label>
          <input
            type="text"
            value={produceInfo.HarvestSeason}
            onChange={(e) => setProduceInfo({ ...produceInfo, HarvestSeason: e.target.value })}
            disabled={formDisabled} // 폼 필드 활성화/비활성화 설정
          />
        </div>
        <div>
          <label>상호명</label>
          <input
            type="text"
            value={produceInfo.ProducerName}
            onChange={(e) => setProduceInfo({ ...produceInfo, ProducerName: e.target.value })}
            disabled={formDisabled} // 폼 필드 활성화/비활성화 설정
          />
        </div>
        <div>
          <label>사진 URL</label>
          <input
            type="text"
            value={produceInfo.PhotoURL}
            onChange={(e) => setProduceInfo({ ...produceInfo, PhotoURL: e.target.value })}
            disabled={formDisabled} // 폼 필드 활성화/비활성화 설정
          />
        </div>
        <button type="button" onClick={handleProduceRegistration}>
          농산물 등록
        </button>
      </form>

      {/* BuyPostForm을 렌더링하고 이동 */}
      {showBuyPostForm && <BuyPostForm />}
    </div>
  );
}

export default ProduceForm;
