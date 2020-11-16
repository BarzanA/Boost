// let form = document.getElementById('form1')
let data = {
    customerFocus: false,
    managesAmbiguity: false,
    selfDevelopment: false,
    ActionOriented: false,
    EnsuresAccountability: false,
    DrivesResult: false,
    friText: null,
     
}

function textAreaChange() {
    let friText = document.getElementById('friText').value
    console.log(friText);
    
}

window.onload = function() {

    // PASSION formuläret som plockar ut data när man bockar in checkboxes
    let customerFocus = document.getElementById('customer')
    customerFocus.addEventListener('change', function(event){
        event.preventDefault()
        data.customerFocus = document.getElementById('customer').checked
        console.log("customer Focus is: ", data.customerFocus)
    })
    
    let managesAmbiguity = document.getElementById('manages')
    managesAmbiguity.addEventListener('change', function(event){
        event.preventDefault()
        data.managesAmbiguity = document.getElementById('manages').checked
        console.log("manages Ambiguity is: ", data.managesAmbiguity)
    })
    
    let selfDevelopment = document.getElementById('self')
    selfDevelopment.addEventListener('change', function(event) {
        event.preventDefault()
        data.selfDevelopment = document.getElementById('self').checked
        console.log("self-Development is: ", data.selfDevelopment)
    })
    
    // button next och previuos för formulär 1
    let next1 = document.getElementById('next1')
    let div2 = document.getElementById("div2")
    next1.addEventListener('click', function(event){
        event.preventDefault()
        div2.style.display = "block";
        div1.style.display = "none";
    })
    
    // Execution formuläret som plockar ut data när man bockar in checkboxes
    let ActionOriented = document.getElementById('Action')
    ActionOriented.addEventListener('change', function(event){
        event.preventDefault()
        data.ActionOriented = document.getElementById('Action').checked
        console.log("Action oriented is: ", data.ActionOriented)
    })
    
    let EnsuresAccountability = document.getElementById('Ensures')
    EnsuresAccountability.addEventListener('change', function(event){
        event.preventDefault()
        data.EnsuresAccountability = document.getElementById('Ensures').checked
        console.log("Ensures accountability is: ", data.EnsuresAccountability)
    })
    
    let DrivesResult = document.getElementById('Drives')
    DrivesResult.addEventListener('change', function(event) {
        event.preventDefault()
        data.DrivesResult = document.getElementById('Drives').checked
        console.log("Drives result is: ", data.DrivesResult)
    })
    
    // button next och previuos för formulär 2
    let previous2 = document.getElementById('previous2')
    previous2.addEventListener('click', function(event){
        event.preventDefault()
        div2.style.display = "none"
        div1.style.display = "block"
    })
    
    
    let next2 = document.getElementById('next2')
    next2.addEventListener('click', function(event){
        event.preventDefault()
        div2.style.display = "none"
        div3.style.display = "block"
    })

    // button next och previuos för formulär 2
    let previous3 = document.getElementById('previous3')
    let div3 = document.getElementById('div3')
    previous3.addEventListener('click', function(event){
        event.preventDefault()
        div3.style.display = "none"
        div2.style.display = "block"
    })

    
}

// en kommentar för git