import Image from "next/image";
import { HiPencil, HiX } from "react-icons/hi";
import CodeContext from "@/components/CodeContext";
import { useContext, useState } from "react";
import axios from "axios";

const Profile = ({ src, fullName, userName, joinDate }) => {
  const { user, setUser } = useContext(CodeContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [error, setError] = useState("");

  const updateContext = async (tempUser) => {
    await axios
      .post("api/updateUserInfo", { uid: user.uid, newName: tempUser })
      .then((response) => setUser({ ...user, username: response.data.newName }))
      .catch((error) => setError(error.response.data.error))
      .finally(() => setIsEditing(false));
  };

  const updateProfileComponent = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
    setNewUserName("");
    setError("");
  };

  return (
    <div className="w-10/12 p-7 m-4 bg-code-darkpurple text-code-white rounded-3xl">
      <div className="flex justify-between items-start pb-2.5">
        <div className="w-48 h-48 mb-2 bg-gray-300 rounded-2xl relative">
          <Image
            src={src}
            className="rounded-2xl"
            alt={fullName + "'s profile picture"}
            fill
            unoptimized={true}
          />
        </div>
        <button onClick={(e) => updateProfileComponent()}>
          {!isEditing ? (
            <HiPencil className="text-4xl" />
          ) : (
            <HiX className="text-4xl" />
          )}
        </button>
      </div>
      {!isEditing ? (
        <div className="text-3xl font-semibold">{userName}</div>
      ) : (
        <div className="grid max-w-80 gap-1">
          Change username
          <input
            className="text-lg rounded w-full h-9 text-code-black pl-2"
            placeholder={userName}
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <div className="text-code-lightpurple">{error}</div>
          <button
            className="justify-self-end rounded-full h-7 w-24 bg-code-lime text-code-black font-bold"
            onClick={() => {
              updateContext(newUserName);
            }}
          >
            Save
          </button>
        </div>
      )}
      <div className="text-xl font-normal">{fullName}</div>
      <div className="h-0.5 w-full bg-white rounded-sm my-4" />
      <div className="text-sm font-light mt-4">member since {joinDate}</div>
    </div>
  );
};

export default Profile;
