import React from 'react'
import { useState } from 'react'
import './Board.scss'
import Card from '../Card/Card'

import { initData } from '../actions/initData'

let Data = initData

export default function Board() {
  const [valueOfInput, setValueOfInput] = useState('')
  const [cardList, setCardList] = useState(Data.cardList)

  const handleValueOfInput = (e) => setValueOfInput(e.target.value)

  const addCard = () => {
    if (valueOfInput === '')
      return
    const time  = new Date()
    let newCard = {
      cardId: '',
      content: valueOfInput,
      time: {
        day: time.getUTCDate(),
        month: time.getUTCMonth()-1,
        year: time.getUTCFullYear()
      }
    }
    cardList.push(newCard)
    setValueOfInput('')
  }

  const updateCard = (index, data) => {
    let newCardList = [...cardList]
    if (data === '') {
      newCardList.splice(index, 1)
    } 
    else {
      const time  = new Date()
      let newCard = {
        cardId: '',
        content: data,
        time: {
          day: time.getUTCDate(),
          month: time.getUTCMonth()-1,
          year: time.getUTCFullYear()
        }
      }
      newCardList.splice(index, 1, newCard)
    }
    setCardList(newCardList)
  }

  return (
    <div className='Board'>
      <div className='main'>
        <div className='add-card'>
          <div className='input'>
            <input 
              placeholder='enter your task...' 
              value = {valueOfInput}
              onChange={handleValueOfInput}
              onKeyDown={(e) => (e.key === 'Enter') && addCard()}
            />
          </div>
          <span className='btn-add-card' onClick={addCard}>Add</span>
        </div>
        <div className='list-card'>
          {cardList.map((data, index) => 
            <Card 
              key={index} 
              index={index} 
              updateCard={updateCard} 
              data={data} 
            />
          )}
        </div>
      </div>
      <div className='contact'>
        <div>
          <a href='https://www.facebook.com/tranthanhthe1911'><i className="fa-brands fa-facebook active"></i></a>
          <a href='https://github.com/Tran-Thanh-The'><i className="fa-brands fa-github active"></i></a>
        </div>
        <p>made by tran the</p>
      </div>
    </div>
  )
}
