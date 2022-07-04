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
        //uppercase by convention
        type: 'INCREMENT'
      }