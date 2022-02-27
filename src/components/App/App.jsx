import React, { useEffect, useState } from 'react';
import { Pagination, Spin } from 'antd';
import { connect } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { setArticles, setArticle } from '../../actions'
import blogAPI from '../../services'
import Header from '../Header/Header'
import ArticleList from '../ArticleList/ArticleList'
import AlloneArticle from '../Article/AlloneArticle'



import EditArticle from '../Forms/EditArticle'
import CreateArticle from '../Forms/CreateArticle'
import EditProfile from '../Forms/EditProfile'
import SignIn from '../Forms/SignIn'
import SingUp from '../Forms/SingUp'

const blog = new blogAPI();

const App = ({ setArticles, setArticle, totalRes }) => {

    const [page, setPage] = useState(1)

    const getAllArticles = (page) => blog.getArticles(page).then((articles => setArticles(articles)));

    const getArticle = (slug) => blog.getArticle(slug).then((article => setArticle(article)));

    useEffect(async () => {
        await getAllArticles()
    }, [])

    return (
        <>
            <Header />
            <EditArticle />
            <CreateArticle />
            <EditProfile />
            <SignIn />
            <SingUp />
            {/* <Spin /> */}
            {/* <Routes>
                <Route path='/articles' element={<ArticleList getArticle={getArticle} />} />
                <Route path='/' element={<Navigate to='/articles' replace />} />
                <Route path='articles/:slug' element={<AlloneArticle getArticle={getArticle} />} />
            </Routes>
            {totalRes > 20 && <Pagination
                showSizeChanger={false}
                pageSize={20}
                onChange={page => {
                    setPage(page)
                    getAllArticles((page - 1) * 20)
                }}
                size="small"
                total={totalRes}
                current={page}
            />} */}
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        article: state.article,
        totalRes: state.articlesCount
    }
}

export default connect(mapStateToProps, { setArticles, setArticle })(App)
