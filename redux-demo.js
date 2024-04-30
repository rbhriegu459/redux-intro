const redux = require('redux');

const counterReducer = (state = {counter : 0 }, action) => {
    return {
        counter: state.counter + 1
    };
} ;

const store  = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latetstState= store.getState();
    console.log(latetstState);
};

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});