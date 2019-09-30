import React, { Component } from 'react'
import './Top.css'
import Topitem from './Topitem'
import money from '../img/money.png'
import analysis from '../img/analysis.png'
import suggest from '../img/suggest.png'
import project from '../img/project.png'

export default class Top extends Component {
    render() {
        return (
            <div className="topservice w-75 d-flex flex-column flex-md-row position-absolute">
                <Topitem icon ={suggest} title="مشاور کارشناس" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. " btntext="ادامه مطلب" />
                <Topitem icon={analysis} title="تجزیه وتحلیل پیشرفته" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. " btntext="ادامه مطلب" />
                <Topitem icon={money} title="بودجه دوستانه " content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. " btntext="ادامه مطلب" />
                <Topitem icon={project} title=" پروژه " content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. " btntext="ادامه مطلب" />
            </div>
        )
    }
}
