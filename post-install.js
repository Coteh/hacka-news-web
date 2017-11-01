var fs = require('fs-extra'),
    path = require('path');

/* Copy tasks from node_modules */

try {
    var stat = fs.statSync(path.join(__dirname, './tasks'));
    console.log('"tasks" folder already exists. Continuing...');
} catch (e) {
    console.log('Copying "tasks" folder from "node_modules/semantic-ui/tasks"');
    fs.copySync(path.join(__dirname, './node_modules/semantic-ui/tasks'), path.join(__dirname, './semantic/tasks'));
    console.log('Copying done! Continuing...');
}