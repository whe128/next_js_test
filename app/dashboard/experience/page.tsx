import { lusitana } from '@/app/ui/fonts';
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'Experience',
};

export default async function Page() {

    return (
        <main className="flex flex-wrap justify-center items-center gap-9">
            <div className="flex-col">
                <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                    Car Race
                </h1>
                <video width="900" height="500" controls autoPlay>
                    <source
                        src="https://firebasestorage.googleapis.com/v0/b/gp-24-s2-g11.appspot.com/o/fffffffffffffff_freescale.mp4?alt=media&token=f24fadae-3ee5-4d28-be01-7b125034f465"
                        type="video/mp4"/>
                </video>
            </div>

            <div className="flex-col">
                <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                    Bike with Gas Engine
                </h1>
                <video width="400" height="200" controls>
                    <source
                        src="https://firebasestorage.googleapis.com/v0/b/gp-24-s2-g11.appspot.com/o/cccccccccccccc.mp4?alt=media&token=7e4010fb-0df9-4119-bcbf-a01297f6938c"
                        type="video/mp4"/>
                </video>
            </div>

        </main>
    );
}
