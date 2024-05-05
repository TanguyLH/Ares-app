require("dotenv").config();
const app = require(".");

const PORT = process.env.PORT || 3000


//Listing to the app and running it on PORT 5000
app.listen(PORT, async () => {
   console.log(`listning on port ${PORT}`)
})