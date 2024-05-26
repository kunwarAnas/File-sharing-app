import React, { useState, useRef } from 'react'
import './dropbox.css'
import axios from 'axios'
import Layout from '../Layout/Layout'
import { useNavigate } from "react-router-dom";

const DropBox = () => {
    const [file, setFile] = useState(null);
    const [isDragging, setisDragging] = useState(false);
    const [uploadPercent, setUploadPercent] = useState(0)
    const [downloadLink, setDownloadLink] = useState('')
    const inputRef = useRef()
    const navigate = useNavigate();

    const handleDragOver = (e) => {
        e.preventDefault();
        setisDragging(true)
        //console.log(e);
    }

    const promise = result => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(result.data.data.file)
            }, 2000)
        })
    }

    const handleDrop = async (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0]
        setFile(file)
        setisDragging(false)

        let formData = new FormData();
        formData.append("file", file);
        try {
            const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/upload`, formData, {
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;
                    let precentage = Math.floor((loaded * 100) / total);
                    setUploadPercent(precentage)
                },
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            const link = await new Promise((res, rej) => {
                setTimeout(() => {
                    res(result?.data?.data?.file)
                }, 1000)
            })

            setDownloadLink(link)
        } catch (err) {
            console.log(err.message);
        }

    }

    const handleClick = (e) => {
        inputRef.current.click()
    }

    return (
        <Layout>
            <div onDragOver={handleDragOver} onDragLeave={() => setisDragging(false)} onDrop={handleDrop} className={isDragging ? "dragged drop-box" : 'drop-box'}>
                <div className="icon-container">
                    <img className='center' src="files.png" alt="image" />
                </div>
                <input type="file" className="input" ref={inputRef} />
                <div className="text-title">Drop your Files here or, <span id="browseBtn" onClick={handleClick}>browse</span></div>
            </div>
            {
                file && <div className="progress-container">
                    <div className="bg-progress" style={{ width: `${uploadPercent}%` }}></div>

                    <div className="inner-container">
                        <div className="status">{file?.name || 'Uploading...'}</div>
                        <div className="percent-container">
                            <span className="percentage" id="progressPercent">{uploadPercent}</span>%
                        </div>
                        <div className="progress-bar"></div>
                    </div>
                </div>
            }

            {
                (downloadLink && +uploadPercent === 100) && <div class="sharing-container">
                    <p class="expire">Link expires in 24 hrs</p>
                    <div class="input-container">
                        <input type="text" id="fileURL" readOnly={true} value={downloadLink} />
                        <img className='img' src="content_copy.svg" id="copyURLBtn" alt="copy to clipboard icon" onClick={() => navigator.clipboard.writeText(downloadLink)} />
                    </div>
                </div>
            }
        </Layout>
    )
}

export default DropBox