<script>

import { page } from "./store";
import Signup from "./lib/signup.svelte";
import Login from "./lib/login.svelte";
import Chat from "./lib/chat.svelte";
import Freechat from "./lib/freechat.svelte";
import FreechatWarning from "./lib/freechatWarning.svelte";

</script>
{#if $page == "signup"}

<Signup />

{:else if $page === "login"}

<Login />

{:else if $page == "chat"}

<Chat />

{:else if $page == "freechat"}

<Freechat />

{:else if $page == "freechatWarning"}

<FreechatWarning />

{/if}