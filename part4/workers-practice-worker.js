const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(`Nah I'd win`);
    }, 2000)
});


addEventListener("message", (message) => {
    if (message.data === 'get data') {
      promise.then(data => postMessage(data));
    }
  });