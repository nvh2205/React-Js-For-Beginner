import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link, useRouteMatch, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountUpAlt, faSortAmountDown } from '@fortawesome/free-solid-svg-icons'

import ListOfAllProducts from '../../Components/ListOfAllProduct'
import { addProduct } from '../../../Cart/CartSlice'
import CheckboxMemory from '../../Components/CheckboxMemory'
import RecommendedProducts from '../../Components/RecommendedProducts'
import useQuery from '../../../../utils/useQuery'
import Banner from '../../../../components/Banner'

ListProduct.propTypes = {

};

function ListProduct(props) {

    const match = useRouteMatch();
    const idParams = useParams();

    //.....lấy tham số truy vấn
    let query = useQuery();
    let querySearch = query.get('searchProducts');

    const phones = useSelector(state => state.phones)

    const dispatch = useDispatch();
    const history = useHistory();

    const arrPhone = [];
    phones.map((items) => {
        items.list.map((item) => {
            arrPhone.push(item);
        })

    })


    const [listPhone, setListPhone] = useState(arrPhone);
    //console.log(listPhone)

    // useEffect(() => {
    //     const arr=[];
    //     phones.map((items) => {
    //         items.list.map((item) => {
    //             arrPhone.push(item);
    //             arr.push(item);
    //         })

    //     })
    //     setListPhone(arr);
    // },[])

    useEffect(() => {

        if (idParams.id) {
            const arr = [];
            phones.map((items) => {
                if (items.id === idParams.id) {
                    items.list.map((item) => {
                        arr.push(item);
                    })
                }
            })
            setListPhone(arr);
        }

    }, [idParams.id])

    useEffect(() => {
        if (query.get('searchProducts')) {
            const arr = [];
            arrPhone.map((item, index) => {
                if (item.title.includes(query.get('searchProducts').toUpperCase().trim())) {
                    arr.push(item)
                }

            })
            setListPhone(arr);
        }
    }, [query.get('searchProducts')])

    //pagination 
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(6);

    const numberOfPages = (numberOfPro, proPerPage) => {
        const result = [];
        for (let i = 1; i <= Math.ceil(numberOfPro / proPerPage); i++) {
            if (i == currentPage) {
                result.push(<li className="active active-custom" key={i}>{i}</li>)
            }
            else {
                result.push(<li className="active-custom" onClick={nextPage} id={i} key={i}>{i}</li>)
            }

        }
        return result;
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    //const [currentProducts,setCurrentProducts] =useState( listPhone.slice(indexOfFirstProduct, indexOfLastProduct));
    const currentProducts = listPhone.slice(indexOfFirstProduct, indexOfLastProduct)
    //Next Page 
    const nextPage = (e) => {
        setCurrentPage(e.target.textContent)
    }

    //hanlde next page icons
    const iscNextPage = (numberOfPro, proPerPage) => {
        if (currentPage < Math.ceil(numberOfPro / proPerPage)) {
            let copycurrentPage = currentPage;
            copycurrentPage++;
            setCurrentPage(copycurrentPage)
        }
    }

    const dscNextPage = (numberOfPro, proPerPage) => {
        if (currentPage > 1) {
            let copycurrentPage = currentPage;
            copycurrentPage--;
            setCurrentPage(copycurrentPage)
        }
    }

    // useEffect(() => {
    //     setCurrentProducts(listPhone.slice(indexOfFirstProduct, indexOfLastProduct))
    // },[currentPage])

    //Add to cart 
    const addToCart = (product, idParent) => {
        const buyProduct = Object.assign({ idParent: idParent, quantity: 1 }, product);
        const action = addProduct(buyProduct)
        dispatch(action);

        history.push('/cart')
    }

    //final price to sort
    const finalPrice = (product) => {
        let result = null;
        result = product.sale ? (product.price - product.price * product.sale * 0.01) : product.price
        return result;
    }




    //sort
    const iscSortProduct = () => {
        // const copyCurrentProduct=[...currentProducts];
        // copyCurrentProduct.sort((a,b)=>{
        //     const final1=finalPrice(a.listProducts[a.selectedProduct-1]);
        //     const final2=finalPrice(b.listProducts[b.selectedProduct-1]);
        //     return final1-final2;
        // })

        const copyListPhone = [...listPhone];

        copyListPhone.sort((a, b) => {
            const final1 = finalPrice(a.listProducts[a.selectedProduct - 1]);
            const final2 = finalPrice(b.listProducts[b.selectedProduct - 1]);
            return final1 - final2;
        })
        setListPhone(copyListPhone)
        //setCurrentProducts(copyCurrentProduct)

    }

    const dscSortProduct = () => {
        const copyListPhone = [...listPhone];

        copyListPhone.sort((a, b) => {
            const final1 = finalPrice(a.listProducts[a.selectedProduct - 1]);
            const final2 = finalPrice(b.listProducts[b.selectedProduct - 1]);
            return -final1 + final2;
        })
        setListPhone(copyListPhone)
    }
    //console.log(listPhone)

    //Handle Checked Memory
    const filterMemory = (memory) => {
        const copyListPhone = [...arrPhone];
        const result = [];
        copyListPhone.map((phone, index) => {

            memory.map((item) => {
                if (item == phone.listProducts[phone.selectedProduct - 1].memory) {
                    result.push(phone);
                }
            })

        })
        if (result.length == 0) {
            setListPhone(arrPhone)
        }
        else {
            setListPhone(result)
        }


    }

    return (
        <div>
            <Banner />

            <div id="page-content" className="page-wrapper">
                {/* SHOP SECTION START */}
                <div className="shop-section mb-80">
                    <div className="container">
                        <div className="row">
                            {listPhone.length > 0 ? <div className="col-md-9 col-md-push-3 col-sm-12">
                                <div className="shop-content">
                                    {/* shop-option start */}
                                    <div className="shop-option box-shadow mb-30 clearfix">
                                        {/* Nav tabs */}
                                        <ul className="shop-tab f-left" role="tablist">
                                            <li className="active">
                                                <a href="#" data-toggle="tab"><i className="zmdi zmdi-view-module" /></a>
                                            </li>
                                        </ul>
                                        {/* short-by */}
                                        <div className="short-by f-left text-center">
                                            <span>Sắp xếp theo giá :</span>
                                            <a href="#" onClick={iscSortProduct}><FontAwesomeIcon icon={faSortAmountUpAlt} /></a>
                                            <a href="#" onClick={dscSortProduct} style={{ marginLeft: '10px' }}><FontAwesomeIcon icon={faSortAmountDown} /></a>
                                        </div>
                                        {/* showing */}
                                        <div className="showing f-right text-right">
                                            <span>Chính hãng VN/A</span>
                                        </div>
                                    </div>
                                    {/* shop-option end */}
                                    {/* Tab Content start */}
                                    <div className="tab-content">
                                        {/* grid-view */}
                                        <div role="tabpanel" className="tab-pane active" id="grid-view">
                                            <div className="row">
                                                {querySearch && <h2 style={{ textAlign: 'center', }}>CÓ: 0{listPhone.length} KẾT QUẢ ĐƯỢC TÌM KIẾM</h2>}
                                                {/* product-item start */}
                                                {currentProducts.map((product, index) =>
                                                    <ListOfAllProducts key={index}
                                                        product={product}
                                                        addToCart={addToCart}
                                                    />)}
                                                {/* product-item end */}

                                            </div>
                                        </div>
                                        {/* list-view */}

                                    </div>
                                    {/* Tab Content end */}
                                    {/* shop-pagination start */}
                                    <ul className="shop-pagination box-shadow text-center ptblr-10-30">
                                        <li className="active-custom" onClick={() => dscNextPage(listPhone.length, productsPerPage)}><i className="zmdi zmdi-chevron-left" /></li>
                                        {numberOfPages(listPhone.length, productsPerPage)}
                                        <li className="active-custom" onClick={() => iscNextPage(listPhone.length, productsPerPage)}><i className="zmdi zmdi-chevron-right" /></li>
                                    </ul>
                                    {/* shop-pagination end */}
                                </div>
                            </div> : <div className="thank-you p-30 text-center">
                                <h1 className="p-3 border bg-light">
                                    Kết quả tìm kiếm của bạn không có
                                </h1></div>}

                            <div className="col-md-3 col-md-pull-9 col-sm-12">
                                {(!querySearch || !idParams) && <CheckboxMemory listPhone={listPhone} filterMemory={filterMemory} />}
                                {/* widget-product */}
                                <RecommendedProducts arrPhone={arrPhone} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* SHOP SECTION END */}
            </div>
        </div>


    );
}

export default ListProduct;