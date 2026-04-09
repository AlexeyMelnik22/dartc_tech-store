import Button from './../Button'
import Favorite from '/favorite.svg'

export default (imgName, title, text, price, oldPrice, btnName, badge)=> `
<article class="card card__product">
                        <div class="card__preview">
                            <img class="card__img" src="../src/assets/images/cards/${imgName}" alt="Card Product">
                            <button class="card__favorite">
                                <img class="icon" src="${Favorite}" alt="Favorite">
                            </button>
                        </div>
                        <div class="card__info">
                            ${badge ? `
                            <div class="card__badge">
                                New Release
                            </div>
                            ` : ''}
                            <h6 class="card__title">
                                ${title}
                            </h6>
                            <div class="card__text">
                                ${text}
                            </div>
                            <div class="card__price">
                                <div class="price">
                                    ${price}
                                </div>
                                <div class="old-price">
                                    ${oldPrice}
                                </div>
                            </div>
                            <div class="card__action">
                                 ${Button(`${btnName}`, "btn__primary btn__max")}
                            </div>
                        </div>
                    </article>
`