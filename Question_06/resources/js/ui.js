class addListController {
    checkSuccess(e) {
        e.preventDefault();
        const $chk = e.currentTarget;
        $chk.parentNode.classList.toggle('success');
    }
    addChkBox() {
        const $chk = document.createElement('input');
        $chk.type = 'checkbox';
        $chk.addEventListener('click', (e) => this.checkSuccess(e));
        return $chk;
    }
    addTxt(txt) {
        const $txt = document.createElement('span');
        $txt.classList.add('txt');
        $txt.innerText = txt;
        return $txt;
    }
    addDate(date) {
        const $date = document.createElement('span');
        $date.classList.add('date');
        $date.innerText = date;
        return $date;
    }
    addDelBtn() {
        const $deleteBtn = document.createElement('button');
        $deleteBtn.classList.add('deleteBtn');
        $deleteBtn.addEventListener('click', (e) => dataManager.prototype.deleteData.call(toDoData, e));
        return $deleteBtn;
    }
    addToDoList(toDoData) {
        const $li = document.createElement('li');
        $li.append(this.addChkBox(), this.addTxt(toDoData.txt), this.addDate(toDoData.date), this.addDelBtn());
        document.querySelector('.toDoList').appendChild($li);
    }
}

class dataManager {
    constructor() {
        this.storageKey = 'toDoData';
        this.$addInput = document.querySelector('.addFormWrap input');
        this.toDoDataArr = [];
    }
    toDoInit() {
        const storage = localStorage.getItem(this.storageKey);
        if(storage) {
            this.toDoDataArr = JSON.parse(storage);
            this.toDoDataArr.forEach((el) => addListController.prototype.addToDoList(el));
        }
    }
    getDate() {
        const newDate = new Date(); 
        return `${newDate.getFullYear()}.${newDate.getMonth() + 1}.${newDate.getDate()}`;
    }
    getTxt() {
        const toDoTxt = this.$addInput.value;
        return toDoTxt === "" ? false : toDoTxt;
    }
    saveData() {
        if(!this.getTxt()) return false;
        const toDoData = {'txt': this.getTxt(), 'date': this.getDate()};
        this.toDoDataArr.push(toDoData);
        localStorage.setItem(this.storageKey, JSON.stringify(this.toDoDataArr));
        addListController.prototype.addToDoList(toDoData);
        this.$addInput.value = "";
    }
    deleteData(e) {
        e.preventDefault();
        const $deleteBtn = e.currentTarget;
        const dataTodelete = $deleteBtn.parentNode.querySelector('.txt').innerText
        this.toDoDataArr = this.toDoDataArr.filter(el => el.txt !== dataTodelete);
        localStorage.setItem(this.storageKey, JSON.stringify(this.toDoDataArr));
        $deleteBtn.parentNode.remove();
    }
}


const toDoData = new dataManager();
const toDoList = new addListController();
toDoData.toDoInit();
document.querySelector('.addBtn').addEventListener('click', toDoData.saveData.bind(toDoData));
document.querySelector('.addFormWrap input').addEventListener('keyup', function(e) {
    if(e.keyCode == 13) toDoData.saveData.call(toDoData);
});