import axios from 'axios';

async function DoctorsController(id) {
    const response = await axios.get('http://assignmentserver-env.eba-e93fmkzt.ap-southeast-1.elasticbeanstalk.com/doctor/category/'+id)
    return response.data;
};
export default DoctorsController;
