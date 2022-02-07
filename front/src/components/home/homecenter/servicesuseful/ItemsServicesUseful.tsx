import React from 'react'
import ItemServicesUseful from './ItemServicesUseful'
import Toroob from "./../../../../assests/image/torobla.png";
import Karizmaicon from "./../../../../assests/image/karizmaicon.png";
import Moofidlogo from "./../../../../assests/image/moofidlogo.png";
import Jobvisionlast from "./../../../../assests/image/jobvisionlast.jpg";
import Khodro from "./../../../../assests/image/khodro.png";
import Flightiologo from "./../../../../assests/image/flightiologo.png";
import Karnameh from "./../../../../assests/image/karnameh.png";
import Pishvazlast from "./../../../../assests/image/pishvazlast.png";
import Bimee from "./../../../../assests/image/bimee.png";
import More from "./../../../../assests/image/more.svg";

const ItemsServicesUseful = () => {
    return (
        <div className="mt-12">
        <p className="text-sm text-gray-600 yekanBold pb-4">سرویس های پر کاربرد</p>
        <div className="flex flex-wrap items-center"> 
            <ItemServicesUseful src={Toroob} alt="Toroob" name="ترب"/>
            <ItemServicesUseful src={Karizmaicon} alt="Karizmaicon" name="کاریزما"/>
            <ItemServicesUseful src={Moofidlogo} alt="Moofidlogo" name="سرمایه گذاری"/>
            <ItemServicesUseful src={Jobvisionlast} alt="jobvisionlast" name="جاب ویژن"/>
            <ItemServicesUseful src={Khodro} alt="Khodro" name="خودرو45"/>
            <ItemServicesUseful src={Flightiologo} alt="Flightiologo" name="فلایتو"/>
            <ItemServicesUseful src={Karnameh} alt="Karnameh" name="کارنامه"/>
            <ItemServicesUseful src={Pishvazlast} alt="Pishvazlast" name="پیشواز"/>
            <ItemServicesUseful src={Bimee} alt="Bimee" name="بیمه دات کام"/>
            <ItemServicesUseful src={More} alt="More" name="بیشتر"/>
        
        </div>
        </div>
    )
}

export default ItemsServicesUseful
