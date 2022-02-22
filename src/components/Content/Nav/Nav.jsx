import React from 'react';
import { connect } from 'react-redux'
import { setSortFlag } from '../../../actions'

const Nav = ({ sortFlag, setSortFlag }) => {
    let discountActiv = "active"
    let fastActiv = " "
    let optimalActiv = " "
    switch (sortFlag) {
        case 'fast':
            discountActiv = ''
            fastActiv = 'active'
            optimalActiv = ''
            break
        case 'optimal':
            discountActiv = ''
            fastActiv = ''
            optimalActiv = 'active'
            break
        default:
            discountActiv = 'active'
            fastActiv = ''
            optimalActiv = ''
    }
    return (
        <nav>
            <button
                name='discount'
                onClick={e => setSortFlag(e.target.name)}
                className={`navBtn_start navBtn  weight600 ${discountActiv}`}>
                самый дешевый
            </button>
            <button
                name='fast'
                onClick={e => setSortFlag(e.target.name)}
                className={'navBtn_center navBtn  weight600' + ' ' + fastActiv}>
                самый быстрый
            </button>
            <button
                name='optimal'
                onClick={e => setSortFlag(e.target.name)}
                className={`navBtn_end navBtn  weight600 ${optimalActiv}`}>
                оптимальный
            </button>
        </nav>
    )
}

const mapStateToProps = state => ({ sortFlag: state.sortFlag })

export default connect(mapStateToProps, { setSortFlag })(Nav)
