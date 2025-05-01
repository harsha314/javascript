import { BehaviorSubject, Subject } from "rxjs";

// Create a BehaviorSubject with an initial value
const mySubject: Subject<number> = new BehaviorSubject<number>(0);

// Subscribe to the BehaviorSubject
mySubject.subscribe((value) => console.log(`Subscriber 1: ${value}`));

// Emit values to the BehaviorSubject
mySubject.next(1);
mySubject.next(2);

// Subscribe another observer to the BehaviorSubject
mySubject.subscribe((value) => console.log(`Subscriber 2: ${value}`));

// Emit more values to the BehaviorSubject
mySubject.next(3);
mySubject.next(4);
