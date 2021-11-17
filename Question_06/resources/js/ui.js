// const $searchBtn = $addWrap.querySelector('.searchBtn');
const $allChk = document.querySelector('.allChk');
const $allDelBtn = document.querySelector('.allDelBtn');
const $toDoList = document.querySelector('.toDoList');

class addListController {
    constructor() {
        this.$addWrap = document.querySelector('.addWrap');
        this.$addInput = this.$addWrap.querySelector('input');
    }
    checkSuccess(e) {
        const $chk = e.target;
        $chk.parentNode.classList.add('success');
    }
    addChkBox() {
        const $chk = document.createElement('input');
        $chk.type = 'checkbox';
        $chk.addEventListener('click', (e) => this.checkSuccess(e));
        return $chk;
    }
    addTxt() {
        const $txt = document.createElement('span');
        $txt.classList.add('txt');
        $txt.innerText = this.$addInput.value;
        return $txt;
    }
    getDate() {
        const newDate = new Date(); 
        return `${newDate.getFullYear()}.${newDate.getMonth() + 1}.${newDate.getDate()}`;
    }
    addDate() {
        const $date = document.createElement('span');
        $date.classList.add('date');
        $date.innerText = this.getDate();
        return $date;
    }
    deleteList(e) {
        const $delBtn = e.target;
        $delBtn.parentNode.remove();
    }
    addDelBtn() {
        const $delBtn = document.createElement('button');
        $delBtn.classList.add('delBtn');
        $delBtn.addEventListener('click', (e) => this.deleteList(e));
        return $delBtn;
    }
    makeToDoList(toDoInfo) {
        const $li = document.createElement('li');
        $li.append(this.addChkBox(), this.addTxt(), this.addDate(), this.addDelBtn());

        $toDoList.appendChild($li);
    }
    addToDoList() {
        if(this.$addInput.value === "") return false;

        this.makeToDoList();
        this.$addInput.value = "";
    }
}

const AddList = new addListController();
document.querySelector('.addBtn').addEventListener('click', AddList.addToDoList.bind(AddList));