const fs = require("fs")
const dir = "./dist"

// Clear the dist directory
if (fs.existsSync(dir)) {
	fs.rmSync(dir, { recursive: true })
	console.log("Directory Cleaned!")
	fs.mkdirSync("./dist")
	console.log("Folder Created")
} else {
	console.log("./dist does not exist")
}

