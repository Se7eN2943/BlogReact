import React, { useEffect, useState } from 'react';
import { Pagination, Spin } from 'antd';
import { connect } from 'react-redux'
import { setArticles } from '../../actions'
import blogAPI from '../../services'
import Header from '../Header/Header'
import ArticleList from '../ArticleList/ArticleList'



const blog = new blogAPI();


const App = ({ setArticles, articles, totalRes }) => {

    const [page, setPage] = useState(1)


    const getAllArticles = (page) => blog.getArticles(page).then((articles => setArticles(articles)));

    useEffect(async () => {
        await getAllArticles()
    }, [])


    return (
        <React.Fragment >
            <Header />
            {/* <Spin /> */}
            <ArticleList />
            <Pagination
                showSizeChanger={false}
                pageSize={20}
                onChange={page => {
                    setPage(page)
                    getAllArticles((page - 1) * 20)
                }}
                size="small"
                total={totalRes}
                current={page}
            />
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        totalRes: state.articlesCount
    }
}

export default connect(mapStateToProps, { setArticles })(App)
