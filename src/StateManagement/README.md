npm install @reduxjs/toolkit
npm install react-redux

In App
```
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
```

Store
```
export const store = configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
  }),
});
```

