async function analyze() {
    let text = document.getElementById("contractText").value;

    let response = await fetch("http://localhost:8080/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text })
    });

    let data = await response.json();

    let resultDiv = document.getElementById("result");

    let html = `<h2>Risk Score: ${data.score}%</h2>`;

    data.risks.forEach(risk => {
        let cls = risk.type.toLowerCase();
        html += `<p class="${cls}">${risk.type} Risk: ${risk.text}</p>`;
    });

    resultDiv.innerHTML = html;
}