import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const capitalize = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalArticles, tsetTotalArticles] = useState(0);
    

    const updateNews = async () => {
        props.setProgress(10);
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(apiUrl);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData);
        setArticles(parsedData.articles);
        tsetTotalArticles(parsedData.totalArticles);
        setLoading(false);
        props.setProgress(100);
        
    }
    
    useEffect(() => {
        document.title = `${capitalize(props.category)} - News Daily`;
        updateNews();
        
    }, []);
    

    const fetchMoreData = async () => {
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(apiUrl);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        tsetTotalArticles(parsedData.totalArticles);
      };

    return (
        <>
      {<h1 className='text-center' style={{marginTop: '70px'}}>News Daily - Top Headlines( {capitalize(props.category)} )</h1>}
      {loading && <Spinner />}
      <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length !== totalArticles}
          loader={<Spinner />}
        >
        <div className="conatiner mx-5">
      <div className="row my-3">
      {articles.map((element)=>{
        return <div className="col-md-4 my-3" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://i.stack.imgur.com/l60Hf.png"} newsUrl={element.url} author={element.author} source={element.source.name} date={element.publishedAt}/>
               </div>
      })}
      </div>
      </div>
      </InfiniteScroll>
      </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'sports'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News;