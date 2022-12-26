const input = document.querySelector('.text-input')
const listItems = ['List Item 1']

function renderItems() {
    document.querySelector('.list').innerHTML = ""
    listItems.forEach((item, index) => {
        document.querySelector('.list').innerHTML += `<div class="item-slot" id="slot-${index}">
                                                        <div>
                                                            <input type="checkbox" id="input-${index}" style="margin-left:15px;" onclick="labelStyle(${index})"><label class="ml-5 label-${index}" for="input-${index}">${listItems[index]}</label>
                                                        </div>
                                                        <div>
                                                            <button onclick="removeListItem(${index})" class="remove-button">X</button>
                                                        </div>
                                                    </div>`
                                        })
}

function addListItem() {
    if (input.value != "") {
        listItems.push(input.value)
        renderItems()
    }
}

function removeListItem(index) {
    if(index == listItems.length-1){
        listItems.pop();
    }else{
        listItems.splice(index, 1);
    }
    renderItems()
}

function labelStyle(index){
    if(document.querySelector('#input-'+ index).checked == true){
        document.querySelector('.label-'+ index).classList.add('line-through')
    }else{
        document.querySelector('.label-'+ index).classList.remove('line-through')
    }
}