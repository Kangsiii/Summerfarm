import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BuyPostDetail({ post }) {
  const [postDetail, setPostDetail] = useState(null);

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  useEffect(() => {
    // post 객체가 정의되어 있는 경우에만 요청을 보냅니다.
    if (post) {
      // 게시글의 TradeID를 이용해서 해당 게시글 정보를 가져오는 요청을 보냅니다.
      fetch(`http://localhost:3003/api/buypostDetail/${post.TradeID}`)
        .then((response) => response.json())
        .then((data) => {
          // 받아온 게시글 정보를 상태에 저장
          setPostDetail(data);
        })
        .catch((error) => {
          console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
        });
    }
  }, [post]);

  if (!postDetail) {
    // 게시글 정보를 아직 불러오지 못한 경우 로딩 메시지나 처리할 UI를 여기에 추가하세요.
    return <div>Loading...</div>;
  }
  const handleReloadPage = () => {
    window.location.reload(); // 현재 페이지를 새로 고침
  };

  return (
    <div>
      <h2>게시글 상세 정보</h2>
      <div>
        <h3>{postDetail.Title}</h3>
        <p>작성자: {postDetail.AuthorID}</p>
        <p>작성일: {formatDate(postDetail.PostingTime)}</p>
        <p>상품명: {postDetail.ProduceName}</p>
        <p>상품설명: {postDetail.ProduceDescription}</p>
        <p>카테고리: {postDetail.Category}</p>
        <p>가격: {postDetail.Price}</p>
        <p>수확시기: {postDetail.HarvestSeason}</p>
        <p>상호명: {postDetail.ProducerName}</p>
        <p>내용: {postDetail.ProduceInfo}</p>
      </div>
      <button onClick={handleReloadPage}>뒤로가기</button>
    </div>
  );
}

export default BuyPostDetail;
