import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from '@/components/ui/dialog'
import { useDispatch } from "react-redux";
import { createIssue } from "@/Redux/Issue/Action";
import { useParams } from "react-router-dom";

function CreateIssueForm({status}) {
const {id} = useParams();
  const dispatch = useDispatch();

    const form = useForm({
            //resolver:z
            defaultValues:{
              issueName:"",
              description:""
            
            }
          })
        
          const onSubmit = (data) =>{
            data.projectId = id;
            dispatch(
              createIssue({
              title: data.issueName, 
              description: data.description, 
              projectId: id,
              status
            }));

            console.log("Create issue data", data)
          }

  return (
    <div>
        <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField control={form.control} name = "issueName" render = {({field}) => 
                    <FormItem>
                      <FormControl>
                        <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5"
                         placeholder="issue name..."/>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                    }
                    />
                    <FormField control={form.control} name = "description" render = {({field}) => 
                    <FormItem>
                      <FormControl>
                        <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5"
                         placeholder="description..."/>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                    }
                    />
                    <DialogClose>
                        <Button type="submit" className="w-full mt-5">
                            Create Issue
                        </Button>
                    </DialogClose>
                </form>
              </Form>
    </div>
  )
}

export default CreateIssueForm