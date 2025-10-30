function showMessage() {
  alert("Welcome to Employee Leave Management System!");
}

// Save leave data locally (demo only)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leaveForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const leave = {
        type: document.getElementById("leaveType").value,
        from: document.getElementById("fromDate").value,
        to: document.getElementById("toDate").value,
      };
      let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
      leaves.push(leave);
      localStorage.setItem("leaves", JSON.stringify(leaves));
      alert("Leave submitted successfully!");
      form.reset();
    });
  }

  const table = document.getElementById("statusTable");
  if (table) {
    const leaves = JSON.parse(localStorage.getItem("leaves")) || [];
    leaves.forEach((leave) => {
      const row = table.insertRow();
      row.insertCell(0).textContent = leave.type;
      row.insertCell(1).textContent = `${leave.from} → ${leave.to}`;
      row.insertCell(2).textContent = "Pending";
    });
  }
});

