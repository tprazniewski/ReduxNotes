import {create} from ‘redux’;


//Create Store
// what we know about create function it takes a function in
//this function is called once right away

const store = createStore((state = {count: 0} ), action {
  switch(acttionn.type){
    case 'INCREMENT':
      return {
        // We don't wanan change the state itself this is why we crreate new object
        count: state.count + 1
      };
    case: 'DECREMENT':
    return {
      count: state.count - 1;
    };
    default:
      retun state;
  }

  })

  //Subscribe
      // This function runs everytime the store changes
     const unsubscribe =  store.subscribe(()=>{

                           })


// Get Values from store
    store.getState() // we get the value from tthe store 

// Create Actions
    {
      //uppercase by convention  if we had more worrds we would say 'INCREMENT_ANOTHER'
      // it must be type:
      type: 'INCREMENT';
      increment-by: 5;
    }

    // If we would like to send action to the store we use dispatch

    store.dispatch({  type: 'INCREMENT'})
    // If we would like to stop subscribing so our subscribing function in this case ll run just once because of the line above
    // unsubscribe()
    store.dispatch({  type: 'INCREMENT'})
    store.dispatch({  type: 'INCREMENT'})
    store.dispatch({  type: 'INCREMENT'})
    store.dispatch({  type: 'INCREMENT'})

    // dispatch actually allow us to send of an action object so store can do sth with this info
    // When we dispatch action to the store it(store) runs 