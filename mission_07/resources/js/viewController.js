export class ViewController {
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