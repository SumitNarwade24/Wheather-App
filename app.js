const apiKEY="your_api_key_here";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const Searchbox = document.querySelector('.search input');
const Searchbtn = document.querySelector('.search button');
const Icon = document.querySelector('.ImgIcon');

async function checkwheather(city) {
    const response =await fetch(apiURL + city+ `&appid=${apiKEY}`);
    var data =await response.json();
    if(response.status==404){
        document.querySelector('.erorr').style.display='block';
        document.querySelector('.wheather').style.display='none';
    }else{
        console.log(data);

    
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+"°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
        document.querySelector('.Wind').innerHTML=data.wind.speed+"km/h";
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+"°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
        document.querySelector('.Wind').innerHTML=data.wind.speed+"km/h";
        
        if(data.weather[0].main =="Clouds"){
            Icon.src="/img/clouds.png";
        }else if(data.weather[0].main =="Clear"){
            Icon.src="/img/clear whether.png";
        }else if(data.weather[0].main =="Rain"){
            Icon.src="/img/rain.png";
        }else if(data.weather[0].main =="Drizzle"){
            Icon.src="/img/drizzle.png";
        }else if(data.weather[0].main =="Mist"){
            Icon.src="/img/mist.png";
        }
        
        document.querySelector('.wheather').style.display='block';
        document.querySelector('.erorr').style.display='none';

    }
   
}


Searchbtn.addEventListener('click',()=>{
    checkwheather(Searchbox.value); 
})




