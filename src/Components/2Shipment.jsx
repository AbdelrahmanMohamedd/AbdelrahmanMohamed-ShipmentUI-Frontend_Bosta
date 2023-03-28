import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import CheckIcon from '@mui/icons-material/Check';
import './2Shipment.css';
import axios from 'axios';


const Shipment = () => {
    const { t } = useTranslation();

    const[data,setData] = useState({});

    const fetchData1 = async ()=>{
        const response = await axios.get('https://tracking.bosta.co/shipments/track/7234258')
        .then((response)=>{
            console.log(response.data);
            setData(response.data)
        })
    }
    // const fetchData2 = async ()=>{
    //     const response = await axios.get('https://tracking.bosta.co/shipments/track/9442984')
    //     .then((response)=>{
    //         console.log(response.data);
    //     })
    // }
    // const fetchData3 = async ()=>{
    //     const response = await axios.get('https://tracking.bosta.co/shipments/track/1094442')
    //     .then((response)=>{
    //         console.log(response.data);
    //     })
    // }

    useEffect(()=>{
        fetchData1();
        // fetchData2();
        // fetchData3();
    },[])


    const PromisedDate = new Date(data.PromisedDate);
    const PromisedDate_formatted = PromisedDate.toLocaleString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    
    const CurrentStatusDate = new Date(data.CurrentStatus?.timestamp);
    const CurrentStatusDate_formatted = CurrentStatusDate.toLocaleString('en-GB', { year: 'numeric', month: '2-digit', weekday :'short', day: '2-digit', hour: 'numeric', minute: '2-digit',  hour12:true });



    const labelArray = ['تم انشاء الشحنة', 'تم استلام الشحنة من التاجر', 'الشحنة خرجت للتسليم', 'تم التسليم']
    const [currentStep, updateCurrentStep] = useState();



    return (
        <>
        <div className='ShipmentMain '>
            <div className='ShipmentInfo' >
                <table >
                    <tbody>
                        <tr className='Shipmentrow1' >
                            <td>{t("Delivery Date within")}</td>
                            <td>{t("Provider Name")}</td>
                            <td>{t("Last Update")}</td>
                            <td>{t("Tracking Number ")+ data.TrackingNumber}</td>
                        </tr>
                        <tr className='Shipmentrow2'  >
                            <td style={{direction:'rtl'}} >{PromisedDate_formatted.slice(0,3) + t(PromisedDate_formatted.slice(3,7)) + PromisedDate_formatted.slice(7)  }</td>
                            <td>{data.provider}</td>
                            <td style={{direction:'rtl'}}>{`${t(CurrentStatusDate_formatted.slice(0,3)) + " at"+ CurrentStatusDate_formatted.slice(4)  }`}</td>
                            <td style={{color:'#3bc435'}} >{t(data.CurrentStatus?.state)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className='ShipmentSteper' >
                <div className="stepWrapper" style={{direction:'rtl'}}>
                    
                    {labelArray.map((item, index) => 
                        <div className="stepBlock">
                            <div className="circleWrapper" >
                                <div className="circle">
                                    <CheckIcon fontSize='small' /> 
                                </div>
                            </div>
                                <p>{item}</p>
                        </div>
                        )}
                </div>
            </div>
        </div>
        </>
    );
};

export default Shipment;