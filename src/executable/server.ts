import { Backend } from "../Backend";

const EXTENSION = __filename.substr(-2);
if (EXTENSION === "js") require("source-map-support/register");

async function main(): Promise<void> {
    const backend: Backend = new Backend();
    await backend.open();
}
main().catch((exp) => {
    console.log(exp);
    process.exit(-1);
});
