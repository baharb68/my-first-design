import React, { Component } from 'react'
import './Order.css'
import Orderitem from './Orderitem'
import Parttitle from '../parttitle/Parttitle'
import credit from '../img/credit-card.png'
import mail from '../img/mail.png'
import shopping from '../img/basket.png'
import seperator from '../img/seperator.png'


export default class Order extends Component {
    render() {
        return (
            <div className="w-75 d-flex flex-column align-items-center py-3 mx-auto">
                <Parttitle title="مراحل ثبت سفارش" seperator={seperator}/>
                <div className="container d-flex flex-column flex-md-row py-4 mt-3">
                    <Orderitem title="ثبت نام حساب کاربری" icon={credit} content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون " />
                    <Orderitem title="تکمیل و ارسال مدارک" icon={mail} content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون " />
                    <Orderitem title="ثبت سفارش خرید" icon={shopping} content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون " />
                </div>
            </div>
        )
    }
}
