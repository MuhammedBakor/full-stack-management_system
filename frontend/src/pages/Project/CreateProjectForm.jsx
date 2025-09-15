import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import {tags} from "../ProjectList/ProjectList";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import {createProject} from "@/Redux/Project/Action"

const CreateProjectForm = () => {
  const dispatch = useDispatch()

  const handleTagsChange = (newValue) =>{
    const currentTags = form.getValues("tags");
    const updatedTags = currentTags.includes(newValue)?
    currentTags.filter(tag => tag !== newValue):[...currentTags, newValue];

    form.setValue("tags", updatedTags);
  }

  const form = useForm({
    //resolver:z
    defaultValues:{
      name:"",
      description:"",
      category:"",
      tags:["javascript", "react"]
    }
  })

  const onSubmit = (data) =>{
    dispatch(createProject(data))
    console.log("Create project data", data)
  }

  
  return (

    <div>
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name = "name" render = {({field}) => 
            <FormItem>
              <FormControl>
                <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5"
                 placeholder="system name..."/>
              </FormControl>
              <FormMessage/>
            </FormItem>
            }
            />
            <FormField control={form.control} name = "description" render = {({field}) => 
            <FormItem>
              <FormControl>
                <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5"
                 placeholder="system description..."/>
              </FormControl>
              <FormMessage/>
            </FormItem>
            }
            />
            <FormField control={form.control} name = "category" render = {({field}) => 
            <FormItem>
              <FormControl>
                <Select defaultValue="fullsatck" value={field.value} 
                onValueChange={(value)=>
                  field.onChange(value)
                } 
                //className="border w-full border-gray-700 py-5 px-5"
                  >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fullStack">Full Stack</SelectItem>
                    <SelectItem value="frontend">Front End</SelectItem>
                    <SelectItem value="backend">Back End</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage/>
            </FormItem>
            }
            />
            <FormField control={form.control} name = "tags" render = {({field}) => 
              <FormItem>
                <FormControl>
                  <Select 
                  //defualtValue="spring boot"
                  //value={field.value}
                  onValueChange={(value)=>
                    handleTagsChange(value)
                  } 
                  //className="border w-full border-gray-700 py-5 px-5"
                    >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tags" />
                    </SelectTrigger>
                    <SelectContent>
                    {tags.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                        )) }
                    </SelectContent>
                  </Select>
                </FormControl>
              <div className="flex gap-1 flex-wrap">
              {field.value.map((item) => 
              <div key={item} onClick={() => handleTagsChange(item)} 
                className="cursor-pointer flex rounded-full items-center border gap-2 px-4 py-1">
                  <span className="text-sm">{item}</span>
                  <Cross1Icon className="h-3 w-3"/>
              </div>)}
              </div>
              <FormMessage/>
            </FormItem>
            }
            />
            <DialogClose>
              {false? (<div><P>You can only create 3 systems with free plan,
                you can expend your ability by upgrading your plan</P></div>) : (
                <Button type="submit" className="w-full mt-5">Create a system</Button>)}
            </DialogClose>
        </form>
      </Form>
    </div>
  )
}

export default CreateProjectForm; 

