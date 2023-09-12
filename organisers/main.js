var loadData = (data) => {

  for (const profile in data) {
    // console.log(data[profile]["Image name"]);

    if (data[profile]["fields"]["role"] === "Organiser") {

      let organiserSection = document.getElementById("organisers")
      organiserSection.innerHTML += `
        <div class="card">
          <div class="card__border">
            <img src="${data[profile]["fields"]["image"]["0"]["thumbnails"]["large"]["url"]}" alt="" class="card__img" loading="lazy" />
          </div>

          <h3 class="card__name">${data[profile]["fields"]["Name"]}</h3>

          <div class="card__social " id="card-social" style="cursor: pointer;" onclick="mailto('${data[profile]["fields"]["email"]}')">
              <div class="card__social-control">
                  E-mail
              </div>
          </div>
        </div>
      `
    }

    if (data[profile]["fields"]["role"] === "Coordinator") {
      let cordinatorSection = document.getElementById("cordinator")

      cordinatorSection.innerHTML += `
        <div class="card">
          <div class="card__border">
              <img src="${data[profile]["fields"]["image"]["0"]["thumbnails"]["large"]["url"]}" alt="" class="card__img" loading="lazy" />
              </div>
              
          <h3 class="card__name">${data[profile]["fields"]["Name"]}</h3>

          <div class="card__social " id="card-social" style="cursor: pointer;" onclick="mailto('${data[profile]["fields"]["email"]}')">
              <div class="card__social-control">
                  E-mail
              </div>
          </div>
          </div>
          `
          // <img src="/assets/people/${data[profile]["Image name"]}.png" alt="" class="card__img" loading="lazy" />
        }
  }
}

// function download(content, fileName, contentType) {
//   const a = document.createElement("a");
//   a.href = URL.createObjectURL(new Blob([JSON.stringify(content, null, 2)], {
//     type: contentType
//   }));
//   a.setAttribute("download", fileName);
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// }

// newdata = []
// let yo = async(data)=>{
//   for (const profile in data) {
//     const response = $.getJSON("https://firebasestorage.googleapis.com/v0/b/qiqt-71960.appspot.com/o/"+data[profile]["Image name"]+".png", function () {
//       data2 = response.responseJSON
//       let Imglink = "https://firebasestorage.googleapis.com/v0/b/qiqt-71960.appspot.com/o/"+data[profile]["Image name"]+".png?alt=media&token="+data2["downloadTokens"]
//       data[profile]["Imglink"] = Imglink
//       newdata.push(data[profile])
//     })
//   }
//   await console.log(newdata);
//   // download(newdata, 'response.json', 'text/plain');
//   copy(newdata)

// }

// const queryString = window.location.search;
// console.log(queryString);
// const urlParams = new URLSearchParams(queryString);

let redirect = (link) => {
  window.location.href = link
}

let mailto = (link) => {
  console.log(link);
  window.location.href = 'mailto:'+ link
}


setTimeout(() => {
  // const importdata = $.getJSON("/organisers/people_data.json", function () {
  //   data = importdata.responseJSON
  //   // console.log(data);
  //   loadData(data)
  //   // yo(data)
  // })

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer patuVo3SfOaHb3u1X.3708c2cae0c77c3f0fcb3721493cb9b3a5550da3047621309285b960cd5ee190");
  // myHeaders.append("Cookie", "brw=brw0rfxEcgvyi3HqF; AWSALB=vmeTwWam+3nHyleK1+xzgkyzrMRvxIILqpaBnUpuNSYmrQixFLUrcZf5csM9jlNb7ePiReIiftzcGKCgRwkOqXzAXQ5JGcOelDXuqKxQ3tS4ek2tM8ch1+9kH3Zw; AWSALBCORS=vmeTwWam+3nHyleK1+xzgkyzrMRvxIILqpaBnUpuNSYmrQixFLUrcZf5csM9jlNb7ePiReIiftzcGKCgRwkOqXzAXQ5JGcOelDXuqKxQ3tS4ek2tM8ch1+9kH3Zw");

  var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
  };
  
  fetch("https://api.airtable.com/v0/app7QhhQi1XG3SuOc/tblUTJkSAJWq5MliH", requestOptions)
  .then(response => response.json())
  .then(result => loadData(result.records))
  .catch(error => console.log('error', error));
}, 10);