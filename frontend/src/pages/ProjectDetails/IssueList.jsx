import { Dialog, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import IssueCard from './IssueCard'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import CreateIssueForm from './CreateIssueForm'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchIssues } from "@/Redux/Issue/Action"
import { useParams } from 'react-router-dom'

function IssueList({title, status}) {
    const dispatch = useDispatch();
    const {issue} = useSelector(store => store);
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchIssues(id))
    }, [id]);

  return (
    <div>
        <Dialog>
            <Card className="w-full md:w-[270px] lg:w-[280px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="px-2">
                    <div className="space-y-2">
                        {issue.issues.filter((issue => issue.status == status)).map((item) => <IssueCard projectId={id} item={item} key={item.id}/>)}
                    </div>
                </CardContent>
                <CardFooter>
                   <DialogTrigger>
                        <Button variant="outline" classNam="w-full flex items-center gap-2">
                            <PlusIcon/>
                            Create Issue
                        </Button>
                   </DialogTrigger>
                </CardFooter>
            </Card>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle> Create new Issue</DialogTitle>
                </DialogHeader>
                <CreateIssueForm status = {status}/>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default IssueList