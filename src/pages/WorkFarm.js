import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function WorkFarm() {
  const onChangeContents = (contents) => {
    console.log(contents)
  }
  return (
    <div>WorkFarm
      <ReactQuill onChange={onChangeContents}/>
    </div>

  )
}

export default WorkFarm