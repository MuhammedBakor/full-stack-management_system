import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import ProjectCard from "../Project/ProjectCard";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {searchProjects, fetchProjects} from "@/Redux/Project/Action"

export const tags = ["all", "react", "next.js", 
  "spring boot", "mysql", "mogodb", "angular", "python", "flask", "django"];

 const ProjectList = () => {

  const [keyword, setKeyword] = useState("");
  const {project} = useSelector(store => store);
  const dispatch = useDispatch();

  const handleFiltterCategory = (value) =>{
    if(value == "all"){
      dispatch(fetchProjects({}))
    }
    else{
      
    dispatch(fetchProjects({category: value}));
    }
  }

  const handleFiltterTags = (value) =>{
    if(value == "all"){
      dispatch(fetchProjects({}))
    }
    else{
    dispatch(fetchProjects({tag: value}));
  }
  }

  const handleSearchChange = (e) =>{
    const value = e.target.value;
    setKeyword(value);
    dispatch(searchProjects({keyword: value}));
  }

  console.log("project store", project)
  return (
    <>
     <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
      <section className="filterSection">
        <Card className="p-5 sticky top-10">
          <div className="flex justify-between lg:w-[20rem]">
            <p className="text-xl tracking-wider">filters</p>
            <Button variant="ghost" size="icon">
              <MixerHorizontalIcon/>
            </Button>
          </div>

          <CardContent className="mt-5">
            <ScrollArea className="space-y-7 h-[70vh]">

              <div>
                <h1 className="pd-3 text-gray-400 border-bi">Category</h1>
                <div className="pt-5 ">
                  <RadioGroup 
                  className="space-y-3 pt-5"  
                  defaultValue="all" onValueChange={(value) => handleFiltterCategory(value)}>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="all" id="r1"/>
                      <Label htmlFor="r1">all</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="fullStack" id="r2"/>
                      <Label htmlFor="r2">fullStack</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="frontend" id="r3"/>
                      <Label htmlFor="r3">frontend</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="backend" id="r4"/>
                      <Label htmlFor="r4">backend</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <div className="pt-9">
                <h1 className="pd-3 text-gray-400 border-bi">Tag</h1>
                <div className="pt-5 ">
                  <RadioGroup 
                  className="space-y-3 pt-5" 
                  defaultValue="all" onValueChange={(value) => handleFiltterTags(value)}>
                    
                    {
                       tags.map((item) =>
                       <div key={item} className="flex items-center gap-2">
                       <RadioGroupItem value={item} id={'r1-${item}'}/>
                       <Label htmlFor={'r1-${item}'}>{item}</Label>
                     </div>
                     ) 
                    }
                   
                  </RadioGroup>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      <section className="projectListSection w-full lg:w-[48rem]">
        <div className="flex  gap-2 items-center pd-5 justify-between">
          <div className="relative p-0 w-full ">
            <Input onChange={handleSearchChange} placeholder="search project" className="40% px-9" />
            <MagnifyingGlassIcon className="absolute top-3 left-4"/>
          </div>
        </div>
        <div>
          <div className="p-5 space-y-5 min-h-[74vh]">
            {
              keyword ? project.searchProjects?.map((item, index) =>
              <ProjectCard item={item} key={item.id * index}/>)
              : project.projects?.map((item)=>( <ProjectCard key={item.id} item={item}/>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
   
  )
}

export default ProjectList;