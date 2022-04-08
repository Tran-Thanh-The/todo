import React from 'react'
import { useState } from 'react'
import './Card.scss'

export default function Card(props) {
  const { data, index, updateCard } = props
  const [content, setContent] = useState(data.content)
  const [openInput, setOpenInput] = useState(false)

  const handleChangeContent = (e) => { setContent(e.target.value) }

  const handleUpdateCard = () => {
    // handle api 
    if (openInput) {
      updateCard(index, content)
      setOpenInput(!openInput)
    }
    else  
      updateCard(index, '')
  }

  return (
    <div className='Card'> 
      { !openInput &&
        <div className='content'>
          <div className='time'>
            <i className="fa-solid fa-calendar"></i>
            {`${data.time.day}-${data.time.month}-${data.time.year}`}
          </div>
          <p>{data.content}</p>
        </div>
      }
      { !openInput &&
        <div className='control'>
          <i 
            className="fa-solid fa-xmark active"
            onClick={handleUpdateCard}
          ></i>
          <i 
            className="fa-solid fa-pen-to-square active" 
            onClick={() => setOpenInput(!openInput)}
          ></i>
        </div>
      }
      {
        openInput && 
        <textarea 
          rows={3}
          placeholder='Enter content...'
          className='input-update'
          value={content}
          onChange={handleChangeContent}
          onKeyDown={(e) => (e.key === 'Enter') && handleUpdateCard()}
        />
      }
    </div>
  )
}
