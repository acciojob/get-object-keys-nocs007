//your JS code here. If required.
// Create a student object with a 'name' property
const student = {
  name: 'John Doe'
};

// Add a getKeys() method to the Object prototype
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Test the getKeys() method on the student object
const keys = student.getKeys();
console.log(keys); // Output: ['name']
