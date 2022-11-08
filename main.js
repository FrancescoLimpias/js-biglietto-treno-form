// Document references
const form = document.getElementById("form");
const inputAge = document.getElementById("input-age");
const inputKM = document.getElementById("input-km");
const inputSubmit = document.getElementById("input-submit");

const ticket = document.getElementById("ticket");
const outputAge = document.getElementById("output-age");
const outputKM = document.getElementById("output-km");
const outputPrice = document.getElementById("output-price");

// Listeners
inputSubmit.addEventListener("click", function(){

    // Get Data
    let km = parseInt(inputKM.value);
    let age = parseInt(inputAge.value);
    
    if(
        isNaN(km)
        || km < 0
        || isNaN(age)
        || age < 0
    ){
        alert("Dati non supportati");
    } else {
    
        // Calc pricePerKM
        let eurosPerKM = 0.21;
        if(age < 18){
            eurosPerKM -= eurosPerKM * 0.2;
        } else if(age > 65){
            eurosPerKM -= eurosPerKM * 0.4;
        }
        
        // Calc price
        let price = (km * eurosPerKM).toFixed(2);

        // Print
        outputAge.innerHTML = age;
        outputKM.innerHTML = km;
        outputPrice.innerHTML = `${price}€`;

        // Switch view
        form.style.display = "none";
        ticket.style.display = "block";
    }
})