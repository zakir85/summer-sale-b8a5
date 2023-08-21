let totalPrice = 0;

function handleClickButton(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemPrice = target.parentNode.childNodes[1].innerText;
    const newItemPrice = parseFloat(itemPrice);
    // console.log(typeof newItemPrice);
    totalPrice = parseFloat(totalPrice) + newItemPrice;
    document.getElementById("total-price").innerText = totalPrice;

    const itemName = document.getElementById("product-name").innerText;
    console.log(itemName);
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

        // Calculate commission and update grand total
    let totalDiscount = 0;
    let grandTotal = totalPrice;

    if (totalPrice > 200) {
        totalDiscount = 0.2 * totalPrice;
        grandTotal = totalPrice - totalDiscount;
    }

    document.getElementById('total-discount').textContent = `${totalDiscount.toFixed(2)}`;
    document.getElementById('grand-total-price').textContent = `${grandTotal.toFixed(2)}`;





}



    document.getElementById('coupon-apply-btn').addEventListener('click', function(e){
        console.log('deleteDisabledBtn');
        const couponCode = this.innerText;
        const deleteDisabledBtn = document.getElementsByClassName('disabledBtn');
        console.log(deleteDisabledBtn);
        if(couponCode =='SELL200'){
            deleteDisabledBtn.removedAttribute('disabled')
        }
        else{
            deleteDisabledBtn.setAttribute('disabled', true);
        }
    })


    // Card Reset----------------------------------------------
    function reloadPage() {
        location.reload();
        }
    
