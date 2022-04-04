document.addEventListener('keydown', event => {
    if (event.code === 'Enter') {
        driver();
    }
});

const driver = function() {
    let inputData = document.querySelector('#inputData').value;
    setOutputData(myAlgorithm(inputData));
};

const setOutputData = function (outputData) {
    document.querySelector('#outputData').innerHTML = 'Output data: ' + '<div style=color:blue>' + outputData;
};

