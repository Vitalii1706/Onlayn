const listElem = document.querySelector('.list');

const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const renderTasks = (tasksList) => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// Event
// 1. add event to the element (на який елемент повісити евент, )
// 2. ceate event handlers

// Повісити на
// Click

// algo
// 0. get task id
// 1. find task by id
// 2. update task
// 3. re-render

function undateTaskHandler(event) {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  const task = tasks.find((el) => el.id === Number(event.target.dataset.id));
  task.done = event.target.checked;
  //task.done = !task.done;
  renderTasks(tasks);
  // TODO
}

// input: String(тип івент), func(callback)
// output: undefind
const res = listElem.addEventListener('click', undateTaskHandler);

// input: event
// output: undefined

//  WEB FLOW (в всьому фронтенді так завжди працюють)
// 1. get data (завантаження даних після завант сторінки)
// 2. render (відмалювали сторінку)
// 3. update data, don`t update DOM(!!!!!) (оновлення данних, не працюється з ДОМ )
// 4. re-render (знову відмалювали сторінку)   ///

function createTaskHandler() {
  const inputElem = document.querySelector('.task-input');
  const str = inputElem.value;

  if (str === '') {
    return;
  }

  inputElem.value = '';

  tasks.push({ text: str, done: false, id: tasks.length + 1 });
  renderTasks(tasks);
}
const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', createTaskHandler);

// algo
// 1. get task text
// 2. create task
// 3. update task
// 4. re-render
