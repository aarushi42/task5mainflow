import React from 'react';
import MyComponent from './mycomponent'; // Fix the import statement

function App() {
    return (
        <div style={{
            backgroundColor: '#3498db',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            flexDirection: 'column',
        }}>
            <h1>Welcome to My First React App</h1> {/* Fixed typo in heading */}
            <p>This is a simple React application I built using Create React App.</p>
            <MyComponent />
        </div>
    );
}

export default App;
