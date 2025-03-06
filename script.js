//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

 
  output.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

  
  function createPromise(index) {
    const delay = Math.random() * 2 + 1; // Random delay between 1 and 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name: `Promise ${index}`, time: delay.toFixed(3) }), delay * 1000);
    });
  }

 
  const promises = [createPromise(1), createPromise(2), createPromise(3)];


  Promise.all(promises).then((results) => {
   
    output.innerHTML = "";

   
    results.forEach((result) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
      output.appendChild(row);
    });

    // Calculate total time taken (max of all promise times)
    const totalTime = Math.max(...results.map((r) => parseFloat(r.time))).toFixed(3);
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    output.appendChild(totalRow);
  });
});
