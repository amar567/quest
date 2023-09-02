var loadData = (data) => {
  let detailCard = document.getElementById("detailCard")

  detailCard.innerHTML = `
    ${data}
  `

  setTimeout(() => {
  //   $('html,body').animate({
  //     scrollTop: $("#active").offset().top
  //   },
  //     'fast');
    window.location.assign('#active')
  }, 700);
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

  console.log(data);

  // data.sort((a, b) => (a.dayNo > b.dayNo) ? 1 : ((b.dayNo > a.dayNo) ? -1 : 0))
  // data.sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));

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

  // // if saturday increase the week by 1
  // if (today.getDay() === 6) {
  //   checkNextweek += 1
  // }

  // while (weeks[`${today.getWeek() - 19 + checkNextweek}`][`${today.getDayoftheyr() + checkNextday}`] === undefined & checkNextday<1000) {
  //   checkNextday += 1
  // }

  let activeweek = today.getWeek() - 19 + checkNextweek
  let activeday = today.getDayoftheyr() + checkNextday

  let weekCard

  for (const i in weeks) {
    // each week box goes herez
    weekCard += `
      <details class="one" id="week${parseInt(i) + 1}" ${(parseInt(i) === activeweek) ? "open" : "open"}>
        <summary>Week&nbsp${parseInt(i) + 1}</summary>
    `
    for (const j in weeks[`${i}`]) {
      // each day day goes here

      let temp = weeks[`${i}`][`${j}`][0]["Date (double click to pick)"].split("/")

      let date = "Day" + String(parseInt(j) - 127) + "&nbsp&nbsp" + temp[1] + "&minus;" + temp[0] + "&minus;" + temp[2]

      weekCard += `
      <details class="two" ${(parseInt(j) === activeday) ? "open id='active'" : "open id=''"}>
        <summary> ${date}</summary>
      `

      weeks[`${i}`][`${j}`].forEach(element => {
        // each profile card goes here
        weekCard += `
            <details class="three" open>
              <summary>
                <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
                  <div style="height: 10px;"></div>
                  <img src="/assets/speakers/${element["Image name"]}.png" alt="" style="width:100px;border-radius: 100%;
                    /* border: solid rgb(51, 255, 0) 10px; */
                    ">
                  <h3 style="width: max-content;">${element["Name"]}</h3>
                  <div style="height: 10px;"></div>
                </div>
              </summary>
              <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
                <div style="height: 10px;"></div>
                <h3>${element["Time ( IST )"]} (IST)</h3>
                <button onclick="redirect('/details/?id=${element["id"]}')"
                  style="width: fit-content;text-align: center;background-color: #FF0000;color: white;padding: 16px 24px;border-radius: 10px;outline: none;border: none;cursor: pointer;">
                  View Details
                </button>
                <h3>${element["Title"]}</h3>
              </div>
            </details>

        `

        // console.log(element["Name"]);
      });

      weekCard += `
        </details>
      `

    }

    weekCard += `
      </details>
    `

  }
  // console.log(weekCard);

  loadData(weekCard)

  

})