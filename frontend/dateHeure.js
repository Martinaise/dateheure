const currentTime = document.getElementById("dateheure");
const getCurrenteDate = async () => {
    fetch("http://localhost:8080/time")
        .then(response => response.json())
        .then(async function (recupedate) {
            data = await recupedate.response.data;
            let datefinal = data.replace(/"/g, " ");
            currentTime.innerText = datefinal;
        })

}
getCurrenteDate();
setInterval(getCurrenteDate, 1000);