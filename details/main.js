var loadData = (data) => {
  let date = convertToLocalTime(data["Date (double click to pick)"],data["Time ( IST )"])
  let detailCard = document.getElementById("detailCard")

  detailCard.innerHTML = `
    <div id="" class=""
                style="min-height: 85vh;display: flex;flex-direction: row;flex-wrap: wrap;flex-direction: row;flex-wrap: wrap;align-content: center;align-items: center;">
                <div style="width: 40%;min-width: 400px; display: flex;flex-direction: column;align-items: center;">
                    <img src="/assets/speakers/highres/${data["Image name"]}.png" alt="card image" style="width: 250px;border-radius: 50%;" />
                    <h1 class="">${data["Name"]}</h1>
                    <span class="">${data["Affiliation"]}</span>
                    <br>
                    <div class="details">
                        <svg data-v-c3d31587="" focusable="false" preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="item-card__icon" width="20"
                            height="20" viewBox="0 0 32 32" aria-hidden="true">
                            <path
                                d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z">
                            </path>
                        </svg>
                        &nbsp;&nbsp;
                        <div>
                          <b>${date[0]}</b>
                        </div>
                    </div>
                    <div class="details">
                        <svg data-v-c3d31587="" focusable="false" preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="item-card__icon" width="20"
                            height="20" viewBox="0 0 20 20" aria-hidden="true">
                            <path
                                d="M10,19c-5,0-9-4-9-9s4-9,9-9s9,4,9,9S15,19,10,19z M10,2.3c-4.3,0-7.7,3.5-7.7,7.7s3.5,7.7,7.7,7.7s7.7-3.5,7.7-7.7	S14.3,2.3,10,2.3z">
                            </path>
                            <path d="M13 13.9L9.4 10.3 9.4 4 10.6 4 10.6 9.7 13.9 13z"></path>
                        </svg>
                        &nbsp;&nbsp;
                        <div>
                        <b>${date[1]} (IST)</b>
                        </div>
                    </div>
                    <br/><br/>
                    <div>
                        <button
                            style="width: 100%;background-color: #FF0000;color: white;padding: 16px 24px;border-radius: 10px;outline: none;border: none;cursor: pointer;"
                            onclick="redirect('${data["Link"]}')" >
                            Watch on Youtube
                        </button>
                    </div>
                </div>
                <div style="width: 60%;min-width: 400px;padding: 0 30px;align-items: flex-start;">
                    <h2 style="padding: 30px 0;">${data["Title"]}</h2>
                    <p style="line-height: 2rem;text-align: justify;font-size: large;">
                      ${data["Abstract"]}
                    </p>
                </div>
            </div>
`
}

// const queryString = window.location.search;
// console.log(queryString);
// const urlParams = new URLSearchParams(queryString);

let redirect = (link) => {
  window.location.href = link
}

var importdata = $.getJSON("/assets/data.json", function () {
  data = importdata.responseJSON

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  loadData(data[id])
})


// convert to local time

// Define input date and time strings  
function convertToLocalTime(dateStr, timeStr) {
  // let istDate = new Date(`${dateStr} ${timeStr} GMT+0530`);
  // let istTimestamp = istDate.getTime();
  // let utcTimestamp = istTimestamp - 330 * 60 * 1000;
  // let offset = new Date().getTimezoneOffset();
  // let localTimestamp = utcTimestamp - offset * 60 * 1000;
  // let localDate = new Date(localTimestamp);

  // let localDateStr = localDate.toLocaleDateString();
  // let localTimeStr = localDate.toLocaleTimeString();
  // // var zone = Intl.DateTimeFormat().resolvedOptions().timeZone            // "America/Los_Angeles"
  // let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  // console.log(localDateStr,localTimeStr,timezone);
  // return([localDateStr,localTimeStr,timezone])

  timeStr = timeStr.replace(":00 "," ")

  return([dateStr,timeStr])
}