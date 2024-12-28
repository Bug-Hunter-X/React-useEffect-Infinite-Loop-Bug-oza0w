```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct:  Update state using a callback or outside the useEffect
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update every 1000ms

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return <div>Count: {count}</div>;
}
```