import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import CreateProjectForm from "../Project/CreateProjectForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/Action";

const Navbar = () => {
    
    const {auth} = useSelector(store => store)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch(logout())
    }
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <p onClick={() => navigate("/")} className="cursor-pointer">
                System Management
            </p>
            <Dialog>
                <DialogTrigger>
                    <Button variant="ghost">
                        New System
                    </Button>
                </DialogTrigger>
                <DialogContent>    
                    <DialogHeader>New System</DialogHeader>
                    <CreateProjectForm/>
                </DialogContent>
            </Dialog> 
            <Button onClick={() => navigate("/upgrade_plan")} variant="ghost">Upgrade</Button>
        </div>
        <div className="flex gap-3 items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <p>{auth.user?.fullName}</p>
        </div>
    </div>
  )
}

//Navbar.propTypes = {}

export default Navbar;