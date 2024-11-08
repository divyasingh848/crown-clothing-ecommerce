# useState[state, setState]
-> Initial state or initail bheaviour 
-> when form is filled, we are updating the state
-> when signup componet useState hook sets the intial state in the memonized state queue
-> 

# useEffect --> (()=>{},[dependencies])
-> Mounting phase
   1. Runs once after initial rander
   2. If dependencys are empty array [] or not defined i.e, second argument in useEffect
-> Updating phase 
   1. run only if dependencies are changed  
   2. (()=>{},[emailChanged, passwordChanged])
-> Cleanup phase (optional phase)
   1. If the useEffect function return another function, the function will act as clean for that effect
   2. (()=>{
         return ()=>
         {//this another callback is the cleanup function}
   },[dependencies])
-> Unmounting 
   1. When componnet we need to remove from ReactDOM
   2. Any cleanup from the effect runs if defined

      --> component mount 
      --> useEffect Initalized 
      --> Effect runs based on dependency 
            -> Everyrenders (no dependency)
            -> once ([empty array])
            -> on dependency change ([specifc dependency])
      --> Cleanup if applicaple 
            ->runs before the next renders or unmount
      --> Componnet unmount
            -> Effect cleanup execute if applicable    

# axios
-> Promise based http client for the browser 
-> Makes async calls http request to REST endpoints and return as promise(fullfilled, rejected, pending)


Whe component renders 
        |
Componnets mounts or update
   It may trigger an API call
        |
Axios request setup
   ->HTTP method (GET,PUT,DELETE,POST)
   ->URL  - specifying the endpoints your are trying to reach
   ->Options - where request headers, request body, parameters
        |
Sending axios request
        |
Server response
    -> server receives the request, processess it & send back to the client
        |
Handeling thr response
    ->Axios return a promise
    -> .then -> if fulfilled, .catch -> if error occured
    Proomise chaning
        |
Updating componnet state
       -> using useState, setState to store the response data inside the component state.
       ->which re-renders the componet with passive effect  
        |
Error handeling
      -> If server response withe the error 404, 500 etc
         then we handle it with try catch block             


# useForm, useFormState

