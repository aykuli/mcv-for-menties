import { Controller } from "./src/controller/index.js"
import { Model } from "./src/model/index.js"
import { View } from "./src/view/index.js"

const app = new Controller(new Model(), new View(), "users")

app.start()
