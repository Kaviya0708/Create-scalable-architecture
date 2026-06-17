async function getData() {

    try {

        const response =
            await fetch(
                "http://localhost:3000/api/users"
            );

        const data =
            await response.json();

        document.getElementById(
            "result"
        ).innerHTML =
            JSON.stringify(data);

    } catch(error) {

        console.log(error);
    }
}