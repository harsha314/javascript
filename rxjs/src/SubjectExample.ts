import { Subject } from "rxjs";

// Create a Subject
const mySubject = new Subject<number>();

// Subscribe to the Subject
mySubject.subscribe((value) => console.log(`Subscriber 1: ${value}`));

// Emit values to the Subject
mySubject.next(1);
mySubject.next(2);

// Subscribe another observer to the Subject

mySubject.subscribe((value) => console.log(`Subscriber 2: ${value}`));

// Emit more values to the Subject
mySubject.next(3);
mySubject.next(4);
