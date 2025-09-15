import { Card } from '@/components/ui/card'
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserSubscription, upgradeSubscription } from '../../Redux/Subscription/Action';

function UpgradSuccess() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {subscription} = useSelector(store => store);
    const queryParams = new URLSearchParams(location.search);
    const paymenetId = queryParams.get("payment_id");
    const planType = queryParams.get("planType");

    useEffect(() => {
        dispatch(upgradeSubscription({planType})),
        dispatch(getUserSubscription());
    }, [])

  return (
    <div className='flex justify-center'>
        <Card className="mt-20 p-5 space-y-5 flex flex-col items-center">
            <div className="flex items-center gap-4">
                <CheckCircledIcon className='h-9 w-9 text-green-500'/>
                <p className='text-xl'>Plan Upgraded Successfully</p>
            </div>
            <div className='space-y-3'>
                <p className='text-green-500'>start Date: 
                    {subscription.userSubscription?.getSubscriptionStartDate}</p>
                <p className='text-red-500'>end Date: 
                {subscription.userSubscription?.subscriptionEndtDate}
                </p>
                <p className=''>Plan Type:
                {subscription.userSubscription?.planType}
                </p>
            </div>
            <Button onClick={() => navigate("/")} className="">Go to home page</Button>
        </Card>
    </div>
  )
}

export default UpgradSuccess