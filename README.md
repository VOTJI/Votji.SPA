# Votji.SPA
Single Page Application for Votji Freelance Platform

### styling
We are making use of styled components

### syntax 
Eslint is incorporated into the project to help uniformity of code and enforce some JS standards

### File structure
The file structure for our react components should look exactly as depicted below
```
components
└───login // component folder
│   │   actions.js // all component redux actions
│   │   actionTypes.js // all action actionTypes
│   │   constants.js // all components strings and numbers
│   │   index.js // the component exportables
│   │   reducer.js // all the redux reducers
│   │   sagas.js // all redux asynchronous operation
|   |
│   └───components // the main component and sub-components folder
│       │   Login.js // the main component
│       │   Button.js // a sub-component
│       │   Modal.js // a sub-component
│       │   ...
│       │   styles.css // components styles
│       │   index.js // exports the main component.
│
└───productsAvailable
    ...
```

#### File Naming Component Files
All react components files should be start with a capitalized letter and the rest of the name should be camel-cased.
```
components
└───login
│   │   ...
│   └───components
│       │   Login.js // capitalized
│       │   ...
│
└───productsAvailable
│   │   ...
│   └───components
│       │  ProductsAvailable.js // capitalized and camel-cased
│       │   ...
```
