import './style.scss'
import Logo from '/logo.svg'
import arrowDown from '/arrow-down.svg'
import { initDropdown } from './js/dropdown.js'
import { initCollapse } from './js/collapsible.js'


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
</div>
`
initDropdown();
initCollapse();