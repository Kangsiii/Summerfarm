import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
// 'react-quill/dist/react-quill.css';
// 일자리팜 게시글 작성
function WorkPostForm() {
  const [postInfo,setPostInfo] = useState({
    Title:'',
    Content:'',
    WorkConditions:'', //근무조건
    AuthorID:'', //사용자 id
    PostingTime:'',
    // ExpiryDate:'', //만료일, 언제까지 지원받는지 
  });

  useEffect(() => {
    const AuthorID = localStorage.getItem('userID');

    const currentDate = new Date();

    setPostInfo((prevInfo) => ({
        ...prevInfo,
        AuthorID: AuthorID,
        PostingTime:currentDate.toISOString(),
    }));
  },[]);

  const handleTitleChange = (e) => {
    setPostInfo({ ...postInfo,Title: e.target.value });
  };

  const handleSubmit = async () => {
    try {
        const response = await fetch('http://localhost:3003/api/workpost',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postInfo),
        });
        
        if (response.ok) {
            console.log('게시물이 성공적으로 작성되었습니다.');
            window.location.reload();
        } else {
            console.error('게시물 작성 실패');
        } 
    } catch (error) {
        console.error('데이터 전송 중 오류가 발생했습니다.',error);
    }  
  };
  
    return (
    <div>
        <h2>일자리 등록</h2>
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
                <ReactQuill
                    value={postInfo.Content}
                    onChange={(e) => setPostInfo({ ... postInfo, Content: e.target.value})}
                />
            </div>
            <div>
                <label>근무조건</label>
                <input
                    type="text"
                    value={postInfo.WorkConditions}
                    onChange={(e) => setPostInfo({ ... postInfo, WorkConditions: e.target.value})}
                />
            </div>
            <button type="button" onClick={handleSubmit}>
                게시물 작성
            </button>
        </form>
    </div>
  );
}

export default WorkPostForm;