
function NewsItem({key, title, description, url, urlToImage}) {

  return (
    <>
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"350px" }} >
        <img src={urlToImage} style={{maxHeight:"200px", width:"332px"}} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,40)}</h5>
            <p className="card-text">{description ? description.slice(0,50) : ""}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
    </>
  )
}

export default NewsItem
