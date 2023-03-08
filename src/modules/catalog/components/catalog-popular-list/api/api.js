import axios from "axios" 
const fetcher = (url => axios.get(url,{params:{limit: 3}}).then(res => res.data))

export default fetcher