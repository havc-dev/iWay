export default function useSavedRoutes() {
  const [savedRoutes, setSavedRoutes] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    let localStorage = JSON.parse(localStorage.getItem('savedRoutes'));
    if(localStorage !== null) {
      setSavedRoutes(localStorage)
    }
    setSavedRoutes(localStorage);
    setIsLoading(false)
  }, []);

  return savedRoutes, isLoading;
}