import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { connect } from 'react-redux'
import { setFilterList } from '../../actions'
import 'antd/dist/antd.css';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const defaultCheckedList = ['Без пересадок'];

const Filters = ({ setFilterList, filterList }) => {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
        setFilterList(list)
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
        e.target.checked
            ? onChange(['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'])
            : onChange([])
    };

    return (
        <div className='filters block-shadow'>
            <span className='transplants'>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Все
            </Checkbox>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        </div>
    );
};

const mapStateToProps = state => ({filterList: state.filterList})

export default connect(mapStateToProps, { setFilterList })(Filters)
