export const loggerMiddleware = (state: any) => {

    return (next: any) => (action: any) => {
      console.log("Middleware Dispatching:", action,state.getState());
      next(action);
      console.log("Middleware Next State:", action,state.getState());
    };
     

}