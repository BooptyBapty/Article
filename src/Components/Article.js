import React, {useEffect} from 'react'
import '../CSS/Article.css'


let cum = async (fileURL)=>{
    await fetch(fileURL).then(response =>{
        response.text().then(res=>document.querySelector('.textdiv').innerHTML = res)
    })
}
        
function Article(props) {
    useEffect(() => {
        cum(props.textURL)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <div id='title'>{props.title}</div>
            <div className="textdiv"></div>
        </div>
    )
}

export default Article
