import React from 'react'
import './dropbox.css'

const DropBox = () => {
  return (
    <section className='upload-container'>
            <div className="drop-box">
                <div class="icon-container">
                    <img src="files.png" alt="image" />
                </div>
                <input type="file" id="fileInput"/>
                <div class="title">Drop your Files here or, <span id="browseBtn">browse</span></div>
            </div>
        <div class="progress-container">
            <div class="bg-progress"></div>

            <div class="inner-container">
                <div class="status">Uploading...</div>
                <div class="percent-container">
                    <span class="percentage" id="progressPercent">0</span>%
                </div>
                <div class="progress-bar"></div>
            </div>

        </div>
    </section>
  )
}

export default DropBox