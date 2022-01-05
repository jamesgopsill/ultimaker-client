const fs = require("fs")
const glob = require("glob")

// https://futurestud.io/tutorials/node-js-string-replace-all-appearances
const replacer = new RegExp("\r\n", "g")

// Now go through and check EoL delimiter and set it to LF rather than CRLF
glob("**/*", {
	ignore: ["node_modules/**/*", "**/*.png", "**/*.jpeg", "**/*.jpg"]
}, (err, files) => {
	//console.log(files)

	for (const f of files) {
		if (fs.lstatSync(f).isDirectory()) {
			continue
		}
		let content = fs.readFileSync(f).toString()
		if (content.includes("\r\n")) {
			console.log("CRLF detected", f)
			content = content.replace(replacer, "\n")
			fs.writeFileSync(f, content)
		}
	}
})