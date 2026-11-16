
import os from "os";
import fs from "fs/promises";
import path from "path";

async function main() {

    // TASK 1: Save OS Information

    const info = `
Platform: ${os.platform()}
Architecture: ${os.arch()}
Hostname: ${os.hostname()}
Total RAM: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
`;

    await fs.writeFile("system-info.txt", info);

    console.log("Task 1: OS information saved");


    // TASK 2: Read OS Information

    try {
        const data = await fs.readFile("system-info.txt", "utf-8");

        console.log("\nTask 2: System Information");
        console.log(data);

    } catch (error) {
        console.log("File not found");
    }


    // TASK 3: Create Folder and JSON Report

    await fs.mkdir("reports", { recursive: true });

    const filePath = path.join("reports", "os-report.json");

    const report = {
        platform: os.platform(),
        freeRAM: os.freemem(),
        totalRAM: os.totalmem(),
        homeDirectory: os.homedir()
    };

    await fs.writeFile(filePath, JSON.stringify(report, null, 2));

    const jsonData = await fs.readFile(filePath, "utf-8");

    const result = JSON.parse(jsonData);

    console.log("\nTask 3: OS JSON Report");
    console.log(result);

    console.log("\nAll tasks completed successfully!");
}

main();
