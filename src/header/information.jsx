import React, {Fragment, Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import phone from '../img/phone.png';
import clock from '../img/clock.png'
import mail from '../img/mail.png';
import basket from '../img/basket.png';

import './index.css';
import SocialAndBasket from "./social-and-basket";

class Information extends Component {
    info = () => {
        return (
            <Fragment>
                <div className="header-item col">
                    <img className="header-item-icon" src={mail}/>
                    <div className="header-item-wrapper">
                        <div className="header-item-title">НАША ПОЧТА</div>
                        <div className="header-item-description">info@belvideo.by</div>
                    </div>
                </div>

                <div className="header-item col">
                    <img className="header-item-icon" src={clock}/>
                    <div className="header-item-wrapper">
                        <div className="header-item-title">РЕЖИМ РАБОТЫ</div>
                        <div className="header-item-description">Пн-Сб: 09.30 - 19.00</div>
                    </div>
                </div>

                <div className="header-item col">
                    <img className="header-item-icon" src={phone}/>
                    <div className="header-item-wrapper">
                        <div className="header-item-title">ПОЗВОНИТЕ НАМ</div>
                        <a className="header-item-description" href="tel:+375291661221">
                            <div>+375291661221</div>
                        </a>
                    </div>
                </div>

            </Fragment>
        )
    };

    rightBlock = () => {
        return (
            <div className="right-block">
                <div className="basket">
                    <Link to="/basket">
                        <div className="basket-count">
                            {this.state.count}
                        </div>
                        <img className="basket-icon" src={basket}/>
                    </Link>
                </div>
                <div className="social-block row">
                    <a href="https://t.me/belvideo.by">
                        <div className="social social-telegram col"/>
                    </a>
                    <a href="https://www.instagram.com/belvideo.by/">
                        <div className="social social-instagram col"/>
                    </a>
                    <a href="https://vk.com/belvideo.by">
                        <div className="social social-vk col"/>
                    </a>
                </div>
            </div>
        )
    };

    render() {
        return (
            <Fragment>
                {this.info()}
                <SocialAndBasket />
            </Fragment>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        basket: state.basket

    }
};

export default connect(mapStateToProps,)(Information);
