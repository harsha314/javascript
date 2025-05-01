import { ReplaySubject } from "rxjs";

// Create a ReplaySubject with buffer size 3
const replaySubject = new ReplaySubject<number>(3);

replaySubject.next(0);
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);

replaySubject.subscribe((value) => {
    console.log(`Sub 1 : ${value}`);
});

replaySubject.next(4);
replaySubject.next(5);
replaySubject.next(6);

replaySubject.subscribe((value) => {
    console.log(`Sub 2 : ${value}`);
});
