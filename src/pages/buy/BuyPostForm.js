import React, { useState, useEffect } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

function BuyPostForm() {
  const [postInfo, setPostInfo] = useState({
    Title: '',
    ProduceInfo: '',
    AuthorID: '', // 로컬 스토리지에서 가져온 사용자 ID
    ProduceID: '', // 로컬 스토리지에서 가져온 농산물 ID
    PostingTime: '', // PostingTime 추가
  });

  useEffect(() => {
    // 주기적으로 로컬 스토리지에서 ProduceID 값을 가져오고 업데이트
    const intervalId = setInterval(() => {
      const updatedProduceID = localStorage.getItem('ProduceID');
      setPostInfo((prevInfo) => ({
        ...prevInfo,
        ProduceID: updatedProduceID,
      }));
    }, 1000); // 1초마다 확인

    // 컴포넌트가 언마운트될 때 interval 정리
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // 로컬 스토리지에서 사용자 ID와 농산물 ID 가져오기
    const AuthorID = localStorage.getItem('userID');
    const ProduceID = localStorage.getItem('ProduceID');
        
    // 현재 시간을 생성
    const currentDate = new Date();
    
    // 가져온 값들을 postInfo에 설정
    setPostInfo((prevInfo) => ({
      ...prevInfo,
      AuthorID: AuthorID,
      ProduceID: ProduceID,
      PostingTime: currentDate.toISOString(), // 현재 시간을 ISO 형식으로 저장
    }));
  }, []);


  const handleTitleChange = (e) => {
    setPostInfo({ ...postInfo, Title: e.target.value });
  };

  const handleContentChange = (ProduceInfo) => {
    setPostInfo({ ...postInfo, ProduceInfo });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3003/api/buypost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postInfo),
      });

      if (response.ok) {
        // 게시글 작성 성공 시 로컬 스토리지의 ProduceID 삭제
        localStorage.removeItem('ProduceID');
        console.log('게시물이 성공적으로 작성되었습니다.');
        window.location.reload();
      } else {
        // 서버 응답이 실패했을 때 처리
        console.error('게시물 작성 실패');
      }
    } catch (error) {
      // 오류 발생 시 처리
      console.error('데이터 전송 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <div>
      <h2>게시물 작성</h2>
      <form>
        <div>
          <label>제목</label>
          <input
            type="text"
            value={postInfo.Title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label>내용</label>
          {/* <ReactQuill
            value={postInfo.ProduceInfo}
            onChange={handleContentChange}
          /> */}
        </div>
        <button type="button" onClick={handleSubmit}>
          게시물 작성
        </button>
      </form>
    </div>
  );
}

export default BuyPostForm;
