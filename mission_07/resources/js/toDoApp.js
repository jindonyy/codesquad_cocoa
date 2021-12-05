import {ViewController} from './viewController.js';
import {DataManager} from './dataManager.js';
import {ListController} from './listController.js';

const toDoList = new ListController(new DataManager(), new ViewController());
toDoList.initToDo();
toDoList.initEvent();