import { useState } from 'react';
import {Link} from "react-router-dom";

import './Header.scss';
import logo from '../../assets/img/logo.svg'
import avatarIcon from '../../assets/img/avatar.png'

function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false);


    function dropdown() {
        return (
            <>
                <div className="header__user-dropdown">
                    <div className="header__user-title">Выберите бренд</div>
                    <div className="header__user-links">
                        <Link to="/" className="header__user-link">NiBK</Link>
                        <Link to="/" className="header__user-link">Sakura</Link>
                        <Link to="/" className="header__user-link">JS</Link>
                        <Link to="/" className="header__user-link">Sure</Link>
                        <Link to="/" className="header__user-link">Brixo</Link>
                    </div>
                    <button className="header__user-link header__user-logout">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.25004 1.08325C2.05342 1.08325 1.08337 2.0533 1.08337 3.24992V4.87492H2.16671V3.24992C2.16671 2.65161 2.65173 2.16659 3.25004 2.16659H9.75004C10.3484 2.16659 10.8334 2.65161 10.8334 3.24992V9.74992C10.8334 10.3482 10.3484 10.8333 9.75004 10.8333H3.25004C2.65173 10.8333 2.16671 10.3482 2.16671 9.74992V8.12492H1.08337V9.74992C1.08337 10.9465 2.05342 11.9166 3.25004 11.9166H9.75004C10.9466 11.9166 11.9167 10.9465 11.9167 9.74992V3.24992C11.9167 2.0533 10.9466 1.08325 9.75004 1.08325H3.25004Z" fill="#E21A1A"/>
                            <path d="M1.62504 5.95826C1.32589 5.95826 1.08337 6.20076 1.08337 6.49992C1.08337 6.79909 1.32589 7.04159 1.62504 7.04159H6.81556L5.44211 8.41499C5.23059 8.62656 5.23059 8.96949 5.44211 9.18107C5.65363 9.39259 5.99661 9.39259 6.20814 9.18107L8.48081 6.90839C8.59472 6.80905 8.66671 6.66291 8.66671 6.49992C8.66671 6.33694 8.59472 6.19079 8.48081 6.09145L6.20814 3.81881C5.99661 3.60727 5.65363 3.60727 5.44211 3.81881C5.23059 4.03034 5.23059 4.37331 5.44211 4.58484L6.81556 5.95826H1.62504Z" fill="#E21A1A"/>
                        </svg>
                        <span>Выйти из системы</span>
                    </button>
                </div>
                <div
                    onClick={() => setDropdownVisible(false)}
                    className="header__user-backdrop">
                </div>
            </>
        )
    }

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <div className="header__left">
                        <div className="header__logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>

                    <div className="header__right">
                        <div className="header__search search-field">
                            <input type="text" placeholder="Поиск"/>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z" fill="#A0A1C0"/>
                            </svg>
                        </div>
                        <button className="header__notification">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.97 15.9042C11.3844 15.9164 11.7913 16.0175 12.1628 16.2005H12.1852C12.4955 16.4537 12.5483 16.9057 12.3045 17.2228C11.8605 17.8581 11.1501 18.2587 10.3735 18.3117C9.57566 18.4068 8.77216 18.1859 8.13695 17.6968C7.81028 17.4728 7.59798 17.1186 7.55544 16.7264C7.55544 16.3116 7.94312 16.119 8.30097 16.0375C8.72011 15.9492 9.14737 15.9046 9.57582 15.9042H10.97ZM10.0306 1.66666C12.6101 1.66666 15.2717 3.53339 15.5475 6.23719C15.5922 6.79277 15.5475 7.37056 15.5922 7.93355C15.7386 8.65956 16.0755 9.33423 16.5689 9.88917C16.8756 10.3452 17.0533 10.8748 17.0834 11.4226V11.5929C17.0879 12.332 16.8231 13.0477 16.3378 13.6078C15.7227 14.2655 14.8881 14.6788 13.9894 14.7708C11.3339 15.1115 8.64531 15.1115 5.98983 14.7708C5.08046 14.6858 4.23416 14.2719 3.61159 13.6078C3.14152 13.0423 2.89502 12.326 2.91825 11.5929V11.4226C2.94735 10.8769 3.11954 10.3483 3.41776 9.88917C3.91329 9.33371 4.25498 8.6598 4.40931 7.93355C4.45404 7.37056 4.40931 6.80017 4.45404 6.23719C4.73734 3.53339 7.34669 1.66666 9.95604 1.66666H10.0306Z" fill="#6D71F9"/>
                            </svg>
                            <span className="header__notification-num">3</span>
                        </button>
                        <div className="header__user">
                            <div className="header__user-img">
                                <img src={avatarIcon} alt=""/>
                            </div>
                            <div className="header__user-content">
                                <div className="header__user-name">Антон Харитонов</div>
                                <div className="header__user-prof">Веб-дизайнер</div>
                            </div>
                            <button
                                onClick={() => setDropdownVisible(true)}
                                className="header__user-btn"
                            >
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9999 1.17C10.8126 0.983753 10.5591 0.879211 10.2949 0.879211C10.0308 0.879211 9.77731 0.983753 9.58995 1.17L5.99995 4.71L2.45995 1.17C2.27259 0.983753 2.01913 0.879211 1.75495 0.879211C1.49076 0.879211 1.23731 0.983753 1.04995 1.17C0.95622 1.26297 0.881826 1.37357 0.831057 1.49543C0.780288 1.61729 0.75415 1.74799 0.75415 1.88C0.75415 2.01202 0.780288 2.14272 0.831057 2.26458C0.881826 2.38644 0.95622 2.49704 1.04995 2.59L5.28995 6.83C5.38291 6.92373 5.49351 6.99813 5.61537 7.04889C5.73723 7.09966 5.86794 7.1258 5.99995 7.1258C6.13196 7.1258 6.26267 7.09966 6.38453 7.04889C6.50638 6.99813 6.61699 6.92373 6.70995 6.83L10.9999 2.59C11.0937 2.49704 11.1681 2.38644 11.2188 2.26458C11.2696 2.14272 11.2957 2.01202 11.2957 1.88C11.2957 1.74799 11.2696 1.61729 11.2188 1.49543C11.1681 1.37357 11.0937 1.26297 10.9999 1.17Z" fill="#232445"/>
                                </svg>
                            </button>
                            {dropdownVisible ? dropdown() :''}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header;
