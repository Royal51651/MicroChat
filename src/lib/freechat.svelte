<script lang="ts">
    import pocket from '../pocketbase';
    import { onMount, onDestroy } from "svelte"

    let message = $state("")

    let messages = $state([]);

    const focusMessageBar = () => {
        let target = document.getElementById("messageControlFree");
        target.focus();
        target.scrollIntoView();
    }

    async function send(){
        if(message != ""){
            const data = {
                "Body": message,
            };
            const response = await pocket.collection('freeMessages').create(data);
            if(response){
                message = "";
            }

        }
    }

    // subscribe to the thingy so it works better
    let unsubscribe: () => void;
    onMount(async () => {
        const response = await pocket.collection("freeMessages").getList(1, 15, {
            sort: '-created',
        });
        messages = response.items;
        messages.reverse();

        unsubscribe = await pocket
            .collection('freeMessages')
            .subscribe("*", async ({ action, record }) => {
                if(action === "create"){
                    if(messages.length < 15){
                        messages.push(record);
                    } else {
                        messages.push(record);
                        messages.shift();
                    }
                    focusMessageBar();
                }
            });
    });

    onDestroy(() => {
        unsubscribe?.();
    });

</script>

<div class="messageContainer">

    {#each messages as message}

    <div class="messageFree">
        <p1>{message.Body}</p1>
    </div>
    
    {/each}

</div>

<div class="messageControlFree" id="messageControlFree">
    <span style="width: 10%;">
        <p1>FreeChat</p1>
    </span>
    <span style="width: 90%;">
        <div class="logicBoxFree">
            <input
                onkeydown={(e) => e.key === "Enter" && send()}
                type="text"
                placeholder="Message"
                bind:value={message}
            >
        </div>
    </span>
    
</div>
