import axios from 'axios';

 export async function UpcomingConsultationsController(id) {
    let response = await axios.get('http://assignmentserver-env.eba-e93fmkzt.ap-southeast-1.elasticbeanstalk.com/consultation/upcoming/'+id)
    return response.data;
};

export async function PastConsultationsController(id) {
   let response = await axios.get('http://assignmentserver-env.eba-e93fmkzt.ap-southeast-1.elasticbeanstalk.com/consultation/pastConsultation/'+id)
   return response.data;
};
