
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
    button.classList.toggle('custom');
  
}
