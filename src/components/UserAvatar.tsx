import { User } from "next-auth";
import { FC } from "react";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import Image from "next/image";
import { Icons } from "./Icons";
import { AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {
  // Pick => allows us to pick specific properties from model type
  user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={user.image}
            alt="Profile Picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <Icons.user />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
