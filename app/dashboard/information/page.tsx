import {lusitana} from "@/app/ui/fonts";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Information',
};

export default async function Page(){
    const url = 'https://firebasestorage.googleapis.com/v0/b/gp-24-s2-g11.appspot.com/o/eeeeeeeeeeeeeeeeee_information.txt?alt=media&token=f1433cd0-f43e-4820-b002-7510afade0c1';
    let fileContent = "";
    try {
        const res = await fetch(url);
        if(!res.ok){
            throw new Error("Failed to fetch the file.")
        }
        fileContent = await res.text();
    } catch (err){
        fileContent = "error";
    }

    return (
        <main className="flex flex-wrap justify-center items-center gap-9 text-center ">
            <div className="flex-col">
                <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-blue-500 font-bold`}>
                    Personal Information
                </h1>
                <div className="border border-gray-300 rounded-lg p-6 w-800">
                    <pre className="text-[18px] break-words whitespace-normal font-lusitana">{fileContent}</pre>
                </div>
            </div>
        </main>


);
}
