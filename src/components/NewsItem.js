import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, source, date } = props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '50%'}}>
                            {source}
                        </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <footer className="blockquote-footer my-2">By <cite title="Source Title">{author ? author : "Unknown"} on {new Date(date).toUTCString()}</cite></footer>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem