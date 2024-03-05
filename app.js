const button = document.querySelector(".search");
const input = document.querySelector(".search-input");
const info = document.querySelector(".info");
const contentS = document.querySelector(".container");

button.addEventListener('click', () => {
    let search = input.value;
    fetch(`https://lobster-app-kps4x.ondigitalocean.app/api/weather/batumi?search=${search}`)
        .then((response) => response.json())
        .then((data) => {
            const content_container = document.createElement("div");
            const content = document.getElementById("content");

            content_container.innerHTML = `
               
                            <div class = "firstinfo">


                            <h1 class="celcius">${data.currentTemp}°</h1>
                                 
                                <div class="firsttextinfo">
                                <h1 class="cid">${data.city}</h1>
                                <p class="cids">${data.dayLength} - ${data.month}, </p>
                              </div>
                              <div class = "Cloudinfo">
                                <h1 class="cloud"><i class="fa-solid fa-cloud"></i></h1>
                            </div>

                             </div>




                                <div class="mainContainercontent">
                                <p class="det">Weather details..</p>
                               
                                    <h1 class="thun">thunderstorm with light drizzle</h1>
                                        
                                        <div class="maximum">
                                        <p>Temp Max</p>
                                        <div class="icon">${data.maxTemp}<i class="fa-solid fa-temperature-half" id="max"></i></div>
                                         </div>
                                   
                                        <div class="minimum">
                                        <p>Min Temp</p> 
                                        <div class="icon">${data.minTemp}<i class="fa-solid fa-temperature-half" id="min"></i></div>
                                        </div>
                                        
                                        <div class="hum">
                                        <p>Humidity</p>
                                        <div class="icon">${data.humidity}<i class="fa-regular fa-droplet-degree"></i></div>
                                        </div>
                                         

                                        <div class="windyS">
                                        <p>Wind</p>
                                        <div class="icons">${data.windSpeed}km/h <i class="fa-solid fa-wind"></i></div>
                                        </div>
                                      

              </div>                     
            `;
            contentS.style.display = 'none';
            info.style.display = 'none';
            content.appendChild(content_container);
        })
        .catch(error => {
            console.error(error);
        });
});
