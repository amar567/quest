var loadData = (data) => {
    let detailCard = document.getElementById("popupContent")

    let innerDivs = []

    for (let i = 0; i < data.length; i++) {
        innerDivs.push(
            `
            <div style="display: flex;flex-direction: row;width: 300px;align-items: center;justify-content: space-between;">
                <div style="min-width:30%;">
                    ${data[i]["Time ( IST )"].split(":")[0] + " : " + data[i]["Time ( IST )"].split(":")[1]}
                </div>
                <div>
                    ${data[i]["Name"]}
                </div>
            </div>
            `
        )
    }

    let temp = data[0]["Date (double click to pick)"].split("/")

    let date = temp[1] + " - " + temp[0] + " - " + temp[2]

    detailCard.innerHTML += `
        <h2>
            ${date}
        </h2>
        <br/><br/>
        ${innerDivs.join("")}
        <br/><br/>
    `
}



let redirect = (link) => {
    window.location.href = link
}

Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    var dayOfYear = ((today - onejan + 86400000) / 86400000);
    return Math.ceil(dayOfYear / 7)
};

Date.prototype.getDayoftheyr = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    var dayOfYear = ((today - onejan + 86400000) / 86400000);
    return dayOfYear
};

var importdata = $.getJSON("/assets/data.json", function () {
    data = importdata.responseJSON

    let weeks = {
        "0": {},
        "1": {},
        "2": {},
        "3": {},
        "4": {},
        "5": {},
    }

    for (let i = 0; i < data.length; i++) {
        var day = new Date(data[i]["Date (double click to pick)"]);
        var currentWeekNumber = day.getWeek();
        data[i]["weekNo"] = currentWeekNumber;

        var day = new Date(data[i]["Date (double click to pick)"]);
        var currentDayNumber = day.getDayoftheyr();
        data[i]["dayNo"] = currentDayNumber;

        var time = data[i]["Time ( IST )"].split(":");
        var currentTime = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2]);
        data[i]["time"] = currentTime
    }

    data.sort((a, b) => (a.dayNo > b.dayNo) ? 1 : ((b.dayNo > a.dayNo) ? -1 : 0))
    data.sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));

    for (let i = 0; i < data.length; i++) {

        let currentWeekNumber = data[i]["weekNo"];
        let currentDayNumber = data[i]["dayNo"];

        if (currentWeekNumber === 19 | currentWeekNumber === 20 | currentWeekNumber === 21 | currentWeekNumber === 22 | currentWeekNumber === 23 | currentWeekNumber === 24) {
            if (weeks[String(currentWeekNumber - 19)][`${currentDayNumber}`]) {
                weeks[String(currentWeekNumber - 19)][`${currentDayNumber}`].push(data[i]);
            }
            else {
                weeks[String(currentWeekNumber - 19)][`${currentDayNumber}`] = []
                weeks[String(currentWeekNumber - 19)][`${currentDayNumber}`].push(data[i]);
            }
        }
    }

    for (const i in weeks) {
        for (const j in weeks[`${i}`]) {
            weeks[`${i}`][`${j}`].sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
        }
    }


    // let today = new Date("5/19/2023")
    let today = new Date()

    let checkNextweek = 0;
    let checkNextday = 0;

    // if saturday increase the week by 1
    if (today.getDay() === 6) {
        if (weeks[`${today.getWeek() - 19 + checkNextweek}`][`${today.getDayoftheyr() + checkNextday }`].length != 0) {
            loadData(weeks[`${today.getWeek() - 19 + checkNextweek}`][`${today.getDayoftheyr() + checkNextday }`])
        } else {
            checkNextweek += 1
        }
    }

    limit = 0
    while (weeks[`${today.getWeek() - 19 + checkNextweek}`][`${today.getDayoftheyr() + checkNextday}`] === undefined & limit < 500) {
        checkNextday += 1
        limit += 1
    }

    loadData(weeks[`${today.getWeek() - 19 + checkNextweek}`][`${today.getDayoftheyr() + checkNextday}`])
    // if friday add 2
    if (today.getDay() === 5) {
        // check for saturday just in case 
        loadData(weeks[`${today.getWeek() - 19 + checkNextweek + 1}`][`${today.getDayoftheyr() + checkNextday + 3}`])
        // if (weeks[`${today.getWeek() - 19 + checkNextweek}`][`${today.getDayoftheyr() + checkNextday + 1}`].length != 0) {
        //     loadData(weeks[`${today.getWeek() - 19 + checkNextweek}`][`${today.getDayoftheyr() + checkNextday + 1}`])
        // } else {
        // }
    } else {
        loadData(weeks[`${today.getWeek() - 19 + checkNextweek}`][`${today.getDayoftheyr() + checkNextday + 1}`])
    }
})


// pop up

let popup = document.getElementById("popup")

// check cookie
if ((Date.now() - localStorage.getItem("Lastvisit")) > 1800000) {
    // closePopup()
    showPopup()
} else if (localStorage, getItem("Lastvisit") === undefined) {
    showPopup()
}

function closePopup() {
    // close the popup 
    popup.style.display = "none"
    // set cookie
    localStorage.setItem("Lastvisit", Date.now())
}
function showPopup() {
    // close the popup 
    popup.style.display = "flex"
}


