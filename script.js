const pDiv = document.getElementById("date");
var month = document.getElementById("month")
var year = document.getElementById("year")
const val = document.getElementById("inputText");
var styleEl = document.getElementById("css")
const currentDate = new Date();
const today = currentDate.getDate();
var totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate();
let week = new Date(`${currentDate.getMonth()+1} 1, ${currentDate.getFullYear()} 01:15:00`).getDay();
const toggleArray = [];

const getMonthYear = () =>{
    totalDays = new Date(year.value, month.value, 0).getDate();
    console.log(totalDays)
    week = new Date(`${month.value !=="0" ? (month.value):('Jan')} 1, ${year.value} 01:15:00`).getDay();
    pDiv.innerText = "";
    styleEl.innerHTML = `.days:nth-child(${today+week}) { background-color: white;  }`;
    getDateData();
}

const getDateData = () => {
    for(let i=0; i<42; i++){
        if(i>=week && i<totalDays+week)CreateNewSpan(i-week+1) 
        else CreateNewSpan(" ");
    }
}

const CreateNewSpan = (i) =>{
    const Datecontainer = document.createElement("span");
    pDiv.appendChild(Datecontainer).innerText = i;
    Datecontainer.classList.add("days")
}

const togleTheme = () =>{
    if(toggleArray.indexOf(val.value) >=0){
        toggleArray.splice(toggleArray.indexOf(val.value),1)
        styleEl.innerHTML += `.days:nth-child(${parseInt(val.value)+week}) { background-color: white;  }`;
    }
    else if (toggleArray.indexOf(val.value) === -1 && val.value>=1 && val.value<=31){
        toggleArray.push((val.value))
        styleEl.innerHTML += `.days:nth-child(${parseInt(val.value)+week}) { background-color: #00AE51;  }`;
    }
    val.value="";
}

styleEl.innerHTML = `.days:nth-child(${today+week}) { background-color: #00AE51;  }`;
getDateData();