function openVideo() {
    var videoId = document.querySelector("#video")
    videoId.style.display = "block"
    var closeId =document.querySelector("#close-video")
    closeId.style.display = "initial"
}

function closeVideo() {
    var videoId = document.querySelector("#video")
    videoId.style.display = "none"
    var closeId =document.querySelector("#close-video")
    closeId.style.display = "none"
    
}