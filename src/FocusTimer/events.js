import { controls } from "./elements.js"
import * as actions from "./actions.js"

// function que registra tudo que está sendo clicado dentro dos controls
export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
    })
}