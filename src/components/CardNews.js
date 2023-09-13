import React, { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'; // 화살표 아이콘 가져오기

const images = [ // 보여줄 이미지 목록
  '/img/card1.jpg',
  '/img/card2.jpg',
  '/img/card3.jpg',
  '/img/card4.jpg',
  '/img/card5.jpg',
  '/img/card6.jpg',
];

function CardNews() {
  const [currentImage, setCurrentImage] = useState(0); // 현재 이미지의 인덱스

  const handleNextImage = () => {
    // 다음 이미지로 이동
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    // 이전 이미지로 이동
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div style={{ position: 'relative', textAlign: 'center', width:"5", display:'flex', justifyContent:'center'}}>
        <LeftOutlined
          onClick={handlePrevImage}
          style={{            
            fontSize: '27px',
            cursor: 'pointer',
          }}
        />
        <img
          src={images[currentImage]}
          alt={`이미지 ${currentImage + 1}`}
          style={{ width:"300px"}}
        />
        
        <RightOutlined
          onClick={handleNextImage}
          style={{            
            fontSize: '27px',
            cursor: 'pointer',
          }}
        />
      </div>
    </div>
  );
}

export default CardNews;
