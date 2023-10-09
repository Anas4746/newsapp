import React from 'react'

const NewsItems = (props) => {

    let { title, imageUrl, description, url, date, source } = props
    return (
        <div>
            <div className="container">
                <div className="card">
                    <img className="card-img-top" style={{ maxWidth: '385px', maxHeight: '210px' }} src={imageUrl ? imageUrl : "https://dailyhodl.com/wp-content/uploads/2023/09/sec-punts-fund.jpg"} alt={imageUrl} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description ? description.slice(0, 75) : ''}...<a href={url} className='text-decoration-none'>See more</a></p>
                        <a href={url} className="btn btn-danger">Read more</a>
                        <p className="card-text"><small className="text-muted">By {source ? source : 'Unknown'} on {new Date(date).toUTCString()}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewsItems