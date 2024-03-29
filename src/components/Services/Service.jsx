import React, { Component } from 'react'
import './Service.css'
import Serviceitem from './Serviceitem'
import Parttitle from '../parttitle/Parttitle'
import arrow from '../img/arrow.png'
import support from '../img/support.png'
import user from '../img/user.png'
import programming from '../img/programming.png'
import follow from '../img/follow.png'
import seperator from '../img/seperator.png'

export default class Service extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <Parttitle title="خدمات" seperator={seperator} />
                <div className="container d-flex flex-column flex-md-row mt-4">
                    <Serviceitem icon={support} title=" پشتیبانی" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون می باشد." btnicon={arrow} btntext="ادامه مطلب" />
                    <Serviceitem icon={user} title="کاربران" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون می باشد." btnicon={arrow} btntext="ادامه مطلب" />
                    <Serviceitem icon={programming} title="آموزش برنامه نویسی" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون می باشد." btnicon={arrow} btntext="ادامه مطلب" />
                    <Serviceitem icon={follow} title="فروش" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون می باشد." btnicon={arrow} btntext="ادامه مطلب" />
                    
                </div>
            </div>
        )
    }
}
