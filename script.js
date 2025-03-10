function login()
{
    let u = us.value;
    let p = pw.value;
    if (u == "pl" && p == "011107")
    {
        window.open("home.html");
        document.getElementById("compiler").style.display = "block";
    }
}
