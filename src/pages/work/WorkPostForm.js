import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/react-quill.css';

// 일자리팜 게시글 작성
function WorkPostForm() {
  const [postInfo,setPostInfo] = useState({
    Title:'',
    Content:'',
    WorkConditions:'', //근무조건
    AuthorID:'', //사용자 id
    MapInfo:'',
    PostingTime:'',
    ExpiryDate:'', //만료일, 언제까지 지원받는지 
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

//   const handleSubmit = async () => {
//     try {
//         const response = await fetch('http://localhost:3003/api/workpost',{
//             method:'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(postInfo),
//         });

         


//     }
//   }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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

        </form>
    </div>
  )
}

export default WorkPostForm