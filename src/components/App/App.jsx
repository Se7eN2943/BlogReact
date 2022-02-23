import React from 'react';
import { Input, Spin, Alert, Tabs, Pagination } from 'antd';
import blogAPI from '../../services'
import Header from '../Header/Header'
import ArticleList from '../ArticleList/ArticleList'



const blog = new blogAPI();


const App = () => {



    return (
        <React.Fragment >
            <Header />
            <ArticleList />
            <Pagination
                showSizeChanger={false}
                pageSize={20}
                // onChange={page => this.movie('search', page)}
                size="small"
                // total={totalRes}
                // current={pages}
            />
        </React.Fragment>
    )

}


export default App
