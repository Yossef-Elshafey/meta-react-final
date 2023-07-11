import { MdOutlineFileDownloadDone } from "react-icons/md";
export const Alert = () => {
  return (
    <div className=" w-full h-24 bg-emerald-500 absolute grid place-items-center rounded-md anim-alert ">
      <p className="text-white text-xl">
        {<MdOutlineFileDownloadDone className="inline mr-4" />}Great Job wait
        response as soon as possible
      </p>
    </div>
  );
};
