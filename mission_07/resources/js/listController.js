export class ListController {
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
            const completionValue = $li.classList.contains('completion') ? 'completion' : 'incompletion';
            this.model.changeData({id: $li.id, key: 'completion', value: completionValue});
            this.view.markCompletionToDo($li);
        });
        return $completionBtn;
    }

    editingBtnHandler(list) {
        const $editingBtn = list.querySelector('.editingBtn');
        $editingBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const $txt = list.querySelector('.txt');
            if($txt.readOnly) {
                $txt.focus();
                $txt.readOnly = false;
            }
            else {
                this.model.changeData({id: list.id, key: 'txt', value: $txt.value});
                $txt.readOnly = true;
            }
        });
        return $editingBtn;
    }

    deleteBtnHandler(list) {
        const $deleteBtn = list.querySelector('.deleteBtn');
        $deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const dataTodelete = list.querySelector('.txt').innerText;
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