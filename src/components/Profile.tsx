import Image from "next/image";
import profileImage from "../../images/profile.jpg";

export default function Profile() {
  return (
    <>
      <div className="flex-col justify-center items-center">
        <Image src={profileImage} alt="Profile" width={400} height={400} className="rounded-full my-2" />
        <h1 className="text-center">Hi, I`m Chormy</h1>
        <div className="text-center">Full-stack engineer</div>
      </div>
    </>
  );
}
