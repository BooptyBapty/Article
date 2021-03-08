import React from 'react'
import '../CSS/ArticleCard.css'

function ArticleCard(props) {
    return (
        <div className='articlecard'>
            <div className="date">
                {props.date}
            </div>
            <br/>
            <div className="title">
                <strong>
                    {props.title}
                </strong>
            </div>
        </div>
    )
}

export default ArticleCard
