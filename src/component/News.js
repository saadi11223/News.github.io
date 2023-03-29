import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps={
    country: 'us',
    pageSize:8,
    category:'general',
  }
  static propType={ 
   country: PropTypes.string,
   pagesize:PropTypes.number,
   category:PropTypes.string,

  }
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title=`${this.capitalizeFirstLetter( this.props.category)} - DailyNews`

  }
  async componentDidMount() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=caa5b2c3c57b4958bb58e06c3cd64500&page=1&pagesize=${this.props.pageSize}`;
    let data =await fetch(url);
    this.setState({loading:true})
    let parsedData =await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false,
    })
    this.props.setProgress(100);
  }
  //  fetchMoreData = async () => {
  //   this.setState({page:this.state.page+1})
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=caa5b2c3c57b4958bb58e06c3cd64500&page=1&pagesize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: this.state.articles.concat( parsedData.articles),
  //     totalResults: parsedData.totalResults,
  //     loading:false,
  //   })
  //   };
  HandlPreClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=$(this.props.country)&category=$(this.props.category)&apiKey=caa5b2c3c57b4958bb58e06c3cd64500&page=${
      this.state.page - 1
    }&pagesize==${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  };

  HandlNexClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    } 
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=caa5b2c3c57b4958bb58e06c3cd64500&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      });
    
  };
  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center" style={{margin:'35px 0px'}}>DailyNews- Top {this.capitalizeFirstLetter( this.props.category)} Headlines </h1>
      {this.state.loading &&  <Spinner/>}
      {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        > */}
        <div className="container">
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col md4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : " "}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}  
                />
              </div>
            );
          })}
        </div>
        </div> 
        {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.HandlPreClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.HandlNexClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
