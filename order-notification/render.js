'use strict';

const fs = require('fs');

function render(template, name, address, items) {
    var template = fs.readFileSync('templates/' + template + '.txt', 'utf8');

    var templateVars = {
        'name': name,
        'address': address,
        'items': items
    }

    for (var prop in templateVars) {
        // skip loop if the property is from prototype
        if(!templateVars.hasOwnProperty(prop)) continue;

        template = template.replace(new RegExp('\{\%' + prop + '\%\}', 'g'), templateVars[prop]);
    }
    const firstNewline = template.indexOf('\n');

    return {
      subject: template.substring(0, firstNewline),
      body: template.substring(firstNewline+2)
    };
}

module.exports = {
    "render": render
};
