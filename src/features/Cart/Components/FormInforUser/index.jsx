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
        name: Yup.string().required('B???n c???n nh???p ????ng H??? v?? t??n'),

        phone: Yup.string().matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'S??? ??i???n tho???i kh??ng h???p l???').required('B???n c???n nh???p s??t'),

        provinceCode: Yup.number().required('B???n ch???n T???nh n??i b???n c???n giao h??ng').nullable(),

        districtCode: Yup.number().required('B???n ch???n Huy???n(Qu???n) n??i b???n c???n giao h??ng').nullable(),

        wardCode: Yup.number().required('B???n ch???n X??(Ph?????ng) n??i b???n c???n giao h??ng').nullable(),
    })

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="culculate-shipping box-shadow p-30">
                    <h6 className="widget-title border-left mb-20">Th??ng Tin Kh??ch H??ng</h6>
                    <p>B???n nh???p th??ng tin ?????y ????? shop giao h??ng cho n??t :))</p>
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
                                            placeholder="T??n:....."
                                            label="H??? T??n: "
                                        />


                                        <FastField
                                            name="phone"
                                            component={InputPhoneField}
                                            placeholder="S??? ??i???n Tho???i:....."
                                            label="S??? ??i???n tho???i-------------"
                                        />

                                        <FormGroup className="col-md-12">
                                            <button class="submit-btn-1 mt-30 btn-hover-1" type="submit">
                                                {isSubmitting && <div className="spinner-border spinner-border-sm" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>}
                                                Mua h??ng ngay n??o</button>
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