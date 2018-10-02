const axios = require("axios");

const getClima = async (lat, lng) =>{

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a773f43310fe1f1191c656df8fb05a25`);

    //console.log(resp.data.main);
    if (resp.data.cod !== 200) {
        throw new Error("Error del api");  
        return;   
    }

    return {
        temp:resp.data.main.temp
    }    

    
}


module.exports = {
    getClima
}