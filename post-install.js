var fs = require('fs-extra'),
    path = require('path');

/* Copy tasks from node_modules */

var tasksPath = "./node_modules/semantic-ui/tasks";
var tasksDest = "./semantic/tasks";

try {
    var stat = fs.statSync(path.join(__dirname, tasksDest));
    console.log('"tasks" folder already exists. Continuing...');
} catch (e) {
    console.log('Copying "tasks" folder from "' + tasksPath + '"');
    fs.copySync(path.join(__dirname, tasksPath), path.join(__dirname, tasksDest));
    console.log('Copying done! Continuing...');
}