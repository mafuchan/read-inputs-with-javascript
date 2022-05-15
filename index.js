function logValues() {
  const form = document.querySelector("form")

  form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const firstName = formData.get("first-name")
    const lastName = formData.get("last-name")
    const email = formData.get("email")

    localStorage.setItem("first-name", firstName)
    localStorage.setItem("last-name", lastName)
    localStorage.setItem("email", email)

    event.target.reset()
    console.log(localStorage)
  })
}