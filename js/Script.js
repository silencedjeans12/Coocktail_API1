var n ="0"
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then(response => response.json())
.then(data => {
    let element = document.getElementById('drink-container')
    element.innerHTML = `<p>${data.drinks[n].strDrink}</p>`

    let id = document.getElementById('iddrink-container')
    id.innerHTML = `<p>#${data.drinks[n].idDrink}</p>`

    let inst = document.getElementById('drinkInstructions-container')
    inst.innerHTML = `<p>${data.drinks[n].strInstructions}</p>`

    let imag = document.getElementById('imgDrink-container')
    imag.innerHTML = `<img class="card-img-top mb-5 mb-md-0" src='${data.drinks[n].strDrinkThumb}'/>`

    length=data.drinks.length;
    for(i=0;i<length;i++){


        let lilimg = document.getElementById('imgDrink-container2')
        

        lilimg.innerHTML = `
        <div class="col mb-5" >
        <div class="card h-100" >

        <img class="card-img-top" src='${data.drinks[1].strDrinkThumb}' width=50px heigh=50px alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder" >${data.drinks[1].strDrink}</h5>
                $40.00 - $80.00
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
        </div>
        </div>
        </div>      
        `;

        let  lilimg2 = document.getElementById('imgDrink-container3')
        lilimg2.innerHTML=`
        <div class="card h-100"  >
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem"  >Sale</div>
        <img class="card-img-top" src='${data.drinks[2].strDrinkThumb}' width=50px heigh=50px alt="..." />
        <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">${data.drinks[2].strDrink}</h5>
                                
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                         <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                </div>
        </div>      
        `;

        let lilimg3 = document.getElementById('imgDrink-container4')
        lilimg3.innerHTML=`
        <div class="col mb-5" >
        <div class="card h-100" >

        <img class="card-img-top" src='${data.drinks[3].strDrinkThumb}' width=50px heigh=50px alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder" >${data.drinks[3].strDrink}</h5>
                $40.00 - $80.00
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
        </div>
        </div>
        </div>      
        `;
        let lilimg4 = document.getElementById('imgDrink-container5')
        lilimg4.innerHTML=`
        <div class="col mb-5" >
        <div class="card h-100" >
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem"  >Sale</div>

        <img class="card-img-top" src='${data.drinks[4].strDrinkThumb}' width=50px heigh=50px alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder" >${data.drinks[4].strDrink}</h5>
                $40.00 - $80.00
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
        </div>
        </div>
        </div>      
        `;
        let lilimg5 = document.getElementById('imgDrink-container6')
        lilimg5.innerHTML=`
        <div class="col mb-5" >
        <div class="card h-100" >
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem"  >Sale</div>
        <img class="card-img-top" src='${data.drinks[5].strDrinkThumb}' width=50px heigh=50px alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder" >${data.drinks[5].strDrink}</h5>
                $40.00 - $80.00
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
        </div>
        </div>
        </div>      
        `;
        

    }

    

    console.log(data)
})

.catch(err => console.log(err))




