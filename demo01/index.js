const text = document.getElementById('text');
const addBtn = document.getElementById('add_btn');
const minusBtn = document.getElementById('minus_btn');
const initalState = 0;
const Add = 'Add';
const MINUS = 'MINUS';

function reducer(action, state) {
  switch (action.type) {
    case Add:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer, initalState);

function reder() {
  text.innerHTML = store.getState();
}

reder();

store.subscribe(()=>{
  reder();
});


addBtn.addEventListener('click', function(){
  store.dispatch({ type: Add })
})

minusBtn.addEventListener('click', function() {
  store.dispatch({ type: MINUS })
})