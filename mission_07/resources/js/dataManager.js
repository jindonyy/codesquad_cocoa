export class DataManager {
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