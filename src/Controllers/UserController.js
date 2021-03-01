import axios from 'axios';

async function UserController(id) {
    const response = await axios.get('http://assignmentserver-env.eba-e93fmkzt.ap-southeast-1.elasticbeanstalk.com/user/'+id)
    return response.data;
};
export default UserController;
