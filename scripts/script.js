
(function () {
    function isMobile() {
        var isMobile = false; //initiate as false
        // device detection
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            isMobile = true;
        }
        return isMobile;
    }

    function Gif(name, user, size, url) {
        this.name = name;
        this.user = user;
        this.size = size;
        this.url = url;
    }
    Gif.prototype.click = function () {
        const maxed = document.querySelector(".Maxed");
        maxed.classList.toggle("Display-none")
    }

    function addEvents() {
        const gif = document.querySelector(".gif");
        gif.addEventListener("click", event => {
            const maxed = document.querySelector(".Maxed");
            maxed.classList.toggle("Display-none");
        });
        const max_close = document.querySelector(".Maxed-close");
        max_close.addEventListener("click", event => {
            const maxed = document.querySelector(".Maxed");
            maxed.classList.add("Display-none");
        });

        const favoritesLink = document.getElementById("favorites");
        favoritesLink.addEventListener("click", event => {
            favoritesPage();
        });

        const addToFav = document.querySelector(".heart");
        addToFav.addEventListener("click", event => {
            if (favoriteGifos.length === 0) {
                console.log("Favorites es igual a null");
            }
            const user = document.querySelector(".Maxed .info .user");
            const urlImg = document.querySelector(".Maxed img");
            const title = document.querySelector(".Maxed .info .title");
            const size = document.querySelector(".Maxed").getAttribute("size");
            if (typeof favoriteGifos.find(element => element.name === title.textContent) === "undefined") {
                favoriteGifos.push(new Gif(title.textContent, user.textContent, size, urlImg.src));
                localStorage.setItem("favorites", JSON.stringify(favoriteGifos));
                favoriteGifos.renderGif(favoriteGifos.length - 1);
                console.log("Added to favs");
            } else {
                console.log("Ya se habia agregado a favoritos");
            }
        });

        const logo = document.querySelector(".Header-logo");
        logo.addEventListener("click", event => {
            const mainSection = document.querySelector(".Main");
            const favoritesDiv = document.querySelector(".Main-favorites");
            console.log(favoritesDiv);
            if (favoritesDiv !== null) {

                mainSection.replaceChild(searchSection, favoritesDiv);
            }

        });

        const searchInput = document.querySelector(".Main-input");
        searchInput.addEventListener("keyup", event =>{
            if(searchInput.value === ""){
                console.log("No es vacio el imput");
                const searchLeft = document.querySelector(".Search-button");
                searchLeft.classList.add("Visibility-hidden");
                const searchButton = document.querySelector(".Main-button");
                searchButton.classList.remove("Display-none")
                const searchClose = document.querySelector(".Search-close");
                searchClose.classList.add("Display-none");
            }else{                
                const searchLeft = document.querySelector(".Search-button");
                searchLeft.classList.remove("Visibility-hidden");
                console.log("No es vacio el imput");
                const searchButton = document.querySelector(".Main-button");
                searchButton.classList.add("Display-none")
                const searchClose = document.querySelector(".Search-close");
                searchClose.classList.remove("Display-none");
            }
            const search = fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=kw3X9FTrbh2vB8r9JFZSSF2FIPDWlitS&q=${searchInput.value}`)
            .then(result =>{
                if(result.ok && result.status === 200){
                    console.log("----------------" );
                    let options = "";
                    result.json()
                    .then(jsonData => {
                        console.log("----------------", jsonData.data);
                        jsonData.data.forEach((option,index) => {
                            console.log("----------------",index );
                            options = options + `<div class="Option" data-number=${index}><i class="fas fa-search Option-button"></i><span>${option.name}</span></div>`;
                        });

                        const listInput = document.createElement("div");
                        listInput.classList.add("Options-div");
                        listInput.innerHTML = options;
                        const searchForm = document.querySelector(".Main-form");

                        //se obtiene el listInput que tiene ahora mismo
                        const oldList = document.querySelector(".Options-div");
                        searchForm.replaceChild(listInput, oldList);                        
                    })
                    .catch(error => {
                        console.log("erroreeeees: ", error);
                    });
                }else{
                    console.log("No cargo bien")
                }
            }).catch(error =>{
                console.log("hubo un error cargando la busqueda" );
            });

        });

        const searchClose = document.querySelector(".Search-close");
        searchClose.addEventListener("click", event => {
            console.log("Reseteando search");
            const searchInput = document.querySelector(".Main-input");
            searchInput.value = "";
            const searchLeft = document.querySelector(".Search-button");
            searchLeft.classList.add("Visibility-hidden");
            const searchButton = document.querySelector(".Main-button");
            searchButton.classList.remove("Display-none")
            const searchClose = document.querySelector(".Search-close");
            searchClose.classList.add("Display-none");
            const listInput = document.querySelector(".Options-div");
            listInput.innerHTML = "";
        })
    }


    function loadTrending(trendings) {
        const prmiseTrending = fetch("https://api.giphy.com/v1/gifs/trending?api_key=kw3X9FTrbh2vB8r9JFZSSF2FIPDWlitS&limit=5&offset=2")
            .then(result => {
                console.log("Cargo los trendings");
                console.log("is mobile?", isMobile());
                const trendingsDiv = document.querySelector(".trending");
                if (result.status === 200 && result.ok) {
                    if (isMobile()) {
                        result.json()
                            .then(jsonData => {
                                for (gif of jsonData.data) {
                                    const height = gif.images.downsized.height;
                                    const width = gif.images.downsized.width;
                                    const urlImg = gif.images.downsized.url;
                                    const user = gif.username;
                                    const title = gif.title;
                                    let size = "";
                                    //cargar en la vista
                                    const gifDiv = document.createElement("div");
                                    gifDiv.classList.add("div-gif");
                                    const gifImg = document.createElement("img");
                                    gifImg.src = urlImg;
                                    if (width > height) {
                                        gifImg.classList.add("img-width");
                                        gifImg.setAttribute("size", "img-width");
                                        size = "img-width";
                                    } else {
                                        gifImg.classList.add("img-height");
                                        gifImg.setAttribute("size", "img-height");
                                        size = "img-height";
                                    }
                                    gifDiv.appendChild(gifImg);
                                    trendingsDiv.appendChild(gifDiv);
                                    //adding gifs to trendings array                        
                                    trendings.push(new Gif(title, user, size, urlImg));
                                    //add event to image
                                    gifImg.addEventListener("click", event => {
                                        const maxed = document.querySelector(".Maxed");
                                        maxed.setAttribute("size", event.target.getAttribute("size"));
                                        console.log("Target:--", event.target.getAttribute("size"));
                                        document.querySelector(".Maxed img").src = gifImg.src;
                                        document.querySelector(".Maxed .info .user").innerText = user;
                                        document.querySelector(".Maxed .info .title").innerText = title;
                                        maxed.classList.toggle("Display-none");
                                    });
                                }
                            })
                    }
                }

            }).catch(result => {
                console.log("No cargo los trendings");
            });
    }

    function favoritesPage() {
        //creating elements
        const favoritesDiv = document.createElement("section");
        favoritesDiv.classList.add("Main-favorites");
        const icon = document.createElement("i");
        icon.classList.add("fav-Icon");
        const favTitle = document.createElement("h2");
        favTitle.classList.add("fav-Title");
        favTitle.innerText = "Favoritos";
        const favGifsDiv = document.createElement("div");
        favGifsDiv.classList.add("favGifs-div");

        const mainSection = document.querySelector(".Main");
        const searchSection = document.querySelector(".Main-Search");
        //realizar validacion de si no existe searchSection entonces no realizar un replace
        //Looking for gifs in localStorage
        if (searchSection !== null) {

            if (favoriteGifos.length === 0) {
                const favNoContentIcon = document.createElement("i");
                favNoContentIcon.classList.add("fav-noContent-icon")
                const favNoContentP = document.createElement("p");
                favNoContentP.innerText = "¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!";
                console.log("Favorites es igual a null");
                //adding children
                favoritesDiv.appendChild(icon);
                favoritesDiv.appendChild(favTitle);
                favoritesDiv.appendChild(favNoContentIcon);
                favoritesDiv.appendChild(favNoContentP);
                mainSection.replaceChild(favoritesDiv, searchSection);
            } else {
                //adding children
                favoritesDiv.appendChild(icon);
                favoritesDiv.appendChild(favTitle);
                favoritesDiv.appendChild(favGifsDiv);
                mainSection.replaceChild(favoritesDiv, searchSection);
                favoriteGifos.forEach((gif, index) => {
                    console.log("index: " + index);
                    favoriteGifos.renderGif(index);
                });
            }
        }
        return favoritesDiv;
    }
    function loadfavorites() {
        let favArr = JSON.parse(localStorage.getItem("favorites"));
        console.log(favArr);
        return favArr === null ? [] : favArr;
    }

    const favoriteGifos = loadfavorites();
    favoriteGifos.renderGif = function (index) {
        //creating elements
        const favGifsDiv = document.querySelector(".favGifs-div");
        if(favGifsDiv !== null){
            
        console.log("Si tiene favoritos");
        const gif = this[index];
        const img = document.createElement("img");
        img.src = gif.url;
        favGifsDiv.appendChild(img);
        img.addEventListener("click", event => {
            const maxed = document.querySelector(".Maxed");
            maxed.classList.toggle("Display-none");
        });
        //adding children

        }
        return favGifsDiv;
    }
    const searchSection = document.querySelector(".Main-Search");
    const myGifos = [];
    let searchGifos = [];
    const trendingGifos = [];
    addEvents();
    loadTrending(trendingGifos);
})();

