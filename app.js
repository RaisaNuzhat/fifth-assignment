
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
    seatsAdded();
    addRow(button);
   
}
function calculateSeats()
{
    const selectedButtons=document.querySelectorAll(".custom");
    const seatCount=document.getElementById("seatsAvailable");
    const remainingSeats= 8-selectedButtons.length;
    seatCount.innerText= remainingSeats;
}
function seatsAdded()
{
    const selectedButtons=document.querySelectorAll(".custom");
    let count=0;
    selectedButtons.forEach(button => {
        count++;
    });
    const seatsAdded=document.getElementById("seatNo");
    seatsAdded.innerText=count;

}
function addRow(button)
{
        const tableBody = document.getElementById('tableBody');
        const newRow = document.createElement('tr');

        const seatCell = document.createElement('td');
        seatCell.innerText = button.innerText; 
        newRow.appendChild(seatCell);

        
        const staticCell1 = document.createElement('td');
        staticCell1.innerText = "Economy";
        newRow.appendChild(staticCell1);

        
        const staticCell2 = document.createElement('td');
        staticCell2.innerText = "550";
        newRow.appendChild(staticCell2);

        tableBody.appendChild(newRow);

}
