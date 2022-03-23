const driver = function() {
    let inputData = document.querySelector('#inputData').value;
    setOutputData(myAlgorithm(inputData));
};

const setOutputData = function (outputData) {
    document.querySelector('#outputData').innerHTML = 'Output data: ' + '<div style=color:blue>' + outputData;
};

const myAlgorithm = function (inputData) {
    return "kek";
};
