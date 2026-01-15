let cityName=prompt("Enter the city name");
let fetchApi=async ()=>{
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=pune&appid=06a34d287c1333589089519c4ff35e3e`);
    data=await data.json();
    console.log(data);

}
fetchApi();