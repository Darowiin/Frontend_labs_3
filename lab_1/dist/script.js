function fetchData(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    const data = JSON.parse(xhr.responseText);
                    console.log("Полученные данные:", data);
                    alert("Данные успешно загружены. Смотрите консоль.");
                }
                catch (e) {
                    console.error("Ошибка при разборе JSON:", e);
                }
            }
            else {
                console.error(`Ошибка загрузки данных. Статус: ${xhr.status}`);
                alert("Ошибка при загрузке данных.");
            }
        }
    };
    xhr.onerror = function () {
        console.error("Произошла ошибка запроса.");
        alert("Произошла ошибка при выполнении запроса.");
    };
    xhr.send();
}
// Успешный запрос
//fetchData("data.json");
// Смоделируйте ошибку, раскомментировав строку ниже:
fetchData("wrong-path.json");
