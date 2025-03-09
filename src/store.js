import { writable } from 'svelte/store';
export const page = writable("login");
export const togglePage = (location) => {
    page.set(location);
};