let speakerList = document.getElementById("cardContainer")

// speakerList.innerHTML += `
//         <div class="card">
//             <div class="card__border">
//                 <img src="./assets/speakers/prof2.jpg" alt="card image" class="card__img" />
//             </div>

//             <h3 class="card__name">Prof. Dr. Maciej Lewenstein</h3>
//             <span class="card__profession">ICFO</span>

//             <div class="card__social " id="card-social" style="cursor: pointer;">
//                 <div class="card__social-control">
//                     Details
//                 </div>
//             </div>
//         </div>
// `

let openDetailsPg = (data) => {
    window.location.href = `/details/?id=${data}`
}

let initializeSpeakers = (data) => {
    speakerList.innerHTML = ``
    for (const profile in data) {
        // console.log(data[profile]["Name"]);

        // console.log(data[profile]["Image name"] !== "hide");

        if (data[profile]["Show?"] !== "hide") {
            speakerList.innerHTML += `
                <div class="card">
                    <div class="card__border">
                        <img src="/assets/speakers/${data[profile]["Image name"]}.png" alt="${data[profile]["Image name"]}" class="card__img" loading="lazy" />
                    </div>

                    <h3 class="card__name">${data[profile]["Name"]}</h3>
                    <span class="card__profession" style="color:black;">${data[profile]["Affiliation"]}</span>

                    <div class="card__social " id="card-social" style="cursor: pointer;" onclick="openDetailsPg(${profile})">
                        <div class="card__social-control">
                            Details
                        </div>
                    </div>
                </div>
            `
        }
    }
}


// newdata = []
// let yo = async (data) => {
//     for (const profile in data) {
//         const response = $.getJSON("https://firebasestorage.googleapis.com/v0/b/qiqt-71960.appspot.com/o/" + data[profile]["Image name"] + ".png", function () {
//             data2 = response.responseJSON
//             if (response.status < 300) {
//                 let Imglink = "https://firebasestorage.googleapis.com/v0/b/qiqt-71960.appspot.com/o/" + data[profile]["Image name"] + ".png?alt=media&token=" + data2["downloadTokens"]
//                 data[profile]["Imglink"] = Imglink
//                 newdata.push(data[profile])
//             }
//         })
//     }
//     await console.log(newdata);
//     // download(newdata, 'response.json', 'text/plain');
//     copy(newdata)

// }

// var importdata = $.getJSON("./assets/data.json", function () {
//     data = importdata.responseJSON
//     // console.log(data);
//     // data.sort(function(a, b) {
//     //     var keyA = new Date(parseInt(a["Citations"])),
//     //       keyB = new Date(parseInt(b[["Citations"]]));
//     //     // Compare the 2 dates
//     //     if (keyA < keyB) return 1;
//     //     if (keyA > keyB) return -1;
//     //     return 0;
//     //   });
//     initializeSpeakers(data)
//     // yo(data)
// })

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }
  

//   function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }

  if (localStorage.getItem("visit") !== "1") {

      localStorage.setItem("visit","1")
      console.log("yo");

    let loadWithDelay = setTimeout(() => {
        var importdata = $.getJSON("./assets/data.json", function () {
            data = importdata.responseJSON
            initializeSpeakers(data)
        })
      
        let yt = document.getElementById("youtube")
      
        yt.innerHTML = `
        <iframe style="width: 560px;height: 315px;max-width: 90%;"
        src="https://www.youtube.com/embed/videoseries?list=PLR02U0e82ziMoBYrRMuFLeXVNdAYWvT3Q"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
        `
      
      }, 2000);
  } else {

    // localStorage.setItem("lastname", "Smith");
    // localStorage.getItem("lastname");

    let loadWithDelay = setTimeout(() => {
        var importdata = $.getJSON("./assets/data.json", function () {
            data = importdata.responseJSON
            initializeSpeakers(data)
        })
      
        let yt = document.getElementById("youtube")
      
        yt.innerHTML = `
        <iframe style="width: 560px;height: 315px;max-width: 90%;"
        src="https://www.youtube.com/embed/videoseries?list=PLR02U0e82ziMoBYrRMuFLeXVNdAYWvT3Q"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
        `
      
      }, 0);
  }