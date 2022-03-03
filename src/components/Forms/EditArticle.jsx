import React from 'react';
import CreateArticle from './CreateArticle';

const EditArticle = () => {




    return (
        <CreateArticle editing={true} />
    )
}

// const mapStateToProps = (state) => {
//     return {
//         article: state.article
//     }
// }

// export default connect(mapStateToProps)(AlloneArticle)
export default EditArticle