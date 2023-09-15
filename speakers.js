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
        // console.log(profile);
        // console.log(data[profile]["id"]);
        // console.log(data[profile]["fields"]["image"]["0"]["thumbnails"]["large"]["url"]);
        // console.log('%c ', 'font-size:100px; background:url('+data[profile]["fields"]["image"]["0"]["thumbnails"]["large"]["url"]+') no-repeat;');
        // console.log(data[profile]["Name"]);

        // console.log(data[profile]["Image name"] !== "hide");

        // if (data[profile]["Show?"] !== "hide") {
        speakerList.innerHTML += `
                <div class="card">
                    <div class="card__border">
                        <img src="${data[profile]["fields"]["image"]["0"]["thumbnails"]["large"]["url"]}" alt="${data[profile]["fields"]["Name"]}" class="card__img" loading="lazy" />
                    </div>

                    <h3 class="card__name">${data[profile]["fields"]["Name"]}</h3>
                    <span class="card__profession" style="color:black;">${data[profile]["fields"]["Affiliation"]}</span>

                    <div class="card__social " id="card-social" style="cursor: pointer;" onclick="openDetailsPg('${data[profile]["id"]}')">
                        <div class="card__social-control">
                            Details
                        </div>
                    </div>
                </div>
            `
        // }
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

    localStorage.setItem("visit", "1")
    //   console.log("yo");

    let loadWithDelay = setTimeout(() => {
        // var importdata = $.getJSON("./assets/data.json", function () {
        //     data = importdata.responseJSON
        //     initializeSpeakers(data)
        // })

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer patJSWricaCJjwUtq.3e2ac502a4a37f379473e4f12204cbfdf1d7574b1517e3b1b030db4de5b0faa1");
        // myHeaders.append("Cookie", "brw=brw0rfxEcgvyi3HqF; AWSALB=vmeTwWam+3nHyleK1+xzgkyzrMRvxIILqpaBnUpuNSYmrQixFLUrcZf5csM9jlNb7ePiReIiftzcGKCgRwkOqXzAXQ5JGcOelDXuqKxQ3tS4ek2tM8ch1+9kH3Zw; AWSALBCORS=vmeTwWam+3nHyleK1+xzgkyzrMRvxIILqpaBnUpuNSYmrQixFLUrcZf5csM9jlNb7ePiReIiftzcGKCgRwkOqXzAXQ5JGcOelDXuqKxQ3tS4ek2tM8ch1+9kH3Zw");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.airtable.com/v0/appdKlikRtSNOVkMQ/tblPFf6fcV4LNuCTA", requestOptions)
            .then(response => response.json())
            .then(result =>{
                result.records = result.records.sort(()=>{

                })
                 initializeSpeakers(result.records)
            })
            .catch(error => console.log('error', error));

        let yt = document.getElementById("youtube")

        // yt.innerHTML = `
        // <iframe style="width: 560px;height: 315px;max-width: 90%;"
        // src="https://www.youtube.com/embed/videoseries?list=PLR02U0e82ziMoBYrRMuFLeXVNdAYWvT3Q"
        // title="YouTube video player" frameborder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen></iframe>
        // `

    }, 1500);
} else {

    // localStorage.setItem("lastname", "Smith");
    // localStorage.getItem("lastname");

    let loadWithDelay = setTimeout(() => {
        // var importdata = $.getJSON("./assets/data.json", function () {
        //     data = importdata.responseJSON
        //     initializeSpeakers(data)
        // })

        // let yt = document.getElementById("youtube")

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer patJSWricaCJjwUtq.3e2ac502a4a37f379473e4f12204cbfdf1d7574b1517e3b1b030db4de5b0faa1");
        // myHeaders.append("Cookie", "brw=brw0rfxEcgvyi3HqF; AWSALB=vmeTwWam+3nHyleK1+xzgkyzrMRvxIILqpaBnUpuNSYmrQixFLUrcZf5csM9jlNb7ePiReIiftzcGKCgRwkOqXzAXQ5JGcOelDXuqKxQ3tS4ek2tM8ch1+9kH3Zw; AWSALBCORS=vmeTwWam+3nHyleK1+xzgkyzrMRvxIILqpaBnUpuNSYmrQixFLUrcZf5csM9jlNb7ePiReIiftzcGKCgRwkOqXzAXQ5JGcOelDXuqKxQ3tS4ek2tM8ch1+9kH3Zw");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.airtable.com/v0/appdKlikRtSNOVkMQ/tblPFf6fcV4LNuCTA", requestOptions)
            .then(response => response.json())
            .then(result =>{
                result.records.sort((a,b)=>{
                    if (parseInt(a.fields.rank)>parseInt(b.fields.rank)) {
                        return(1)
                    } else {
                        return(-1)
                    }
                })
                // console.log(result.records);
                return initializeSpeakers(result.records)
            })
            .catch(error => console.log('error', error));

        let yt = document.getElementById("youtube")

        // yt.innerHTML = `
        // <iframe style="width: 560px;height: 315px;max-width: 90%;"
        // src="https://www.youtube.com/embed/videoseries?list=PLR02U0e82ziMoBYrRMuFLeXVNdAYWvT3Q"
        // title="YouTube video player" frameborder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen></iframe>
        // `

    }, 0);
}