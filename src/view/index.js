export class View {
  constructor() {
    this.container = document.querySelector("#root")
  }

  drawSkeleton() {
    this.usersContainer = this.createElement("div", "users", this.container)
    this.event = new Event("usersLoading", { bubbles: true })
  }

  createElement(tag, className, parent, txt = "") {
    const el = document.createElement(tag)
    el.className = className
    el.innerText = txt
    parent?.appendChild(el)
    return el
  }

  linkListeners(isLoading, data) {
    this.usersContainer.addEventListener("usersLoading", () => {
      if (isLoading.users) {
        this.showUsersLoader()
      } else {
        this.hideUsersLoader()

        if (data.users.length) {
          this.drawUsers(data.users)
        }
      }
    })
  }

  showUsersLoader() {
    this.usersContainer.innerText = "LOADING ...."
  }

  hideUsersLoader() {
    this.usersContainer.innerText = ""
  }

  drawUsers(users) {
    this.usersList = this.createElement("ul", "users-list", this.usersContainer)

    users.map(({ name }) => {
      this.createElement("li", "user-item", this.usersList, name)
    })
  }
}
