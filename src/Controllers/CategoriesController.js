import axios from 'axios';

 async function CategoriesController() {
    const response = await axios.get('http://assignmentserver-env.eba-e93fmkzt.ap-southeast-1.elasticbeanstalk.com/categories')
    return response.data;
};
export default CategoriesController;
