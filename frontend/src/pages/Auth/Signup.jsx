import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import {register} from "@/Redux/Auth/action"

function Signup() {

  const dispatch = useDispatch();

    const form = useForm({
            //resolver:z
            defaultValues:{
              email:"",
              password:"",
              fullName:""
            
            }
          });
        
          const onSubmit = (data) =>{
            dispatch(register(data))
            console.log("Create project data", data)
          };

  return (
    <div className="space-y-5">
        <h1>Register</h1>
        <Form {...form}>
             <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
             <FormField control={form.control} name = "fullName" render = {({field}) => 
                    <FormItem>
                        <FormControl>
                            <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5"
                                 placeholder="full name..."/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                    }
                            /> 
                <FormField control={form.control} name = "email" render = {({field}) => 
                    <FormItem>
                        <FormControl>
                            <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5"
                                 placeholder="email..."/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                    }
                            />
                 <FormField control={form.control} name = "password" render = {({field}) => 
                    <FormItem>
                        <FormControl>
                            <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5"
                                 placeholder="password..."/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                    }
                            /> 

                <Button type="submit" className="w-full mt-5">
                                    Register
                                </Button>                
                        </form>           
                      </Form>
    </div>
  )
}

export default Signup