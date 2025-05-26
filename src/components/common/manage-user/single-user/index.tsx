import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { HomeIcon, PhoneIcon, UserRoundPen } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import UserEditForm from "../user/user-edit";
import { UserRoleBadge } from "@/components/reusable/bage";

export default function SingleUser({
  user,
  index,
}: {
  user: any;
  index: number;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleUserBlockStatusChange = async () => {
    console.log("toggle");
  };
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        <Avatar className="w-10 h-10 bg-card">
          <AvatarImage
            className="object-cover"
            src={user.profile || "/default-user.png"}
            alt={user.name}
          />
          <AvatarFallback>
            {user?.name?.substring(0, 2)?.toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <div className="space-y-1">
          <div className="flex items-center space-x-1 text-foreground/70">
            <PhoneIcon className="h-3 w-3" />
            <p className="text-sm">{user.contactNumber}</p>
          </div>

          <div className="flex items-center space-x-1 text-foreground/70">
            <HomeIcon className="h-3 w-3" />
            <p
              className="text-sm truncate max-w-[150px]"
              title={user.address || "Not given"}
            >
              {user.address || "Not given"}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <UserRoleBadge role={user.role} />
      </TableCell>
      <TableCell>
        <Switch
          checked={user.isBlock}
          onCheckedChange={handleUserBlockStatusChange}
        />
      </TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <UserRoundPen />
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[700px] ">
              <DialogHeader>
                <DialogTitle>Edit User Data</DialogTitle>
                <DialogDescription>
                  <UserEditForm
                    userData={user}
                    setIsOpen={setIsDialogOpen}
                  ></UserEditForm>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </TableCell>
    </TableRow>
  );
}
