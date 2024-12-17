 import axios from 'axios';
 
const Rest_url='http://localhost:8080/api/v1/employees';

export const displayEmp =()=> axios.get( Rest_url);

