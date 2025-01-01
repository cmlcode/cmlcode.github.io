document.addEventListener("DOMContentLoaded", () => {
	const tableBody = document.querySelector("#booksTable tbody");
	const jsonFilePath = "/data/library.json";

	fetch(jsonFilePath)
		.then(response => {
			if (!response.ok) {
				throw new Error(`Failed to fetch JSON file at $(jsonFilePath)`);
			}
			return response.json();
		})
		.then(books => {
			books.slice(1).forEach(book => {
				const row = document.createElement("tr");

				row.innerHTML = `
					<tr>
						<td class="lib_row">${book.title}</td>
						<td class="lib_row">${book.author}</td>
						<td class="lib_row">${book.rating}</td>
						<td class="lib_row">${book.isbn}</td>
					<tr>
				`;

				tableBody.appendChild(row);
			})
		})
		.catch(error => {
			console.error("Error loading books:", error);
		})

})
