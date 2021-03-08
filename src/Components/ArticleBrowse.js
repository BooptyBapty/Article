import React from 'react'
import ArticleCard from './ArticleCard'
import Header from './Header'
import '../CSS/ArticleBrowse.css'

const registry = require('../registry.json')

function ArticleBrowse() {

    let regArr = [];
    
    for (let a in registry){
        if (registry.hasOwnProperty(a)) {
            let val = registry[a];
            regArr.push(val)
          }
    }

    return (
        <div>
            <Header currLoc='Articles' />
            <div id="heading">Articles</div>
            <br/>
            <div className="browseList">
            {regArr.map((i) => {
            return <div key={i.title}><a href={i.URLslug}><ArticleCard title={i.title} date={i.date}/></a></div>
            })}
            </div>
        </div>
    )
}

export default ArticleBrowse
