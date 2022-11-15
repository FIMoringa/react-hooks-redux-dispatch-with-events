// add code snippets from README
let state;

function reducer(state = { count: 0 }, action) {
	switch (action.type) {
		case 'counter/increment':
			return { count: state.count + 1 };
		case 'counter/decrement':
			return { count: state.count - 1 };
		default:
			return state;
	}
}

function dispatch(action) {
	state = reducer(state, action);
	render();
}

function render() {
	div = document.querySelector('#container');
	div.textContent = state.count;
}

const handleClick = () => {
	const increaseBtn = document.querySelector('#increase');
	const decreaseBtn = document.querySelector('#decrease');
	increaseBtn.addEventListener('click', () => {
		dispatch({ type: 'counter/increment' });
	});

  decreaseBtn.addEventListener('click', () => {
		dispatch({ type: 'counter/decrement' });
	});
};

handleClick();

dispatch('@@@INIT');
