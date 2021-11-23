class ToDoModel {
    constructor() {
        this.storageKey = 'to-do-list';
        this.$addInput = document.querySelector('.addFormWrap input');
        this.toDoData = {
            'txt': '',
            'date': this.getDate(),
            'complete': 'incomplete'
        };
        this.toDoDataArr = [];
    }
    initData () {
        const storage = localStorage.getItem(this.storageKey);
        if(storage) return this.toDoDataArr = JSON.parse(storage);
    }
    getDate() {
        const newDate = new Date(); 
        return `${newDate.getFullYear()}.${newDate.getMonth() + 1}.${newDate.getDate()}`;
    }
    saveData() {
        this.toDoDataArr.push(this.toDoData);
        localStorage.setItem(this.storageKey, JSON.stringify(this.toDoDataArr));
    }
    deleteData(data) {
        this.toDoDataArr = this.toDoDataArr.filter(el => el.txt !== data);
        localStorage.setItem(this.storageKey, JSON.stringify(this.toDoDataArr));
    }
}

class ToDoView {
    constructor() {
        this.$addBtn = document.querySelector('.addBtn');
        this.$addInput = document.querySelector('.addFormWrap input');
    }
    initView(data) {
        data.forEach((el) => this.renderToDo(el));
    }
    renderToDo(list) {
        document.querySelector('.toDoList').appendChild(list);
        this.$addInput.value = "";
    }
    deleteToDo(list) {
        list.parentNode.parentNode.remove();
    }
}

class ToDoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    initToDo() {
        const storageData = this.model.initData();
        if(storageData) storageData.forEach((el) => this.view.renderToDo(this.addToDo(el))); 
    }
    addBtnEvent() {
        const toDoTxt = this.model.$addInput.value;
        if(!toDoTxt) return false;
        this.model.toDoData.txt = toDoTxt;
        this.model.saveData();
        this.view.renderToDo(this.addToDo(this.model.toDoData));
    }
    initEvent() {
        this.view.$addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.addBtnEvent();
        });
        this.view.$addInput.addEventListener('keyup', (e) => {
            if(e.keyCode == 13) this.addBtnEvent();
        });
    }

    createCompleteBtn() {
        const $completeBtn = document.createElement('button');
        $completeBtn.classList.add('completeBtn');
        $completeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            target.parentNode.parentNode.classList.toggle('complete');
            this.model.toDoData.complete = (target.parentNode.parentNode.classList.contains('complete')) ? 'complete': 'incomplete';
            this.model.saveData();
        });
        return $completeBtn;
    }
    createEditBtn() {
        const $editBtn = document.createElement('button');
        $editBtn.classList.add('editBtn');
        // $editBtn.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     const target = e.currentTarget;
        //     target.parentNode.querySelector();
        // });
        return $editBtn;
    }
    createDeleteBtn() {
        const $deleteBtn = document.createElement('button');
        $deleteBtn.classList.add('deleteBtn');
        $deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const dataTodelete = $deleteBtn.parentNode.parentNode.querySelector('.txt').innerText;
            this.model.deleteData(dataTodelete);
            this.view.deleteToDo($deleteBtn);
        });
        return $deleteBtn;
    }
    addToDo(data) {
        const $li = document.createElement('li');
        $li.innerHTML = `<input type="checkbox">
                        <span class="txt">${data.txt}</span>
                        <span class="date">${data.date}</span>
                        <div class="btnWrap">
                        </div>`;
        $li.querySelector('.btnWrap').append(this.createCompleteBtn(), this.createEditBtn(), this.createDeleteBtn());
        return $li;
    }
}


const toDoList = new ToDoController(new ToDoModel(), new ToDoView());
toDoList.initToDo();
toDoList.initEvent();