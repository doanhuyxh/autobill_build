function Logout() {
    fetch("/Account/Logout", {
        method:"POST"
    })
        .then(res => {
            window.location.reload()
        })
}