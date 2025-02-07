document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById('app');

    // Function to render the request form
    function renderRequestForm() {
        app.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">Raise a Waste Collection Request</h2>
            <form id="requestForm" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm">
                </div>
                <div>
                    <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                    <input type="text" id="address" name="address" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm">
                </div>
                <div>
                    <label for="wasteType" class="block text-sm font-medium text-gray-700">Waste Type</label>
                    <select id="wasteType" name="wasteType" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm">
                        <option value="organic">Organic</option>
                        <option value="inorganic">Inorganic</option>
                    </select>
                </div>
                <div>
                    <label for="quantity" class="block text-sm font-medium text-gray-700">Quantity (kg)</label>
                    <input type="number" id="quantity" name="quantity" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm">
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md">Submit Request</button>
            </form>
        `;

        document.getElementById('requestForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const requestData = {
                name: document.getElementById('name').value,
                address: document.getElementById('address').value,
                wasteType: document.getElementById('wasteType').value,
                quantity: document.getElementById('quantity').value
            };
            console.log('Request Data:', requestData);
            // Here you can add code to send the request data to the server
        });
    }

    // Initial render
    renderRequestForm();
});