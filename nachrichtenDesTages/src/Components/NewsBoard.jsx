import { useEffect } from "react";
import { useState } from "react"

import NewsItem from "./NewsItem";

function NewsBoard({category}) {
    const [ articles, setArticles ] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(Response => Response.json()).then(data => setArticles(data.articles));
    }, [category])
  return (
    <div>
        <h2 className="text-center" >
            Aktuelle <span className="badge bg-danger">Nachrichten</span>
        </h2>
            { articles.map((news, index) => {
                return <NewsItem  
                        key={index} 
                        title={news.title} 
                        description={news.description}
                        url={news.url}
                        urlToImage={news.urlToImage}
                />
            })}
    </div>
  )
}

export default NewsBoard