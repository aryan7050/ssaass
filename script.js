// Simulated historical multipliers (for demonstration)
const historicalMultipliers = [1.5, 2.0, 1.8, 2.5, 1.2];

function predict() {
    const betAmount = parseFloat(document.getElementById('betAmount').value);
    const pastCoefficient = parseFloat(document.getElementById('pastCoefficient').value);
    const predictedMultiplier = calculatePrediction(pastCoefficient, historicalMultipliers);
    const predictedWin = betAmount * predictedMultiplier;
    document.getElementById('prediction').textContent = `Predicted win: $${predictedWin.toFixed(2)}`;
}

function cashOut() {
    // Implement cash-out logic (e.g., update user balance, end the round)
    alert('Cash out successful!'); // Example: Show an alert
}

function calculatePrediction(pastCoefficient, arr) {
    // Implement your prediction logic (e.g., weighted average, machine learning)
    // For demonstration, we'll use a simple weighted average
    const n = 3; // Adjust the number of historical multipliers to consider
    const lastNMultipliers = arr.slice(-n);
    const weightedSum = lastNMultipliers.reduce((sum, val, i) => sum + val * (i + 1), 0);
    const totalWeight = lastNMultipliers.reduce((sum, _, i) => sum + (i + 1), 0);
    return weightedSum / totalWeight * pastCoefficient;
}
