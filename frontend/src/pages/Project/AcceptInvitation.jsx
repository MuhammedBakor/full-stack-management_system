import {Button} from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { acceptInvitation } from '../../Redux/Project/Action'
import { useLocation, useNavigate } from 'react-router-dom';

function AcceptInvitation() {
    const location = useLocation();
    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const handleAcceptInvitation = () =>{
        const urlPramas = URLSearchParams(location.search);
        const token = urlPramas.get('token');
        dispatch(acceptInvitation({token, navigate}))
    }

  return (
    <div className='h-[85vh] flex flex-col justify-center items-center'>
        <h1 className='py-5 font-semibold text-xl'>You are invited to join the project</h1>
        <Button onClick={handleAcceptInvitation}>Accept Invitation</Button>
    </div>
    
  )
}

export default AcceptInvitation