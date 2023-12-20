export async function readJsonFile(jsonFileName){
    const filePath = "../data/" + jsonFileName;
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error("HTTP error! Status: ${response.status}");
        }

        const jsonContent = await response.json();
        return JSON.stringify(jsonContent)
    }
    catch(e) {
        console.error("Error fetching JSON File: ${e}");
        return "";
    }
}