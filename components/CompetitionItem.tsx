import Clock from "components/Clock"
import styles from "styles/components/CompetitionItems.module.scss"; // Page styles
import Progress from "components/Progress"
import Link from "next/link"
import Image from "next/image"

interface Prop {
    title?: string;
    detailLink: string;
    ticketPrice?: string;
    memberPrice?: string;
    compImage: string;
    maxAmount: number;
    leftAmount: number;
    limitedAmount: number;
    endTime: number;
}

export default function CompetittionItem({ title, detailLink, ticketPrice, memberPrice, compImage, maxAmount, leftAmount, limitedAmount, endTime}:Prop){
    
  return (
    <div className={styles.competition}>
        <div>
            <h2 className="tracking-normal">
                <Link href={detailLink} passHref>
                    {title}
                </Link>
            </h2>
            <div className="flex flex-wrap">
                <div className="mb-3 w-1/2">
                    <p className="font-bold">Ticket Price</p>
                    <h5>{ticketPrice}</h5>
                </div>
                <div className="mb-3 w-1/2">
                    <p className="font-bold">XClub member Price</p>
                    <h5><span style={{color:"red"}}>{memberPrice}</span></h5>
                </div>
            </div>
            <Link href={detailLink} passHref>
                <Image src={compImage} alt={title} width={500} height={500}/>
            </Link>
        </div>
        <Progress 
            maxAmount={maxAmount}
            leftAmount={leftAmount}
            limitedAmount={limitedAmount}
        />
        <Clock type="black" endTime={endTime}/> 

              
    </div>
  );
}
