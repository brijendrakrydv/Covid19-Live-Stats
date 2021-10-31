async function getCovidApi()
{
    const jsonFormatData= await fetch("https://api.covid19api.com/summary");
    const jsFormatData = await jsonFormatData.json();
   
    const TotalglobalCase = jsFormatData.Global.TotalConfirmed ;
    console.log("Total Global Case : " +TotalglobalCase);
    
    const countryName= jsFormatData.Countries[0].Country ;
    console.log("First Country Name : "+countryName);
    console.log(jsFormatData.Countries[76].Country);

    document.getElementById("g1").innerHTML = jsFormatData.Global.TotalConfirmed ;
    document.getElementById("g2").innerHTML = jsFormatData.Global.TotalDeaths ;
    // document.getElementById("g3").innerHTML = jsFormatData.Global.TotalRecovered ;
    document.getElementById("g4").innerHTML = jsFormatData.Global.NewConfirmed ;
    document.getElementById("g5").innerHTML = jsFormatData.Global.NewDeaths ;
    // document.getElementById("g6").innerHTML = jsFormatData.Global.NewRecovered ;
    
    
    document.getElementById("i1").innerHTML = jsFormatData.Countries[76].TotalConfirmed ;
    document.getElementById("i2").innerHTML = jsFormatData.Countries[76].TotalDeaths ;
    // document.getElementById("i3").innerHTML = jsFormatData.Countries[76].TotalRecovered ;
    document.getElementById("i4").innerHTML = jsFormatData.Countries[76].NewConfirmed ;
    document.getElementById("i5").innerHTML = jsFormatData.Countries[76].NewDeaths ;
    // document.getElementById("i6").innerHTML = jsFormatData.Countries[76].NewRecovered ;
    // document.getElementById("i7").innerHTML = jsFormatData.Countries[76].Date ;
    
}
getCovidApi();