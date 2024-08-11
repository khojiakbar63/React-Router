# React Router

## Imaginary sample...
Imagine React routing like a big, fun amusement park. Each "route" is like a different ride, and React Router is your park guide, helping visitors (users) get to the rides they want.

## What is React Route?
React Router is a library that allows you to handle navigation in your React apps. It lets you map URL paths to different components, so when a user clicks a link or types in a URL, they’re taken to the correct part of your app.

```
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  el
);
```

```
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  {/* ... */}
</Routes>;
```