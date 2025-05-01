import { Subject } from "rxjs";

const subject = new Subject<string>();

subject.next("A");
subject.next("B");
subject.next("C");

subject.subscribe((value) => console.log(`Subscriber 1: ${value}`));
subject.subscribe((value) => console.log(`Subscriber 2: ${value}`));
