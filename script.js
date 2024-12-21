
function saveData() {
    const formData = {
        name: document.getElementById('caller-name').value,
        gender: document.getElementById('gender').value,
        age: document.getElementById('age').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        description: document.getElementById('description').value
    };

    const jsonData = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'caller_data.json';
    a.click();
    URL.revokeObjectURL(url);
}
