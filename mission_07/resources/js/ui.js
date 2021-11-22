class ToDoModel {
    constructor() {
        this.storageKey = 'to-do-list';
        this.$addInput = document.querySelector('.addFormWrap input');
        this.toDoDataArr = [];
    }
    initData () {
        const storage = localStorage.getItem(this.storageKey);
        if(storage) return this.toDoDataArr = JSON.parse(storage);
    }
    getTxt() {
        const toDoTxt = this.$addInput.value;
        return toDoTxt === "" ? false : toDoTxt;
    }
    getDate() {
        const newDate = new Date(); 
        return `${newDate.getFullYear()}.${newDate.getMonth() + 1}.${newDate.getDate()}`;
    }
    // getSuccess() {
        
    // }
    saveData() {
        if(!this.getTxt()) return false;
        const toDoData = {
            'txt': this.getTxt(),
            'date': this.getDate(),
            // 'success': this.getSuccess()
        };
        this.toDoDataArr.push(toDoData);
        localStorage.setItem(this.storageKey, JSON.stringify(this.toDoDataArr));
        return toDoData;
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

class ToDoView {
    initView(data) {
        data.forEach((el) => this.view.addToDoList(el));
    }
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
        document.querySelector('.addFormWrap input').value = "";
        return $txt;
    }
    addDate(date) {
        const $date = document.createElement('span');
        $date.classList.add('date');
        $date.innerText = date;
        return $date;
    }
    addSuccessBtn() {
        const $successBtn = document.createElement('button');
        $successBtn.classList.add('successBtn');
        return $successBtn;
    }
    addDelBtn() {
        const $deleteBtn = document.createElement('button');
        $deleteBtn.classList.add('deleteBtn');
        return $deleteBtn;
    }
    addToDoList(data) {
        const $li = document.createElement('li');
        $li.append(this.addChkBox(), this.addTxt(data.txt), this.addDate(data.date), this.addSuccessBtn(), this.addDelBtn());
        document.querySelector('.toDoList').appendChild($li);
    }
}

class ToDoController {
    constructor(data, view) {
        this.data = data;
        this.view = view;
        this.$addBtn = document.querySelector('.addBtn');
        this.$addInput = document.querySelector('.addFormWrap input');
    }
    initToDo() {
        const data = this.data.initData();
        this.view.initView(data); 
    }
    initEvent() {
        this.$addBtn.addEventListener('click', function() {
            const data = this.data.saveData();
            this.view.addToDoList(data);
        });
        this.$addInput.addEventListener('keyup', function(e) {
            if(e.keyCode == 13) {
                const data = this.data.saveData();
                this.view.addToDoList(data);
            }
        });
    }
}


const toDoList = new ToDoController(new ToDoModel, new ToDoView);
toDoList.initToDo();
toDoList.initEvent();