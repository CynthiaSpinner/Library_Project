# My Library

A modern, responsive web application for managing your personal book collection. Built with vanilla JavaScript, HTML5, and CSS3.

## Features

### Core Functionality
- **Add Books**: Add new books to your library with title, author, and read status
- **Remove Books**: Delete books from your collection with individual remove buttons
- **Mark as Read**: Track which books you've completed reading
- **Dynamic Display**: Real-time updates to your book table without page refreshes

### User Interface
- **Clean, Modern Design**: Professional styling with a card-based layout
- **Responsive Layout**: Optimized for all screen sizes from mobile phones to 4K displays
- **Centered Form Elements**: Intuitive form layout with properly aligned inputs
- **Interactive Elements**: Hover effects and smooth transitions throughout
- **Professional Color Scheme**: Carefully chosen colors for optimal readability

### Technical Features
- **Object-Oriented Design**: Built using ES6 classes for Book and Library management
- **DOM Manipulation**: Dynamic content creation and removal without framework dependencies
- **Event-Driven Architecture**: Responsive user interactions with proper event handling
- **Data Persistence**: In-memory storage with proper book tracking and ID management
- **Cross-Browser Compatibility**: Works across all modern web browsers

## How to Use

1. **Adding a Book**:
   - Fill in the Title and Author fields
   - Check the "Read" box if you've already read the book
   - Click "Add Book" to add it to your library

2. **Removing a Book**:
   - Click the "Remove" button next to any book in your collection
   - The book will be instantly removed from your library

3. **Tracking Reading Status**:
   - Books display a checkbox indicating whether they've been read
   - Read status is preserved when adding new books

## Technical Implementation

### Architecture
- **Book Class**: Manages individual book properties (ID, title, author, read status)
- **Library Class**: Handles the collection of books and all library operations
- **Responsive CSS**: Multiple breakpoints ensuring optimal display on any device
- **Modern JavaScript**: ES6+ features including classes, arrow functions, and template literals

### Responsive Design Breakpoints
- **Mobile (≤480px)**: Optimized for small screens with stacked layout
- **Tablet (481px-768px)**: Balanced layout for touch interfaces
- **Desktop (769px-1440px)**: Full-featured layout with centered elements
- **Large Displays (1441px+)**: Enhanced spacing and typography for large screens

## Files Structure
- `index.html` - Main application interface
- `app.js` - Core application logic and classes
- `styles.css` - Complete responsive styling
- `README.md` - This documentation

## Future
- Demo only
- Future enhancements could include local storage or database integration