import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik, Field } from 'formik';
import { Button, FormGroup, Label, Spinner, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom'
import queryString from 'query-string';

SearchHeader.propTypes = {

};

function SearchHeader(props) {

    const [search, setSearch] = useState({
        searchProducts: ''
    })

    const history = useHistory()

    const clear=()=>{
        setSearch({searchProducts:''})
    }


    const handleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        setSearch(
            { [name]: value }
        );
    }

    const handleSubmit = () => {
        history.push(`/phones/products/?${queryString.stringify(search)}`)
        clear();
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            history.push(`/phones/products/?${queryString.stringify(search)}`)
            clear();
        }
    }

    return (
        <div className="header-search f-left">
            <div className="header-search-inner">
                <button className="search-toggle">
                    <i className="zmdi zmdi-search" />
                </button>
                {/* <Formik initialValues={initialValues}>
                    {formikProps => {
                        const { values, errors, touched, isSubmitting } = formikProps;

                        return (
                            <div className="top-search-box">
                            <Form>
                                <FastField
                                    name="searchProducts"
                                    component={SearchProducts}
                                    placeholder="Tìm kiếm sản phẩm......"
                                />
                                <FormGroup>
                                    <button type="submit">
                                        <i className="zmdi zmdi-search" />
                                    </button>
                                </FormGroup>

                            </Form>
                            </div>


                        )
                    }}
                </Formik> */}

                <div className="top-search-box">
                    <input name="searchProducts" type="text" placeholder="Tìm kiếm sản phẩm..." onChange={handleChange}  onKeyDown={handleKeyDown} value={search.searchProducts}/>
                    <button type="submit" onClick={handleSubmit}>
                        <i className="zmdi zmdi-search" />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default SearchHeader;