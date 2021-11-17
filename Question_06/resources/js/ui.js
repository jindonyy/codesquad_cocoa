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
    addDate() {
        const $date = document.createElement('span');
        $date.classList.add('date');
        $date.innerText = dataManager.prototype.getDate();
        return $date;
    }
    addDelBtn() {
        const $delBtn = document.createElement('button');
        $delBtn.classList.add('delBtn');
        $delBtn.addEventListener('click', (e) => dataManager.prototype.deleteData.call(toDoData, e));
        return $delBtn;
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
        this.$addInput = document.querySelector('.addWrap input');
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
    saveData() {
        const toDoTxt = this.$addInput.value;
        if(toDoTxt === "") return false;
        
        const toDoData = {'txt': toDoTxt, 'date': this.getDate()};
        this.toDoDataArr.push(toDoData);
        localStorage.setItem(this.storageKey, JSON.stringify(this.toDoDataArr));
        addListController.prototype.addToDoList(toDoData);
        this.$addInput.value = "";
    }
    deleteData(e) {
        e.preventDefault();
        const $delBtn = e.currentTarget;
        this.toDoDataArr = this.toDoDataArr.filter(el => el.txt !== $delBtn.parentNode.querySelector('.txt').innerText);
        localStorage.setItem(this.storageKey, JSON.stringify(this.toDoDataArr));
        $delBtn.parentNode.remove();
    }
}


const toDoData = new dataManager();
const toDoList = new addListController();
toDoData.toDoInit();
document.querySelector('.addBtn').addEventListener('click', toDoData.saveData.bind(toDoData));
document.querySelector('.addWrap input').addEventListener('keyup', function(e) {
    if(e.keyCode == 13) toDoData.saveData.call(toDoData);
});