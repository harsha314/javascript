# Javascript

## Variables

- **let, const, var**

## Promises

## Async/Await

- Syntax sugar over promises

```javascript
function fetchAStudent() {
  return new Promise((resolve, reject) => {
    resolve({ id: 0, name: "harsha" });
  });
}

async function doSomething() {
  // ...
  let student = await fetchAStudent();
  // ...
}
```

## OOPs
