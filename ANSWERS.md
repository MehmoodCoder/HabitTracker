# Assessment Answers

### 1. How to run
To run this project, just download the files and double-click the `index.html` file. It will open and run perfectly in any web browser. No installation is needed because it uses plain HTML, CSS, Bootstrap and Js.

### 2. Stack & design choices
I chose Vanilla HTML, CSS, Bootstrap, and Js because they are lightweight and easy to run directly in the browser without any complex setup. 
For design choices:
- I used a clean table grid layout because it makes it very easy for the user to see all habits and days at a single glance.
- I highlighted the "Today" column with a soft yellow background color so the user instantly knows which day they are tracking right now.

### 3. Responsive & accessibility
- **Responsiveness:** I used Bootstrap's grid system and the `table-responsive` class. On a laptop, the grid displays fully, and on a narrow 360px mobile screen, the table becomes scrollable horizontally so the layout does not break.
- **Accessibility considered:** I made sure the checkboxes are standard HTML inputs so they can be easily focused and clicked.
- **Accessibility skipped:** I skipped adding full screen-reader aria-labels for each checkbox because of the limited 48-hour time window.

### 4. AI usage
I used AI to help me structure the basic JavaScript logic for tracking dates and handling the weekly offset counter. 
- **What I changed:** The AI originally gave me code using complex arrow functions (`=>`) and backtick template strings. Since I am a beginner (Basically I'm a Python developer), I changed the code to use standard `for` loops, regular `if/else` statements, and simple string concatenation (`+`) so that I fully understand my own code.

### 5. Honest gap
The project is fully functional, but the week navigation label only shows numbers like "1 Week Next" instead of showing the actual calendar dates of that week. If I had one more day, I would write a JavaScript function to calculate and display the exact dates for past and future weeks.