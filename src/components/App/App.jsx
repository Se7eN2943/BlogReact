import React, { useEffect, useState } from 'react';
import { Pagination, Spin } from 'antd';
import { connect } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { setArticles, setArticle } from '../../redux/actions'
import blogAPI from '../../services'
import Header from '../Header/Header'
import ArticleList from '../ArticleList/ArticleList'
import AlloneArticle from '../Article/AlloneArticle'
import SignIn from '../Forms/SignIn'
import SingUp from '../Forms/SingUp'
import Private from '../HOC/Private'
import OnAutoris from '../HOC/OnAutoris'
import CreateArticle from '../Forms/CreateArticle'
import EditProfile from '../Forms/EditProfile'
import EditArticle from '../Forms/EditArticle'



const blog = new blogAPI();

const App = ({ setArticles, setArticle, totalRes, token }) => {

    const [page, setPage] = useState(1)
    const [load, setLoad] = useState(false)

    const getAllArticles = async (page) => {
        setLoad(true)
        await blog.getArticles(page, token).then((articles => setArticles(articles)))
        setLoad(false)
    };

    const getArticle = (slug, token) => {
        setLoad(true)
        blog.getArticle(slug, token).then((article => setArticle(article)));
        setLoad(false)
    };


    useEffect(async () => {
        await getAllArticles()
    }, [])

    return (
        <>
            <Header getAllArticles={getAllArticles} />
            {load ? <Spin /> :
                <Routes>
                    <Route path='/articles' element={
                        <>
                            <ArticleList  getArticle={getArticle} />
                            {totalRes > 20 && !load && <Pagination
                                showSizeChanger={false}
                                pageSize={20}
                                onChange={page => {
                                    setPage(page)
                                    getAllArticles((page - 1) * 20)
                                }}
                                size="small"
                                total={totalRes}
                                current={page}
                            />}
                        </>
                    } />
                    <Route path='/' element={<Navigate to='/articles' replace />} />
                    <Route path='articles/:slug' element={<AlloneArticle getAllArticles={getAllArticles} getArticle={getArticle} />} />
                    <Route path='sign-in' element={
                        <OnAutoris>
                            <SignIn />
                        </OnAutoris>
                    } />
                    <Route path='articles/:slug/edit' element={
                        <Private>
                            <EditArticle />
                        </Private>
                    } />
                    <Route path='sign-up' element={
                        <OnAutoris>
                            <SingUp />
                        </OnAutoris>
                    } />
                    <Route path='profile' element={
                        <Private>
                            <EditProfile />
                        </Private>
                    } />
                    <Route path='new-article' element={
                        <Private>
                            <CreateArticle />
                        </Private>
                    } />
                </Routes>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        article: state.article,
        totalRes: state.articlesCount,
        token: state.token
    }
}

export default connect(mapStateToProps, { setArticles, setArticle })(App)
