
fetch("https://github.com/atgrafic/cw/blob/master/jenzyk.txt", {mode: 'no-cors'})
.then(response => response.json())
.then(json => console.log(json));

