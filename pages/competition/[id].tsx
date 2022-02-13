import { useState, useCallback } from 'react'
import ImageGallery from 'react-image-gallery';
import Progress from 'components/Progress';
import Clock from 'components/Clock'
import styles from "styles/pages/competitionId.module.scss"; // Page styles
import { useRouter } from 'next/router'
import { Value } from 'sass';


export default function CompetitionId() {
  const [tickets, setTicket] = useState(1)
  const router = useRouter()
  const { pid } = router.query
  /* will be get from pid */
  const images = [
    {
      original: 'https://yiannimize.s3.eu-west-2.amazonaws.com/public/fo-competitions/1bbd2dc1-c629-4d55-aad3-c378848e9fac/1170x0/1643049847_GFbIGgps0v_Suzuki-Bike-Main.jpg',
      thumbnail: 'https://yiannimize.s3.eu-west-2.amazonaws.com/public/fo-competitions/1bbd2dc1-c629-4d55-aad3-c378848e9fac/1170x0/1643049847_GFbIGgps0v_Suzuki-Bike-Main.jpg',
    },
    {
      original: 'https://yiannimize.s3.eu-west-2.amazonaws.com/public/fo-competitions/1bbd2dc1-c629-4d55-aad3-c378848e9fac/1170x0/1643049799_p4YJPvM4mO_Suzuki-Bike-1.jpg',
      thumbnail: 'https://yiannimize.s3.eu-west-2.amazonaws.com/public/fo-competitions/1bbd2dc1-c629-4d55-aad3-c378848e9fac/374x350/1643049799_p4YJPvM4mO_Suzuki-Bike-1.jpg',
    },
    {
      original: 'https://yiannimize.s3.eu-west-2.amazonaws.com/public/fo-competitions/1bbd2dc1-c629-4d55-aad3-c378848e9fac/1170x0/1643049799_p4YJPvM4mO_Suzuki-Bike-1.jpg',
      thumbnail: 'https://yiannimize.s3.eu-west-2.amazonaws.com/public/fo-competitions/1bbd2dc1-c629-4d55-aad3-c378848e9fac/374x350/1643049799_p4YJPvM4mO_Suzuki-Bike-1.jpg',
    },
  ];

  const maxAmount = 20000
  const leftAmount = 17000
  const limitedAmount = 500

  const removeTicket = useCallback(() =>{
    if(tickets>=2)
      setTicket(tickets-1)
    else 
      return
  }, [tickets, setTicket])
  const addTicket = useCallback(() => {
    if(tickets<limitedAmount)
    setTicket(tickets+1)
  }, [tickets, limitedAmount, setTicket])
  return (
    <div className={styles.competitionId} style={{paddingTop: "85px"}}>
        <div className='container'>
            <div>
                <ImageGallery items={images} />
            </div>
            <div className='flex flex-wrap my-10 mx-auto' style={{maxWidth: '500px'}}>
                <Progress 
                    maxAmount={maxAmount}
                    leftAmount={leftAmount}
                    limitedAmount={limitedAmount}
                />
            </div>
            <div className='flex flex-wrap'>
              <div className='w-full md:w-1/2'>
                <h2 className={styles.Title}>
                    {"MERCEDES C63 507 EDITION OR £25,000 TAX FREE CASH"}
                </h2>
                <span className="line"></span>
                <div className="flex flex-wrap">
                    <div className="mb-3 w-1/2">
                        <p className="font-bold my-1">Ticket Price</p>
                        <h5>{"ticketPrice"}</h5>
                    </div>
                    <div className="mb-3 w-1/2">
                        <p className="font-bold my-1">XClub member Price</p>
                        <h5><span style={{color:"red"}}>{"memberPrice"}</span></h5>
                    </div>
                </div>
                <div>description</div>
              </div>
              <div className='w-full md:w-1/2'>
                <Clock type="balck" endTime={1644041274}/>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className={styles.input}>
                <label>Tickets</label>
                <span onClick={removeTicket}>-</span>
                <input type="text" name="tickets_num" value={tickets} onChange={e=>setTicket(Number(e.target.value))}/>
                <span onClick={addTicket}>+</span>
                <div>
                  <button>buy</button>
                </div>
                
              </div>
            </div>
            
        </div>

        
    </div>
  );
}
