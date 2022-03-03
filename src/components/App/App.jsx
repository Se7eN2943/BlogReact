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
import CreateArticle from '../Forms/CreateArticle'
import EditProfile from '../Forms/EditProfile'
import EditArticle from '../Forms/EditArticle'



const blog = new blogAPI();

const App = ({ setArticles, setArticle, totalRes }) => {

    const [page, setPage] = useState(1)
    const [load, setLoad] = useState(false)

    const getAllArticles = async (page) => {
        setLoad(true)
        await blog.getArticles(page).then((articles => setArticles(articles)))
        setLoad(false)
    };

    const getArticle = (slug) => {
        setLoad(true)
        blog.getArticle(slug).then((article => setArticle(article)));
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
                            <ArticleList getArticle={getArticle} />
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
                    <Route path='articles/:slug' element={<AlloneArticle getArticle={getArticle} />} />
                    <Route path='sign-in' element={<SignIn />} />
                    <Route path='articles/:slug/edit' element={<EditArticle />} />
                    <Route path='sign-up' element={<SingUp />} />
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
        totalRes: state.articlesCount
    }
}

export default connect(mapStateToProps, { setArticles, setArticle })(App)
