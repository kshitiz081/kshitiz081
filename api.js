fetch("data.json")
.then((response)=> {return response.json()} ).then((data) => {show(data)})


show = ({clients}) => {
    console.log(clients)
    
    clients.map(({Name,Date,Time})=>{
        const child=`<div class="box" id="box-1">
        <h3>${Name}</h3>
        <p>${Date}</p>
        <p>${Time}</p> 
    </div>`
        
        document.getElementById("container3").innerHTML+=child;
        
        
    })
}

