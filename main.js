const tabitems = document.querySelectorAll('.tab-item');
const tabcontentitems = document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //grab content item from dom
    const tabcontentitem = document.querySelector(`#${this.id}-content`);  //this is to select id of tab
    //Add show class
    tabcontentitem.classList.add('show'); //this is to show when we click om any tab
}

function removeBorder(){
    tabitems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow(){ //this is to remove show class from everything when we click on one tab
    tabcontentitems.forEach(item => item.classList.remove('show'))
}



//listen for tab click
tabitems.forEach(item => item.addEventListener('click', selectItem));
