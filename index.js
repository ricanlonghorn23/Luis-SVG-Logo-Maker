const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Triangle, Square } = require('./lib/shapes');

inquirer.prompt([
    {
        type: 'input',
        name: 'characters',
        message: 'What text should go inside of SVG (at most 3 characters)?',
        validate: function(answer) {
            if (answer.length > 3) {
                return 'Text should be at most 3 characters long.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color should the text be (must be a valid color or hexadecimal)?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should the SVG shape be (must be a valid color or hexadecimal)?',
    }
])
.then((answers) => {
    let shape;
    switch (answers.shape) {
        case 'circle':
            shape = new Circle(); 
            break;
        case 'triangle':
            shape = new Triangle(); 
            break; 
        case 'square':
            shape = new Square(); 
            break;
        default:
            console.error('Invalid shape selection');
            return;
    }

    shape.setColor(answers.shapeColor);

   
    const svg = `<svg width="300" height="200">
                    ${shape.render()}
                    <text x="50%" y="50%" dy="0.35em" text-anchor="middle" font-size="24px" fill="${answers.textColor}">${answers.characters}</text>
                </svg>`;

    fs.writeFile('logo.svg', svg, (err) => {
        if (err) {
            console.error('Error saving SVG:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
});
