
function scrollToSelect()
{
    const scrollTarget=document.getElementById("scrollToSelect");
    scrollTarget.scrollIntoView({behavior:"smooth"});
}
document.getElementById("scrollButton").addEventListener("click",scrollToSelect);
function changeColor(button)
{ 
    const selectedButtons=document.querySelectorAll(".custom");
    if (selectedButtons.length >= 4 && !button.classList.contains('custom')) {
        return;
    }
    button.classList.add('custom');
    calculateSeats();
   
}
function calculateSeats()
{
    const selectedButtons=document.querySelectorAll(".custom");
    const seatCount=document.getElementById("seatsAvailable");
    const remainingSeats= 8-selectedButtons.length;
    seatCount.innerText= remainingSeats;
}
