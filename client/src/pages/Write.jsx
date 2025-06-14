import React from 'react'

import { useState } from 'react';


const Write = () => {
  

  return (
    <div className="add">
      <div className="content">
        <input type='text' placeholder='Title'/>
        <div className="editorContainer">
          <input type='text'/>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft:
          </span>
          <span>
            <b>Visibility: </b> Public:
            <input style={{display:"none"}} type="file" id="file"/>
            <label className='file' htmlFor="file">Upload Image</label>
            <div className="buttons">
              <button>Save as a draft</button>
              <button>Update</button>
            </div>
          </span>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type='radio' name='cat' value="art" id="art"/>
          <label htmlFor='art'>Art</label>
          <input type='radio' name='cat' value="science" id="science"/>
          <label htmlFor='science'>Science</label>
          <input type='radio' name='cat' value="technology" id="technology"/>
          <label htmlFor='technology'>Technology</label>
          <input type='radio' name='cat' value="cinema" id="cinema"/>
          <label htmlFor='cinema'>Cinema</label>
          <input type='radio' name='cat' value="design" id="design"/>
          <label htmlFor='design'>Design</label>
          <input type='radio' name='cat' value="food" id="food"/>
          <label htmlFor='food'>Food</label>
        </div>
      </div>
    </div>
  )
}

export default Write