const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  // Importing the CORS middleware

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());  // This will allow requests from any origin (e.g., from Angular on port 4200)

// Middleware to parse JSON requests
app.use(express.json());

// Path to your employees.json file
const employeesFilePath = path.join(__dirname, 'employees.json');

// Route to get all employees
app.get('/employees', (req, res) => {
  fs.readFile(employeesFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading employees data');
    }
    // Send the employee data as a JSON response
    res.json(JSON.parse(data));
  });
});

// Route to delete an employee by ID
app.delete('/employees/:id', (req, res) => {
  const { id } = req.params;  // Get the employee ID from the request parameters
  fs.readFile(employeesFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading employees data');
    }
    let employees = JSON.parse(data);  // Parse the employee data
    employees = employees.filter(employee => employee.id !== parseInt(id));  // Filter out the employee with the given ID

    // Write the updated list back to the file
    fs.writeFile(employeesFilePath, JSON.stringify(employees, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error updating employees data');
      }
      res.sendStatus(200);  // Send a success status code
    });
  });
});

// Route to update an employee by ID
app.put('/employees/:id', (req, res) => {
  const { id } = req.params;  // Get the employee ID from the request parameters
  const updatedEmployee = req.body;  // The updated employee data comes from the request body

  fs.readFile(employeesFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading employees data');
    }
    let employees = JSON.parse(data);  // Parse the employee data
    const index = employees.findIndex(employee => employee.id === parseInt(id));  // Find the employee by ID

    if (index !== -1) {
      employees[index] = updatedEmployee;  // Update the employee's data

      // Write the updated list back to the file
      fs.writeFile(employeesFilePath, JSON.stringify(employees, null, 2), (err) => {
        if (err) {
          return res.status(500).send('Error updating employees data');
        }
        res.json(updatedEmployee);  // Send the updated employee data as a JSON response
      });
    } else {
      res.status(404).send('Employee not found');
    }
  });
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
