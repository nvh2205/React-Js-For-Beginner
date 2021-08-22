import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'

CheckboxMemory.propTypes = {
    filterMemory: PropTypes.func,
};

CheckboxMemory.defaultProps = {
    filterMemory: null,
}

//Filter optione of product
const filterDuplicatePhone = (product, property) => {
    const arrProduct = product.map((item, index, arr) => {
        return item[`${property}`]
    })

    const uniqueSet = new Set(arrProduct);
    const backToArray = [...uniqueSet];
    return backToArray;
}

function CheckboxMemory(props) {
    const { filterMemory } = props;

    const phones = useSelector(state => state.phones)
    const listPhone = [];

    phones.map((items) => {
        items.list.map((item) => {
            listPhone.push(item);
        })

    })


    const listProduct = listPhone.map((item, index) => {
        return item.listProducts[item.selectedProduct - 1]
    })

    const arrPhones = filterDuplicatePhone(listProduct, 'memory')    
    const [checkedState, setCheckedState]=useState(new Array(arrPhones.length).fill(false));


    const [arrMemory,setArrMemory]=useState([]);

    const handleOnChange = (position,memory) => {
        const arrChecked=[]

        const updatedCheckedState = checkedState.map((item, index) => {
            return index === position ? !item : item
        });

        updatedCheckedState.map((item, index)=>{
            if(item===true){
                arrChecked.push(arrPhones[index]);
            }
        })

        filterMemory(arrChecked)
        setCheckedState(updatedCheckedState);
        
    }



    return (
        <aside className="widget operating-system box-shadow mb-30">
            <h6 className="widget-title border-left mb-20">Memory</h6>
            {arrPhones.map((item, index) => (
                <div key={index} className="">
                    <label>
                        <input
                            type="checkbox"
                            name={item}
                            value={item}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index,item)}

                        />
                        {item}
                    </label>

                    <br />

                </div>
            ))}

        </aside>
    );
}

export default CheckboxMemory;