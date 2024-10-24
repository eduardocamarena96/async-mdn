const paragraphElement = document.getElementById('message');

let worker = new Worker('./workers-practice-worker.js');

worker.postMessage('get data');

worker.addEventListener('message', function(event) {
    paragraphElement.innerText = event.data;
    console.log('Worker data:', event.data);  
});
