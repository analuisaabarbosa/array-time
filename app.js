function createArray(size) {
    const array = Array.from({ length: size}, () => Math.floor(Math.random() * 1000));
    array.push("x");
    return array;
}

function measureSearchTime(array) {
    const startTime = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "x") {
            break;
        }
    } 
    const endTime = performance.now();
    return endTime - startTime;
}

function runTest() {
    const sizes = [100, 1000, 10000, 100000]; 
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; 
    sizes.forEach(size => {
        const array = createArray(size);
        const time = measureSearchTime(array);
        const result = document.createElement("div");
        result.className = "result";
        result.textContent = `Array de ${size} itens, demorou ${time.toFixed(2)}ms para encontrar o x.`;
        resultsDiv.appendChild(result); 
    });
}