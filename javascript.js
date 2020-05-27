function nextChange()
{
    w = document.getElementById("user");
    x = document.getElementById("mySelf");
    y = document.getElementById("name");
    z = document.getElementById("position");

    w.src = "images/image-john.jpg";
    x.innerHTML = '“ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';

    y.innerHTML = 'John Tarkpor';
    z.innerHTML = 'Junior Front-end Developer';
}

function prevChange()
{
    i = document.getElementById("user");
    a = document.getElementById("mySelf");
    b = document.getElementById("name");
    c = document.getElementById("position");
    i.src = "images/image-tanya.jpg"
    a.innerHTML = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
    b.innerHTML = 'Tanya Sinclair';
    c.innerHTML = 'UX Engineer';
}