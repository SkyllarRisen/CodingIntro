const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const response = await fetch("/logout", { method: "GET" });
  const data = await response.text();
  console.log(data);
});
