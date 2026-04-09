import Button from './../Button'

export default (imgName, title, btnName)=> `
                <article class="card card-view">
                    <div class="card__img">
                        <img src="../src/assets/images/cards/${imgName}" alt="">
                    </div>
                    <h5 class="card__title">${title}</h5>
                    <div class="card__action">
                        ${Button("View Product", "btn__primary")}
                    </div>
                </article>
`