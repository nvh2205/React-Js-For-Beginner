import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import productApi from '../../../../api/provincesApi'
import { FastField, Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import { Button, FormGroup, Label, Spinner, Input } from 'reactstrap';

import SelectField from '../../../../custom-fields/SelectField'
import SelectDistricField from '../../../../custom-fields/SelectDistrictField'
import SelectWardsField from '../../../../custom-fields/SelectWardsFiled'
import InputNameFiled from '../../../../custom-fields/InputNameFied'
import InputPhoneField from '../../../../custom-fields/InputPhoneField'
FormInforUser.propTypes = {
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
};

FormInforUser.defaultProps = {
    initialValues: '',
    onSubmit: null,
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

function FormInforUser(props) {

    const { initialValues } = props;

    const [provinces, settProvinces] = useState();
    const [provincesValue, setProvincesvalue] = useState();
    const [districts, setDistricts] = useState();
    const [districtsValue, setdistrictsValue] = useState();
    const [wards, setWards] = useState();

    useEffect(() => {
        const fetchProvincesList = async () => {
            try {
                const params = 'p'
                const response = await productApi.getAll(params);
                const changeData = response.map((item, index) => {
                    const newData = {
                        label: item.name,
                        value: item.code
                    }
                    return newData;
                })
                settProvinces(changeData)
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }

        fetchProvincesList();
        
    }, []);

    const handleDistrict = (valueProvinces) => {
        setProvincesvalue(valueProvinces.target.value)
    }

    const handleWards = (valueDistrics) => {
        setdistrictsValue(valueDistrics.target.value)
    }

    //CallApi khi Tinh thay doi
    useEffect(() => {
        const fetchDistrictInProvinces = async () => {
            try {
                const params = {
                    depth: 2
                }
                const key = `p/${provincesValue}`;
                const response = await productApi.getDepth(key, params)

                const changeData = response.districts.map((item, index) => {
                    const newData = {
                        label: item.name,
                        value: item.code
                    }
                    return newData;
                })
                setDistricts(changeData)
            } catch (error) {
                console.log(error)
            }
        }
        if (provincesValue) {
            fetchDistrictInProvinces()
        }
      
    }, [provincesValue])

    //CallApi khi huyen thay doi
    //CallApi khi Tinh thay doi
    useEffect(() => {
        const fetchDistrictInProvinces = async () => {
            try {
                const params = {
                    depth: 2
                }
                const key = `d/${districtsValue}`;
                const response = await productApi.getDepth(key, params)

                const changeData = response.wards.map((item, index) => {
                    const newData = {
                        label: item.name,
                        value: item.code
                    }
                    return newData;
                })
                setWards(changeData)
            } catch (error) {
                console.log(error)
            }
        }
        if (districtsValue) {
            fetchDistrictInProvinces()
        }
        
    }, [districtsValue])


    //hanlde yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Bạn cần nhập đúng Họ và tên'),

        phone: Yup.string().matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Số điện thoại không hợp lệ').required('Bạn cần nhập sđt'),

        provinceCode: Yup.number().required('Bạn chọn Tỉnh nơi bạn cần giao hàng').nullable(),

        districtCode: Yup.number().required('Bạn chọn Huyện(Quận) nơi bạn cần giao hàng').nullable(),

        wardCode: Yup.number().required('Bạn chọn Xã(Phường) nơi bạn cần giao hàng').nullable(),
    })

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="culculate-shipping box-shadow p-30">
                    <h6 className="widget-title border-left mb-20">Thông Tin Khách Hàng</h6>
                    <p>Bạn nhập thông tin đầy đủ shop giao hàng cho nét :))</p>
                    <div className="row">
                        <Formik initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={props.onSubmit}
                        >
                            {formikProps => {
                                const { values, errors, touched, isSubmitting } = formikProps;
                                // console.log(values, errors, touched, 1)
                                return (
                                    <Form>



                                        <Field name="provinceCode"
                                            component={SelectField}
                                            placeholder="Tinh....."
                                            options={provinces}
                                            handleDistrict={handleDistrict}
                                        />

                                        <Field name="districtCode"
                                            component={SelectDistricField}
                                            placeholder="Huyeenj....."
                                            options={districts}
                                            handleWards={handleWards}
                                        />

                                        <Field name="wardCode"
                                            component={SelectWardsField}
                                            placeholder="Xa....."
                                            options={wards}

                                        />
                                        <FastField
                                            name="name"
                                            component={InputNameFiled}
                                            placeholder="Tên:....."
                                            label="Họ Tên: "
                                        />


                                        <FastField
                                            name="phone"
                                            component={InputPhoneField}
                                            placeholder="Số Điện Thoại:....."
                                            label="Số điện thoại-------------"
                                        />

                                        <FormGroup className="col-md-12">
                                            <button class="submit-btn-1 mt-30 btn-hover-1" type="submit">
                                                {isSubmitting && <div className="spinner-border spinner-border-sm" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>}
                                                Mua hàng ngay nào</button>
                                        </FormGroup>


                                    </Form>
                                )
                            }}
                        </Formik>


                        {/* <div className="col-md-12">
                            <button class="submit-btn-1 mt-30 btn-hover-1" type="submit">place order</button>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormInforUser;