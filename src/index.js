const init = () => {
    const inputForm = document.getElementsByTagName ("form")[0];
    inputForm.addEventListener ('submit', (event) => {
        event.preventDefault();
        const inputValue = event.target.searchByID.value;
        if (!isNaN(inputValue)) {
            fetch(`http://localhost:3000/movies/${inputValue}`)
            .then(response => {
                if (!response.ok) throw new Error("Not Found");
                return response.json();
            })
            .then(data => {
                document.querySelector ("#movieDetails h4").textContent = data.title;
                document.querySelector ("#movieDetails p").textContent = data.summary;
            })
            
            .catch (error => {
                document.querySelector ("#movieDetails h4").textContent = error.message;
                document.querySelector ("#movieDetails p").textContent = "";

            });
        }
        else {
            document.querySelector ("#movieDetails h4").textContent = "Enter a Valid Movie ID";
            document.querySelector ("#movieDetails p").textContent = "";
        }
        inputForm.reset();
    });
      
}

document.addEventListener('DOMContentLoaded', init);