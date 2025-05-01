import { Observable } from "rxjs";

// Create an Observable
const myObservable = new Observable((observer) => {
    observer.next("Value 1");
    observer.next("Value 2");
    observer.next("Value 3");
    observer.complete();
});

// Subscribe to the Observable
myObservable.subscribe({
    next: (value) => console.log(value), // Next handler
    error: (error) => console.error(error), // Error handler
    complete: () => console.log("Complete"), // Complete handler
});

myObservable.subscribe({
    next: (value) => console.log(value), // Next handler
    error: (error) => console.error(error), // Error handler
    complete: () => console.log("Complete"), // Complete handler
});
