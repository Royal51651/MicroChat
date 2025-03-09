<script>
    import { togglePage } from "../store";
</script>

<h1>Warning!</h1>
<h2>FreeChat is unmoderated, and uncensored. Using FreeChat stores only message data, and nothing else. Enter at your own risk</h2>
<div class="logicBoxFree">
    <button onclick={() => togglePage("freechat")}>I Understand</button>
    <button onclick={() => togglePage("login")}>Take Me Back!</button>
</div>