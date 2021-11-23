class ToDoModel {
    constructor() {
        this.storageKey = 'to do list';
        this.$addInput = document.querySelector('.addFormWrap input');
    }

    initData () {
        const storage = localStorage.getItem(this.storageKey);
        this.toDoDataArr = storage ? JSON.parse(storage) : [];
        return this.toDoDataArr;
    }

    saveData() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.toDoDataArr));
    }

    addData(data) {
        this.toDoDataArr.push(data);
        this.saveData();
    }

    changeData({id, key, value}) {
        const dataToChange = this.toDoDataArr.find(data => data.id === id);
        const dataIndex = this.toDoDataArr.indexOf(dataToChange);
        dataToChange[key] = value;
        this.toDoDataArr[dataIndex] = dataToChange;
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

    markCompletionToDo(list) {
        list.classList.toggle('completion');
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

    getDate() {
        const newDate = new Date(); 
        return `${newDate.getFullYear()}.${newDate.getMonth() + 1}.${newDate.getDate()}`;
    }

    addBtnHandler(e) {
        e.preventDefault();
        const toDoTxt = this.model.$addInput.value;
        if(!toDoTxt) return false;
        const toDoData = {
            'id': String(Date.now()),
            'txt': toDoTxt,
            'date': this.getDate(),
            'completion': 'incompletion'
        };
        this.model.addData(toDoData);
        this.view.renderToDo(this.addToDo(toDoData));
    }

    initEvent() {
        this.view.$addBtn.addEventListener('click', (e) => {
            this.addBtnHandler(e);
        });
        this.view.$addInput.addEventListener('keyup', (e) => {
            if(e.keyCode == 13) this.addBtnHandler(e);
        });
    }

    completionBtnHandler(list) {
        const $completionBtn = $li.querySelector('.completionBtn');
        $completionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const completionValue = $li.classLis.contains('completion') ? 'completion' : 'incompletion';
            this.model.changeData({id: $li.id, key: 'completion', value: completionValue});
            this.view.markCompletionToDo($li);
        });
        return $completionBtn;
    }

    editingBtnHandler(list) {
        const $editingBtn = $li.querySelector('.editingBtn');
        $editingBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const $txt = $li.querySelector('.txt');
            if($txt.readOnly) {
                $txt.focus();
                $txt.readOnly = false;
            }
            else {
                this.model.changeData({id: $li.id, key: 'txt', value: $txt.value});
                $txt.readOnly = true;
            }
        });
        return $editingBtn;
    }

    deleteBtnHandler(list) {
        const $deleteBtn = $li.querySelector('.deleteBtn');
        $deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const dataTodelete = $li.querySelector('.txt').innerText;
            this.model.deleteData(dataTodelete);
            this.view.deleteToDo($deleteBtn);
        });
        return $deleteBtn;
    }

    addToDo(data) {
        const $li = document.createElement('li');
        $li.id = data.id;
        $li.innerHTML = `<input type="checkbox">
                        <input type="text" class="txt" value="${data.txt}" readonly>
                        <span class="date">${data.date}</span>
                        <div class="btnWrap">
                            <button type="button" class="completionBtn"></button>
                            <button type="button" class="editingBtn"></button>
                            <button type="button" class="deleteBtn"></button>
                        </div>`;
        this.completionBtnHandler($li);
        this.editingBtnHandler($li);
        this.deleteBtnHandler($li);
        return $li;
    }
}


const toDoList = new ToDoController(new ToDoModel(), new ToDoView());
toDoList.initToDo();
toDoList.initEvent();