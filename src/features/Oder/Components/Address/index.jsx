import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import productApi from '../../../../api/provincesApi'
Address.propTypes = {
    address: PropTypes.object
};

Address.defaultProps = {
    address:{}
}

function Address(props) {
    const { address } = props;
    const {name,phone,provinceCode,districtCode,wardCode}=address;
    const [province,setProvince]=useState('');
    const [district,setDistrict]=useState('');
    const [ward,setWard]=useState('');

    useEffect(() => {
        const fetchProvince = async () => {
            try{

                const params = `p/${provinceCode}`
                const res= await productApi.getAll(params);
                setProvince(res.name)

            }catch(err){
                console.log(err);
            }
        }
        fetchProvince()
    },[])

    useEffect(() => {
        const fetchDistrict = async () => {
            try{

                const params = `d/${districtCode}`
                const res= await productApi.getAll(params);
                setDistrict(res.name)

            }catch(err){
                console.log(err);
            }
        }
        fetchDistrict()
    },[])


    useEffect(() => {
        const fetchWard = async () => {
            try{

                const params = `w/${wardCode}`
                const res= await productApi.getAll(params);
                setWard(res.name)

            }catch(err){
                console.log(err);
            }
        }
        fetchWard()
    },[])
    

    return (
        <div className="bill-details pl-30">
            <h6 className="widget-title border-left mb-20">Địa chỉ nhận hàng</h6>
            <ul className="bill-address">
                <li>
                    <span>Address:</span>
                    {ward}, {district}, {province}, Viet Nam
                </li>
                <li>
                    <span>Name:</span>
                    {name}
                </li>
                <li>
                    <span>phone : </span>
                    {phone}
                </li>
            </ul>
        </div>
    );
}

export default Address;