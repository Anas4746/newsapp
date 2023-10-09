import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {

    const [article, setarticle] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    const newsUpdate = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${props.pageSize}`
        props.setProgress(30)
        setloading(true)
        const data = await fetch(url)
        const parseData = await data.json()
        props.setProgress(60)
        setarticle(parseData.articles)
        settotalResults(parseData.totalResults)
        setloading(false)
        props.setProgress(100)

    }

    useEffect(() => {
        newsUpdate()
        // eslint-disable-next-line 
    }, []);

    // const prevPage = async () => {
    //     setpage(page - 1)
    //     newsUpdate();

    // }

    // const nextPage = async () => {
    //     setpage(page + 1)
    //     newsUpdate();
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page + 1}&pageSize=${props.pageSize}`
        setpage(page + 1)
        const data = await fetch(url)
        const parseData = await data.json()
        setarticle(article.concat(parseData.articles))
        settotalResults(parseData.totalResults)
        setloading(false)

    }
    return (

        <div className='container' style={{ marginTop: '7rem' }}>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== totalResults}
                loader={<Spinner />}
            >   <div className="container">
                    <div className="row">
                        {article.map((element) => {
                            if (element.content !== '[Removed]') {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItems title={element.title} imageUrl={element.urlToImage} description={element.description} url={element.url} source={element.source.name} date={element.publishedAt} />
                                </div>
                            }
                            return null;
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: '5',
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News


// static defaultProps = {
//     country: 'in',
//     pageSize: '5',
//     category: 'general'
// }

// static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
// }

