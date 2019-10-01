import React, { Component } from 'react'
import './Footer.css'
import Footerproduct from './Footerproduct'
import Contactitem from './Contactitem'
import Followitem from './Followitem'
import p1 from '../img/p1.jpg'
import p2 from '../img/p2.jpg'
import p3 from '../img/p3.jpg'
import telegram from '../img/telegram.png'
import instagram from '../img/instagram.png'
import whatsapp from '../img/whatsapp.png'
import twitter from '../img/twitter.png'


export default class Footer extends Component {
    render() {
        return (
            <div className="footer container d-flex flex-column flex-md-row">
                <div className="col-12 col-md-3">
                    <div className="d-flex flex-column align-items-start text-white">
                        <h2>درباره ما</h2>
                        <p className="text-right mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                    </div>
                </div>

                <div className="col-12 col-md-3">
                    <div className="d-flex flex-column align-items-start">
                        <h3 className="text-white pb-3">آخرین محصولات</h3>
                        <Footerproduct photo={p1} title="محصول اول" date="9 مهر 1398" />
                        <Footerproduct photo={p2} title="محصول دوم " date="9 مهر 1398" />
                        <Footerproduct photo={p3} title="محصول سوم" date="9 مهر 1398" />
                    </div>
                </div>
                
                <div className="col-12 col-md-3 d-flex flex-column">
                    <div className="d-flex flex-column align-items-start">
                        <h3 className="text-white pb-3">تماس با ما</h3>
                        <Contactitem title="تلفن:" content="(555) 555-55555" />
                        <Contactitem title="ایمیل:" content="email@yahoo.com" />
                        <Contactitem title="twitter:" content="@twitter" />
                    </div>
                    <div className="d-flex justify-content-start pt-5">
                        <Followitem icon={telegram} />
                        <Followitem icon={twitter} />
                        <Followitem icon={whatsapp} />
                        <Followitem icon={instagram} />
                    </div>
                </div>
            </div>
        )
    }
}
