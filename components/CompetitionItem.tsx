import Clock from "components/Clock"
import styles from "styles/components/CompetitionItems.module.scss"; // Page styles
import Progress from "components/Progress"
interface Prop {
    title: string;
    subTitle: string;
    detailLink: string;
    ticketPrice: string;
    memberPrice: string;
    compImage: string;
    maxAmount: number;
    leftAmount: number;
    limitedAmount: number;
    endTime: number;
}

export default function CompetittionItem({ title, detailLink, subTitle, ticketPrice, memberPrice, compImage,maxAmount,leftAmount,limitedAmount,endTime}:Prop){
    
  return (
    <div className={styles.competition}>
        <div>
            <h2 className="tracking-normal">
                <a href={detailLink}>
                    {title}
                    <br/>
                    {subTitle}
                </a>
                
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
            <a className="rel" href={detailLink}>
                <img src={compImage} alt={title} style={{visibility: "visible"}}/>
            </a>
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
