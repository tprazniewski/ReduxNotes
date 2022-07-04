import {create} from ‘redux’;


//Create Store
// what we know about create function it takes a function in
//this function funs is called once right away

const store = createStore((state = {count: 0} ) {
    return state;
  })

// Get Values from store
store.getState() // we get the value from tthe store in this case a defaultt object which is {count: 0}

// Create Actions
    {
      //uppercase by convention  if we had more worrds we would say 'INCREMENT_ANOTHER'
      type: 'INCREMENT'
    }

    // If we would like to send action to the store we use dispatch

    store.dispatch({  type: 'INCREMENT'})
    // dispatch actually allow us to send of an action object so store can do sth with this info