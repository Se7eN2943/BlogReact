import React, { useEffect, useState } from 'react';
import { Pagination, Spin, Alert } from 'antd';
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
    const [onLoad, setOnLoad] = useState(true)

    const getAllArticles = async page => {
        setLoad(true)
        await blog.getArticles(page, token).then((articles => {
            if (!articles) return setOnLoad(false)
            setArticles(articles)
            setOnLoad(true)
        }))
        return setLoad(false)
    };

    const getOneArticle = async (slug, token) => {
        setLoad(true)
        await blog.getArticle(slug, token).then((article => {
            if (!article) return setOnLoad(false)
            setArticle(article)
            localStorage.setItem('article', JSON.stringify(article))
            setOnLoad(true)
        }));
        return setLoad(false)
    };

    useEffect(() => {
        getAllArticles()
    }, [])

    return (
        <>
            <Header getAllArticles={getAllArticles} />
            {load ? <Spin /> :
                <Routes>
                    <Route path='/articles' element={
                        <>
                            {!onLoad
                                ? <Alert
                                    message="info Text"
                                    description="info Description info Description info Description"
                                    type="info"
                                />
                                : <ArticleList getOneArticle={getOneArticle} />}
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
                    <Route path='articles/:slug' element={
                        <>
                            {!onLoad
                                ? <Alert
                                    message="info Text"
                                    description="info Description info Description info Description"
                                    type="info"
                                />
                                : <AlloneArticle getAllArticles={getAllArticles} getOneArticle={getOneArticle} />}
                        </>
                    } />
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
                            <CreateArticle getOneArticle={getOneArticle} />
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
