var request=new XMLHttpRequest();
request.open("get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);

    let res=data.filter((element)=>element.region==="Asia");
    console.log(res);

    
}

//Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open("get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);

    let jas=data.filter((element=>element.population<200000));
    console.log(jas);



}

//Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open("get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })
}


var request=new XMLHttpRequest();
request.open("get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}

//Print the country which use US Dollars as currency.

var request = new XMLHttpRequest();
request.open("get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
    }



