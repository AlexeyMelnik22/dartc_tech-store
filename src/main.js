import './style.scss'
import Logo from '/logo.svg'
import { initDropdown } from './js/dropdown.js'
import { initCollapse } from './js/collapsible.js'
import Button from './components/Button'
import ViewCard from "./components/ViewCard";
import ProductCard from "./components/ProductCard";

document.querySelector('#app').innerHTML = `
<div class="wrapper">
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <a href="/" title="Main page" class="logo">
                    <svg class="logo__image" width="95" height="15">
                        <use href=${Logo}>
                    </svg>
                </a>
                <nav class="nav__menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                             <a href="#" class="nav__link dropdown-btn">
                                    Home
                             </a>
                        </li>
                         <li class="nav__item">
                            <div class="dropdown">
                                <a href="#" class="nav__link dropdown-btn">
                                    Shop
                                </a>
                                <div class="dropdown-content">
                                    <ul class="menu__list">
                                      <li class="menu__item">
                                        <a class="menu__link" href="#">Item 1</a>
                                      </li>
                                       <li class="menu__item">
                                        <a class="menu__link" href="#">Item 2</a>
                                      </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                         <li class="nav__item">
                            <div class="dropdown">
                                <a href="#" class="nav__link dropdown-btn">
                                    Collections
                                </a>
                                <div class="dropdown-content">
                                    <ul class="menu__list">
                                      <li class="menu__item">
                                        <a class="menu__link" href="#">Item 1</a>
                                      </li>
                                       <li class="menu__item">
                                        <a class="menu__link" href="#">Item 2</a>
                                      </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                         <li class="nav__item">
                           <div class="dropdown">
                                <a href="#" class="nav__link dropdown-btn">
                                    Company
                                </a>
                                <div class="dropdown-content">
                                    <ul class="menu__list">
                                      <li class="menu__item">
                                        <a class="menu__link" href="#">About</a>
                                      </li>
                                       <li class="menu__item">
                                        <a class="menu__link" href="#">FAQ</a>
                                      </li>
                                      <li class="menu__item">
                                        <a class="menu__link" href="#">Reviews</a>
                                      </li>
                                      <li class="menu__item">
                                        <a class="menu__link" href="#">Photos</a>
                                      </li>
                                      <li class="menu__item">
                                        <a class="menu__link" href="#">Gift Boxes</a>
                                      </li>
                                       <li class="menu__item">
                                        <a class="menu__link" href="#">Contact</a>
                                      </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav__item">
                            <div class="dropdown">
                                <a href="#" class="nav__link dropdown-btn">
                                    Support
                                </a>
                                <div class="dropdown-content">
                                    <ul class="menu__list">
                                      <li class="menu__item">
                                        <a class="menu__link" href="#">Item 1</a>
                                      </li>
                                       <li class="menu__item">
                                        <a class="menu__link" href="#">Item 2</a>
                                      </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
               <div class="dropdown">
                   <button class="menu-btn dropdown-btn">
                        <svg class="icon state off" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 8.5H20M4 15.5H20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg class="icon state on" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="dropdown-content">
                        <nav class="nav__menu--m" id="">
                          <ul class="menu__list">
                              <li class="menu__item">
                                <a class="menu__link" href="#">Home</a>
                              </li>
                          </ul>
                          <button class="menu__toggle">Shop</button>
                          <div class="menu__collapse">
                            <ul class="menu__list">
                               <li class="menu__item">
                                <a class="menu__link" href="#">Item 1</a>
                              </li>
                              <li class="menu__item">
                                <a class="menu__link" href="#">Item 2</a>
                              </li>
                            </ul>
                          </div>
                          <button class="menu__toggle">Collections</button>
                          <div class="menu__collapse">
                            <ul class="menu__list">
                              <li class="menu__item">
                                <a class="menu__link" href="#">Item 1</a>
                              </li>
                              <li class="menu__item">
                                <a class="menu__link" href="#">Item 2</a>
                              </li>
                            </ul>
                          </div>
                          <button class="menu__toggle">Company</button>
                          <div class="menu__collapse">
                            <ul class="menu__list">
                              <li class="menu__item">
                                <a class="menu__link" href="#">About</a>
                              </li>
                              <li class="menu__item">
                                <a class="menu__link" href="#">FAQ</a>
                              </li>
                              <li class="menu__item">
                                <a class="menu__link" href="#">Reviews</a>
                              </li>
                              <li class="menu__item">
                                <a class="menu__link" href="#">Photos</a>
                              </li>
                              <li class="menu__item">
                                <a class="menu__link" href="#">Gift Boxes</a>
                              </li>
                               <li class="menu__item">
                                <a class="menu__link" href="#">Contact</a>
                              </li>
                            </ul>
                          </div>
                          <button class="menu__toggle">Support</button>
                          <div class="menu__collapse">
                            <ul class="menu__list">
                               <li class="menu__item">
                                <a class="menu__link" href="#">Item 1</a>
                              </li>
                              <li class="menu__item">
                                <a class="menu__link" href="#">Item 2</a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                    </div>
               </div>
            </div>
        </div>
    </header>
    <main class="main">
       <div class="cards__view">
            <div class="container cards__view--inner">
                ${ViewCard("view-card.jpg", "New Arrivals")}
                ${ViewCard("view-card-2.jpg", "Spring Sale Up to 50% Off")}
            </div> 
       </div>
       <nav class="breadcrumbs">
            <div class="breadcrumbs__inner container">
                <ul class="breadcrumbs__list">
                    <li class="breadcrumbs__item">
                        <a href="#" class="breadcrumbs__link">
                            Home
                        </a>
                    </li>
                    <li class="breadcrumbs__item">
                        <a href="#" class="breadcrumbs__link">
                            Electronics
                        </a>
                    </li>
                    <li class="breadcrumbs__item">
                        <a href="#" class="breadcrumbs__link">
                            Smartphones
                        </a>
                    </li>
                     <li class="breadcrumbs__item">
                        <a href="#" class="breadcrumbs__link">
                            Android
                        </a>
                    </li>
                    <li class="breadcrumbs__item">
                        <span class="breadcrumbs__last">
                            Premium
                        </span>
                    </li>
                </ul>
            </div>
       </nav>
       <div class="container">
            <div class="rate__banner">
                <div class="rate__banner--rating">
                    <svg class="icon" width="157" height="24" viewBox="0 0 157 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 19.2371L4.77392 24L6.87434 15.1111L0 9.1675L9.0234 8.43781L12.5 0L15.9766 8.43781L25 9.1675L18.1257 15.1111L20.2261 24L12.5 19.2371Z" fill="#4F307D" fill-opacity="0.8" style="fill: rgba(79, 48, 125, 0.8);" />
                      <path d="M45.5 19.2371L37.7739 24L39.8743 15.1111L33 9.1675L42.0234 8.43781L45.5 0L48.9766 8.43781L58 9.1675L51.1257 15.1111L53.2261 24L45.5 19.2371Z" fill="#4F307D" fill-opacity="0.8" style="fill: rgba(79, 48, 125, 0.8);" />
                      <path d="M78.5 19.2371L70.7739 24L72.8743 15.1111L66 9.1675L75.0234 8.43781L78.5 0L81.9766 8.43781L91 9.1675L84.1257 15.1111L86.2261 24L78.5 19.2371Z" fill="#4F307D" fill-opacity="0.8"  style="fill: rgba(79, 48, 125, 0.8);"/>
                      <path d="M111.5 19.2371L103.774 24L105.874 15.1111L99 9.1675L108.023 8.43781L111.5 0L114.977 8.43781L124 9.1675L117.126 15.1111L119.226 24L111.5 19.2371Z" fill="#4F307D" fill-opacity="0.8" style="fill: rgba(79, 48, 125, 0.8);" />
                      <path d="M144.5 19.2371L136.774 24L138.874 15.1111L132 9.1675L141.023 8.43781L144.5 0L147.977 8.43781L157 9.1675L150.126 15.1111L152.226 24L144.5 19.2371Z" fill="#4F307D" fill-opacity="0.8" style="fill: rgba(79, 48, 125, 0.8);" />
                    </svg>
                </div>   
                <h4 class="rate__banner--title">
                    Loved by tons of people! Real users, real results.
                </h4>    
                <div class="rate__banner--text">
                    Rated 4.8 out of 5 by over 7,809 customers — from dread beginners to seasoned pros.
                </div>
                <div class="rate__banner--action">
                     ${Button("View Product", "btn__primary btn__max")}
                </div>
            </div>
       </div>
       <section class="section">
            <div class="container">
                <div class="section__headline">
                    <h4>You May Also Like</h4>
                </div>
                <div class="cards__grid">
                    ${ProductCard("product-card.png", "iPhone 15 Pro", "256GB · 8GB RAM · Black", "$999", "$1,199", "Add")}
                     ${ProductCard("product-card-2.png", "Google Pixel 8", "128GB · 8GB RAM · Hazel", "$599", "$699", "Add")}
                      ${ProductCard("product-card.png", "iPhone 15 Pro", "256GB · 8GB RAM · Black", "$999", "$1,199", "Add")}
                     ${ProductCard("product-card-2.png", "Google Pixel 8", "128GB · 8GB RAM · Hazel", "$599", "$699", "Add")}
                </div>
                <div class="cards__grid--1">
                    ${ProductCard("product-card.png", "Samsung Galaxy S24 Ultra", "256GB · 8GB RAM · Black", "$999", "$1,199", "View Product", "New Release")}
                </div>
            </div>
       </section>
    </main>
</div>
`
initDropdown();
initCollapse();