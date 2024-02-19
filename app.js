
function scrollToSelect()
{
    const scrollTarget=document.getElementById("scrollToSelect");
    scrollTarget.scrollIntoView({behavior:"smooth"});
}
document.getElementById("scrollButton").addEventListener("click",scrollToSelect);
function changeColor(button)

{ 
    const isSelected = button.classList.contains('custom');
    if(!isSelected){
        const selectedButtons=document.querySelectorAll(".custom");
        if (selectedButtons.length >= 4) {
            return;
        }
    
    button.classList.add('custom');
    calculateSeats();
    seatsAdded();
    addRow(button);
    }
    else
    {
        button.classList.remove('custom');
        calculateSeats();
        seatsAdded();
        removeRow(button);
    }
   
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

        cost();
}
function removeRow(button) {
    const seatNumber = button.innerText;
    const rowsRemove = document.querySelectorAll('#tableBody tr td:first-child');
    rowsRemove.forEach(row => {
        if (row.innerText === seatNumber) {
            row.parentElement.remove();
        }
        cost();
    });
}

function cost()
{
        const selectedButtons = document.querySelectorAll(".custom");
        const costPerSeat = 550;
        const totalCost = selectedButtons.length * costPerSeat;
    
        const tableBody = document.getElementById('tableBody');
    
        const oldTotalRow = document.getElementById('totalRow');
        if (oldTotalRow) {
            oldTotalRow.remove();
        }
    
        const totalRow = document.createElement('tr');
    
        const totalCellLabel = document.createElement('td');
        totalCellLabel.innerText = "Total Cost";
        totalRow.appendChild(totalCellLabel);
    
        const totalCellCost = document.createElement('td');
        totalCellCost.innerText = totalCost;
        totalRow.appendChild(totalCellCost);
    
        totalRow.id = 'totalRow';
        tableBody.appendChild(totalRow);
}
function showSucces()
{
    const hiddenSection=document.getElementById('hiddensection');
    hiddenSection.classList.remove('hidden');
    const next=document.getElementById("next");
    next.scrollIntoView({behavior:"smooth"});

}