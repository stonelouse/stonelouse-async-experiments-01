// Import stylesheets
import "./style.css";

import { promisesInAction } from "./01.promises";
import { asyncAwaitInAction } from "./02.async-await";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// promisesInAction();
asyncAwaitInAction();
