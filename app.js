document.getElementById("checkCode").addEventListener("click", async () => {
  const code = document.getElementById("editor").innerText;
  const response = await fetch("http://localhost:3000/check-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  const data = await response.json();
  document.getElementById("suggestions").innerText =
    data.suggestions || "No suggestions";
});
