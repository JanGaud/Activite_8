document.querySelector("#button").addEventListener("click", () => {
    console.log("Message");
    console.warn("Attention");
    console.error("Erreur");
});

var nbs = 2;
for (var i = 0; i < 10; i++) {
    nbs += i;
}
