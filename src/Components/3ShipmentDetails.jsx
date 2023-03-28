import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import './3ShipmentDetails.css';

const ShipmentDetails = () => {
    const { t } = useTranslation();

    let Shipment_Time ;
    let Shipment_Time_formatted ;
    let Shipment_Date ;
    let Shipment_Date_formatted ;
    const Shipment_Date_Options = { day: '2-digit', month: '2-digit', year: 'numeric'};
    const Shipment_Time_Options = { hour: 'numeric', minute: '2-digit', hour12:true};


    const[data,setData] = useState({});

    const fetchData1 = async ()=>{
        const response = await axios.get('https://tracking.bosta.co/shipments/track/7234258')
        .then((response)=>{
            console.log(response.data);
            setData(response.data)
        })
    }

    useEffect(()=>{
        fetchData1(); 
    },[])



    return (
        <>
            <div className='ShipmentDetailsMAIN'>
                
                <div className='Address'>
                    <h6 style={{marginBottom:'20px', fontWeight:'700'}} >عنوان التسليم</h6>
                    <div className='AddressDesc' >
                        <p>امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 Cairo</p>
                    </div>
                    <div className='Poblem' >
                        <div>
                            <img src="problem.png" alt="do you have problem?"  />
                        </div>
                        <div>
                            <p >هل يوجد مشكلة فى شحنتك؟!</p>
                            <button>ابلاغ عن مشكلة </button>
                        </div>
                    </div>
                </div>

                <div className='Details'>
                    <h6 style={{marginBottom:'20px', fontWeight:'700'}} >تفاصيل الشحنة</h6>
                    <table>
                        <thead>
                            <tr >
                                <td>التفاصيل</td>
                                <td>الوقت</td>
                                <td>التاريخ</td>
                                <td>الفرع </td>
                            </tr> 
                        </thead>
                        <tbody> 
                            {data.TransitEvents?.map(item => (
                                <tr  key={item.index} >
                                    <td>{t(item.state)}</td> 
                                    <td>{new Date(item?.timestamp).toLocaleString('en-GB', Shipment_Time_Options)}</td> 
                                    <td>{new Date(item?.timestamp).toLocaleString('en-GB', Shipment_Date_Options)}</td> 
                                    <td>{t(item.hub?item.hub:"---")}</td> 
                                </tr>
                            ))}  
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default ShipmentDetails;