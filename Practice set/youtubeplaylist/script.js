function createCard(title, cName, views, time, duration, thumbnail) {
    if(views >= 1000 && views<1000000)
    {
        views=parseFloat((views/1000).toFixed(1))+"k"
    }
    else if(views > 1000000)
        {
        views=parseFloat((views/1000000).toFixed(1))+"M"
    }
    if(time>11)
    {
        time=parseFloat((time/12).toFixed(1))+" Year Ago"
    }
    else
        time=time+"Months Ago"
       let html = `
        <div class="container">
        <div class="thumb">
             <img class="img"
                src="${thumbnail}"  alt="">
            <div class="duration">${duration}</div>
        </div>
        <div class="infot">
            <h3 class="title">${title}</h3>
            <div class="infob">
                <span class="channel">${cName}</span>•
                <span class="views">${views}</span>•
                <span class="time">${time}</span>
            </div>
        </div>
        </div>
    `
    document.querySelector(".playlist").innerHTML=document.querySelector(".playlist").innerHTML+html
}
createCard("FREE FIRE MAX INDIA CUP  GRAND FINAL VLOG WITH JONTY GAMING , MR JAY YT AND  ROCKY AND RDX!","Pahadi Gaming",22000000,11,"13:17","https://i.ytimg.com/vi/zt1RnFCqRBk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCsRxcWgkTE2D0j4hIPB_6Y88E6dQ")

// document.querySelector(".duration").innerHTML = duration
// document.querySelector(".channel").innerHTML = cName
// document.querySelector(".title").innerHTML = title

// document.querySelector(".views").innerHTML = views
// document.querySelector(".time").innerHTML = time
// document.querySelector(" .img").src = thumbnail