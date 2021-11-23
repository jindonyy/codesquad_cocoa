class ToDoModel {
    constructor() {
        this.storageKey = 'to-do-list';
        this.$addInput = document.querySelector('.addFormWrap input');
    }
    initData () {
        const storage = localStorage.getItem(this.storageKey);
        this.toDoDataArr = storage ? JSON.parse(storage) : [];
        return this.toDoDataArr;
    }
    getDate() {
        const newDate = new Date(); 
        return `${newDate.getFullYear()}.${newDate.getMonth() + 1}.${newDate.getDate()}`;
    }
    saveData() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.toDoDataArr));
    }
    addData(toDoData) {
        this.toDoDataArr.push(toDoData);
        this.saveData();
    }
    changeData(id) {
        this.toDoDataArr.find(data => data.id === id);
        this.saveData();
    }
    deleteData(data) {
        this.toDoDataArr = this.toDoDataArr.filter(el => el.txt !== data);
        this.saveData();
    }
}

class ToDoView {
    constructor() {
        this.$addBtn = document.querySelector('.addBtn');
        this.$addInput = document.querySelector('.addFormWrap input');
    }
    initView(data) {
        data.forEach((list) => this.renderToDo(list));
    }
    renderToDo(list) {
        document.querySelector('.toDoList').appendChild(list);
        this.$addInput.value = "";
    }
    deleteToDo(list) {
        list.closest('li').remove();
    }
}

class ToDoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    initToDo() {
        const storageData = this.model.initData();
        storageData.forEach((el) => this.view.renderToDo(this.addToDo(el))); 
    }
    addBtnEvent(e) {
        e.preventDefault();
        const toDoTxt = this.model.$addInput.value;
        if(!toDoTxt) return false;
        const toDoData = {
            'id': Date.now(),
            'txt': toDoTxt,
            'date': this.model.getDate(),
            'complete': 'incomplete'
        };
        this.model.pushData(toDoData);
        this.view.renderToDo(this.addToDo(toDoData));
    }
    initEvent() {
        this.view.$addBtn.addEventListener('click', (e) => {
            this.addBtnEvent(e);
        });
        this.view.$addInput.addEventListener('keyup', (e) => {
            if(e.keyCode == 13) this.addBtnEvent(e);
        });
    }

    createCompleteBtn() {
        const $completeBtn = document.createElement('button');
        $completeBtn.classList.add('completeBtn');
        $completeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            target.closest('li').classList.toggle('complete');
            this.model.changeData()
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
            const dataTodelete = $deleteBtn.closest('li .txt').innerText;
            this.model.deleteData(dataTodelete);
            this.view.deleteToDo($deleteBtn);
        });
        return $deleteBtn;
    }
    addToDo(data) {
        const $li = document.createElement('li');
        $li.id = Date.now();
        $li.innerHTML = `<input type="checkbox">
                        <span class="txt">${data.txt}</span>
                        <span class="date">${data.date}</span>
                        <div class="btnWrap">
                        </div>`;
        $li.querySelector('.btnWrap').appendChild(this.createCompleteBtn());
        $li.querySelector('.btnWrap').appendChild(this.createEditBtn());
        $li.querySelector('.btnWrap').appendChild(this.createDeleteBtn());
        return $li;
    }
}


const toDoList = new ToDoController(new ToDoModel(), new ToDoView());
toDoList.initToDo();
toDoList.initEvent();