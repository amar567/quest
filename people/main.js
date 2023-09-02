var loadData = (data) => {

  for (const profile in data) {
    // console.log(data[profile]["Image name"]);

    if (data[profile]["role"] === "organiser") {

      let organiserSection = document.getElementById("organisers")
      organiserSection.innerHTML += `
        <div class="card">
          <div class="card__border">
            <img src="/assets/people/${data[profile]["Image name"]}.png" alt="" class="card__img" loading="lazy" />
          </div>

          <h3 class="card__name">${data[profile]["Name"]}</h3>

          <div class="card__social " id="card-social" style="cursor: pointer;" onclick="mailto('${data[profile]["email"]}')">
              <div class="card__social-control">
                  E-mail
              </div>
          </div>
        </div>
      `
    }

    if (data[profile]["role"] === "codinator") {
      let cordinatorSection = document.getElementById("cordinator")

      cordinatorSection.innerHTML += `
        <div class="card">
          <div class="card__border">
              <img src="/assets/people/${data[profile]["Image name"]}.png" alt="" class="card__img" loading="lazy" />
              </div>
              
          <h3 class="card__name">${data[profile]["Name"]}</h3>

          <div class="card__social " id="card-social" style="cursor: pointer;" onclick="mailto('${data[profile]["email"]}')">
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
  const importdata = $.getJSON("/people/people_data.json", function () {
    data = importdata.responseJSON
    // console.log(data);
    loadData(data)
    // yo(data)
  })
}, 00);