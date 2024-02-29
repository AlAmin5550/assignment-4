function scrollToSection() {
    const sectionOfTicket = document.getElementById('ticket-section');
    sectionOfTicket.scrollIntoView({ behavior: 'smooth' })
}

function next() {
    const element = document.getElementsByClassName('hide');
    for (let i = 0; i < element.length; i++) {
        element[i].classList.add('hidden');
    }

    const unHideElement = document.getElementById('unhide');
    unHideElement.classList.remove('hidden');
}
function continueBtn(){
    const element = document.getElementsByClassName('hide');
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove('hidden');
    }

    const unHideElement = document.getElementById('unhide');
    unHideElement.classList.add('hidden');

}


const seatBtn = document.getElementsByClassName('seat');


for (btn of seatBtn) {

    btn.addEventListener('click', function (event) {
        const price = 550;
        const seatName = event.target.innerText;
        const seatClass = 'Economy';

        const firstSelectedCount = getConvertedValue('selected-seats');
        if(firstSelectedCount+1>4){
            alert('Can only select upto 4 seats.');
            return;
        }
        this.style.backgroundColor = '#1DD100';
        const seatContainer = document.getElementById('selected-seat-container');

        const seatCount = getConvertedValue('seat-count');
        document.getElementById('seat-count').innerText = seatCount - 1;

        const selectedCount = getConvertedValue('selected-seats');
        document.getElementById('selected-seats').innerText = selectedCount + 1;


        const div = document.createElement('div');
        div.classList.add('flex', 'justify-around', 'text-xl', 'font-bold');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = seatName;
        p2.innerText = seatClass;
        p3.innerText = price;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        seatContainer.appendChild(div);
        updateTotalCost(price);
        updateGrandTotal();

    })
}
function updateGrandTotal(status) {
    const totalCost = getConvertedValue('total-cost');
    if (status == undefined) {
        document.getElementById('grand-total').innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode === 'NEW15') {
            const discounted15 = totalCost * .15;
            document.getElementById('grand-total').innerText = totalCost - discounted15;


        }
        else {
            if (couponCode == 'couple20') {
                const discounted20 = totalCost * .20;
                document.getElementById('grand-total').innerText = totalCost - discounted20;

            }
            else{
                alert('Please provide correct coupon code.')
            }
        }
    }



}


function updateTotalCost(value) {
    const totalCost = getConvertedValue('total-cost');
    let sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum;

}
