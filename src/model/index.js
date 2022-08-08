export class Model {
  data = {}
  error = null
  isLoading = {}

  getUsers(options) {
    const { method, url, data, element, event } = options
    this.isLoading.users = true
    console.log("before dispathcing: ")

    element.dispatchEvent(event)
    console.log("after dispathcing: ")

    setTimeout(async () => {
      try {
        const res = await axios({
          method,
          url,
          data,
        })

        this.data.users = res.data
      } catch (e) {
        this.error = e.message
      } finally {
        this.isLoading.users = false
        element.dispatchEvent(event)
      }
    }, 2000)
  }
}
