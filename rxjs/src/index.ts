// import { throwError } from "rxjs";
// import { catchError } from "rxjs/operators";

let n = 100;

let nums: number[] = [];

for (let i = 0; i < n; ++i) {
  nums.push(i);
}
console.log(nums);

const debounce = (cb: any, delay: number = 1000) => {
  let timeout: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

let dcb = debounce((name: string) => {
  console.log("name");
});

dcb("hello");

// let numsObservable: Observable<number> = of(...nums);

// numsObservable
//   .pipe(
//     map((value, index) => {
//       return value * 10;
//     }),
//     take(10)
//   )
//   .subscribe((value) => {
//     console.log(value);
//   });

// import { Observable, map, of, take, takeUntil } from "rxjs";
// import { throwError } from "rxjs";
// import { catchError } from "rxjs/operators";

// // Simulating an observable that throws an error
// const sourceObservable = throwError("Oops! An error occurred.");

// sourceObservable
//     .pipe(
//         catchError((error) => {
//             console.log(`Caught error: ${error}`);
//             // Returning a fallback observable
//             return of("Fallback value");
//         })
//     )
//     .subscribe((value) => {
//         console.log(`Received value: ${value}`);
//     });
