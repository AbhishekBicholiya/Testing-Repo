const Timer = ({ seconds, setSeconds }) => {
	// const [ seconds, setSeconds ] = useState(8);
	useEffect(() => {
		const intervalId = setInterval(() => {
			setSeconds((seconds) => seconds + -1);
		}, 1000);
		return () => {
			console.log(intervalId);
			clearInterval(intervalId);
		};
	}, []);
	return <h1>{seconds}</h1>;
};
export default Timer;
