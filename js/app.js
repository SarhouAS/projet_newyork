
import { Description } from "./template.js";
import { template } from "./template.js";

document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    console.table(Description);
    template.printF();
});