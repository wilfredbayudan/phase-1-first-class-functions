const receivesAFunction = (func) => {
  return func();
}

const returnsANamedFunction = () => {
  return function randomFunction () {
    console.log('This is a named function?');
  }
}

const returnsAnAnonymousFunction = () => {
  return function() {
    console.log('This is an anonymous function?');
  }
}