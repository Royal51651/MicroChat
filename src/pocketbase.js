import PocketBase from 'pocketbase';
// remove this comment from prod
//const pocket = new PocketBase('http://73.173.154.154:8090');
const pocket = new PocketBase("http://127.0.0.1:8090")
export default pocket;