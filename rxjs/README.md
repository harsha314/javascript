# RXJS

- **Observable**

In RxJS, an Observable represents a stream of values over time. It is a core concept in reactive programming and is used extensively for handling asynchronous operations, such as data streams, events, and HTTP requests.

An Observable emits multiple values over time, and these values can be observed and subscribed to by observers. Observers are functions that receive notifications from the Observable whenever new values are emitted, allowing them to react and perform actions accordingly.

```typescript
import { Observable } from "rxjs";

// Create an Observable
const myObservable = new Observable((observer) => {
  observer.next("Value 1");
  observer.next("Value 2");
  observer.next("Value 3");
  observer.complete();
});

// Subscribe to the Observable
myObservable.subscribe(
  (value) => console.log(value), // Next handler
  (error) => console.error(error), // Error handler
  () => console.log("Complete") // Complete handler
);
```

- **Hot observable** emit values even when there are no subscribers. Examples : Subjects
- **Cold Observables** emit values only when there are subscribers. Example : Observables

- **Subject**

  - **BehaviourSubject**
  - **ReplaySubject**
  - **AsyncSubject**

## **Operators**

```typescript
import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";

const sourceObservable = of("A", "B", "C");

sourceObservable
  .pipe(mergeMap((value) => of(`Mapped ${value}`)))
  .subscribe((result) => {
    console.log(result);
  });
```

- **of**

- **from**

- **tap** : utility

- **map**, **filter**, **take**

- **mergeMap**: Maps each value emitted by an observable to an inner observable, and merges the values from all the inner observables into a single observable stream.

- **switchMap**: Maps each value emitted by an observable to an inner observable, and switches to emitting values from the most recent inner observable. Any previous inner observables are unsubscribed.

- **concatMap** : Maps each value emitted by an observable to an inner observable, and concatenates the values from all the inner observables in the order they were emitted. This waits for the inner observable to complete to start with the next observable

```js
import { of, switchMap } from "rxjs";

const switched = of(1, 2, 3).pipe(switchMap((x) => of(x, x ** 2, x ** 3)));
switched.subscribe((x) => console.log(x));
```

- **catchError**, **retry**

- **interval** :
- **debounceTime**: Emits a value from an observable only after a specified period of inactivity, discarding any previous values emitted during the period.
- **throttleTime**
