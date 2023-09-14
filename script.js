//your JS code here. If required.
let select = document.getElementById("colorSelect");
let btn =  document.querySelector("input[type=button]")
btn.addEventListener("click", ()=>{       
	//select.children--> will give all the child elements of select element
    for (const child of select.children) {
		//select.value--> will give value of the selected element
        if(child.value === select.value){
			//child.remove()-->remove the child element
                child.remove();
         }
    }
})