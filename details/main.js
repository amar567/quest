var loadData = (data) => {
  
  [date,time] = convertToLocalTime(data["fields"]["Date"])

  let detailCard = document.getElementById("detailCard")

  detailCard.innerHTML = `
    <div id="" class=""
                style="min-height: 85vh;display: flex;flex-direction: row;flex-wrap: wrap;flex-direction: row;flex-wrap: wrap;align-content: center;align-items: center;">
                <div style="width: 40%;min-width: 400px; display: flex;flex-direction: column;align-items: center;">
                    <img src="${data["fields"]["image"]["0"]["thumbnails"]["large"]["url"]}" alt="card image" style="width: 250px;border-radius: 50%;" />
                    <h1 class="">${data["fields"]["Name"]}</h1>
                    <span class="">${data["fields"]["Affiliation"]}</span>
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
                          <b>${date}</b>
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
                        <b>${time} (IST)</b>
                        </div>
                    </div>
                    <br/><br/>
                    <div>
                        <button
                            style="width: 100%;background-color: #FF0000;color: white;padding: 16px 24px;border-radius: 10px;outline: none;border: none;cursor: pointer;"
                            onclick="redirect('${data["fields"]["Youtube link"]}')" >
                            Watch on Youtube
                        </button>
                    </div>
                </div>
                <div style="width: 60%;min-width: 400px;padding: 0 30px;align-items: flex-start;">
                    <h2 style="padding: 30px 0;">${data["fields"]["Title"]}</h2>
                    <p style="line-height: 2rem;text-align: justify;font-size: large;">
                    ${data["fields"]["Abstract"]}
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

// var importdata = $.getJSON("../assets/data.json", function () {
//   data = importdata.responseJSON

//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const id = urlParams.get('id')

//   loadData(data[id])
// })

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer patJSWricaCJjwUtq.3e2ac502a4a37f379473e4f12204cbfdf1d7574b1517e3b1b030db4de5b0faa1");
  // myHeaders.append("Cookie", "brw=brw0rfxEcgvyi3HqF; AWSALB=vmeTwWam+3nHyleK1+xzgkyzrMRvxIILqpaBnUpuNSYmrQixFLUrcZf5csM9jlNb7ePiReIiftzcGKCgRwkOqXzAXQ5JGcOelDXuqKxQ3tS4ek2tM8ch1+9kH3Zw; AWSALBCORS=vmeTwWam+3nHyleK1+xzgkyzrMRvxIILqpaBnUpuNSYmrQixFLUrcZf5csM9jlNb7ePiReIiftzcGKCgRwkOqXzAXQ5JGcOelDXuqKxQ3tS4ek2tM8ch1+9kH3Zw");

  var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
  };

fetch("https://api.airtable.com/v0/appdKlikRtSNOVkMQ/tblPFf6fcV4LNuCTA/"+id, requestOptions)
            .then(response => response.json())
            .then(result =>{
                loadData(result)
            })
            .catch(error => console.log('error', error));

// convert to local time

// Define input date and time strings  
function convertToLocalTime(dateStr) {

// Create a Date object from the UTC string
const utcDate = new Date(dateStr);

// Get the year, month, day, hours, minutes, and seconds in IST
const year = utcDate.getUTCFullYear();
const month = utcDate.getUTCMonth();
const day = utcDate.getUTCDate();
const hours = utcDate.getUTCHours() + 5; // Add 5 hours to convert to IST
const minutes = utcDate.getUTCMinutes() + 30; // Add 30 minutes to convert to IST
const seconds = utcDate.getUTCSeconds();

// Create a new Date object with the IST values
const istDate = new Date(year, month, day, hours, minutes, seconds);

// Format the IST date as a string
const istDateString = istDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

// console.log("UTC Date:", dateStr);
// console.log("IST Date:", istDateString);

// console.log(istDateString.split(", "));
  // timeStr = timeStr.replace(":00 "," ")

  return(istDateString.split(", "))
}