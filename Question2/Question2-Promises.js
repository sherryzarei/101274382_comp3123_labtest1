const resolvedPromise = () => new Promise((resolve, reject) => setTimeout(resolve({'message' : 'delayed success'}), 500)); 

const rejectedPromise = () => new Promise((resolve, reject) => setTimeout(reject({'message' : 'delayed exception!'}), 500));


resolvedPromise().then((message) => console.log(message));
rejectedPromise().catch((message) => console.log(message));