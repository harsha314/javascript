import { Observable } from "rxjs";

const coldObservable = new Observable((observer) => {
    observer.next("A");
    observer.next("B");
    observer.next("C");
});

coldObservable.subscribe((value) => console.log(`Subscriber 1: ${value}`));
coldObservable.subscribe((value) => console.log(`Subscriber 2: ${value}`));
