"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMaterial = void 0;
const cross_fetch_1 = require("cross-fetch");
const postMaterial = (baseURL, materialFileContents, filename, signatureFileContents) => {
    return new Promise(async (resolve, reject) => {
        let formData;
        let materialBlob;
        let signatureBlob;
        // Check if we are running in the browser or on node.js
        if (typeof window === "undefined") {
            // Node.js
            const buffer = require("buffer");
            materialBlob = new buffer.Blob([materialFileContents], {
                type: "text/plain",
            });
            signatureBlob = new buffer.Blob([signatureFileContents], {
                type: "text/plain",
            });
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("filename", filename);
            formData.append("file", materialBlob);
            formData.append("signature_file", signatureBlob);
        }
        else {
            // Browser
            materialBlob = new Blob([materialFileContents], { type: "text/plain" });
            signatureBlob = new Blob([signatureFileContents], { type: "text/plain" });
            const FormData = require("form-data");
            formData = new FormData();
            formData.append("filename", filename);
            formData.append("file", materialBlob);
            formData.append("signature_file", signatureBlob);
        }
        const res = await (0, cross_fetch_1.fetch)(baseURL + "/api/v1/materials", {
            method: "POST",
            mode: "cors",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });
        if (res.status == 204)
            resolve(true);
        reject(res);
    });
};
exports.postMaterial = postMaterial;
