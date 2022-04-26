<script>
    import io from "socket.io-client";

    const socket = io();

    let lastPersonToChangeAColor;

    socket.on("changeTheColor", ({ data, username }) => {
        // in Svelte don't do access document... Do it the Svelte way
        document.body.style.backgroundColor = data;
        lastPersonToChangeAColor = username;
    });

    function changeColor(event) {
        socket.emit("colorChanged", { data: event.target.value });
    }
</script>

<h2>Last Person to Change a Color: {lastPersonToChangeAColor || "Unknown"}</h2>
<input type="color" on:change={changeColor}>