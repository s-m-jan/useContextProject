import React, { useContext } from 'react'
import styled from './Article.module.css'
import { AppContext } from '../../App'

export default function Articles() {
  const {isLogin} = useContext(AppContext)
  return (
    <>
    {isLogin ?  (<div className={styled.articles}>
      <div className={styled.articleSingle}>article</div>
      <div className={styled.articleSingle}>article</div>
      <div className={styled.articleSingle}>article</div>
      <div className={styled.articleSingle}>article</div>
      <div className={styled.articleSingle}>article</div>
      <div className={styled.articleSingle}>article</div>
      <div className={styled.articleSingle}>article</div>
      <div className={styled.articleSingle}>article</div>
    </div>): (<div className={styled.articlesLogOut}>
      <p>Nothing found</p>
    </div>) }
    </>
    
    
  )
}
