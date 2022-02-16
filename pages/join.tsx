import { useState, useCallback } from 'react'
import 'react-tabs/style/react-tabs.css';
import Image from "next/image"
import styles from "styles/pages/Join.module.scss"; // Page styles

export default function Join() {
    const [month, setMonth] = useState(1)
    const removeMonth = useCallback(() =>{
        if(month>=2)
        setMonth(month-1)
        else 
          return
      }, [month, setMonth])
      const addMonth = useCallback(() => {
        if(month<12)
        setMonth(month+1)
      }, [month, setMonth])

      let months = [];
      for (var i = 1; i < 13; i++) {
        months.push(<option value={i}>{i}</option>);
      }
      let years = [];
      for (var i = 1; i < 6; i++) {
        years.push(<option value={i}>{i}</option>);
      }
  return (
    <div style={{paddingBlock: "85px"}} className={styles.join}>
        <div className="container">
            <div className='flex flex-wrap pt-20'>
                <div className='w-full md:w-1/3'>
                    <div className='text-center'>
                        <Image src="/logo.png" alt="avatar" width={50} height={50}/>
                        <h3>Name</h3>
                    </div>
                    <div className='flex flex-wrap pt-4 m-4'>
                        <label className='w-1/2'>Join date:</label>
                        <span>
                            --:--:-- 
                        </span>
                    </div>
                    <div className='flex flex-wrap m-4'>
                        <label className='w-1/2'>Until:</label>
                        <span>
                            --:--:-- 
                        </span>
                    </div>
                    <div className='flex flex-wrap m-4'>
                        <label className='w-1/2'>Total Paid:</label>
                        <span>
                            ----- $PXT
                        </span>
                    </div>
                    <div className='flex flex-wrap m-4'>
                        <label className='w-1/2'>Total Received Credit:</label>
                        <span>
                            -----
                        </span>
                    </div>
                    <div className='flex flex-wrap m-4'>
                        <label className='w-1/2'>Total Spent Credit:</label>
                        <span>
                            -----
                        </span>
                    </div>
                    <div className='flex flex-wrap m-4'>
                        <label className='w-1/2'>Balance of Credit:</label>
                        <span>
                            -----
                        </span>
                    </div>
                </div>
                <div className='w-full md:w-2/3 text-center'>
                    <h2 className='mt-4 mb-10'>Pay Membership</h2>
                    <div className='flex flex-wrap'>
                        <div className='w-full md:w-1/2 p-6 md:border-r-2'>
                            <h3>Monthly</h3>
                            <div className='flex flex-wrap'>
                                <label className='w-1/2'>Cost</label>
                                <span>
                                    -- $PXT 
                                </span>
                            </div>
                            <div className='flex flex-wrap'>
                                <label className='w-1/2'>Reward Credits</label>
                                <span>
                                    --/month 
                                </span>
                            </div>
                            <h2 className='my-8'>Months to Pay</h2>
                            <div className='flex flex-wrap justify-center'>
                                <select className='border-2 rounded-xl p-2 mr-8' key="months">
                                    {months}
                                </select>
                                <button>Pay</button>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 p-6'>
                            <h3>Anual</h3>
                            <div className='flex flex-wrap'>
                                <label className='w-1/2'>Cost</label>
                                <span>
                                    -- $PXT 
                                </span>
                            </div>
                            <div className='flex flex-wrap'>
                                <label className='w-1/2'>Reward Credits</label>
                                <span>
                                    --/month 
                                </span>
                            </div>
                            <h2 className='my-8'>Years to Pay</h2>
                            <div className='flex flex-wrap justify-center'>
                                <select className='border-2 rounded-xl p-2 mr-8' key="years">
                                    {years}
                                </select>
                                <button>Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* <div className="pt-20 text-center">
                <Image src="https://yiannimize.s3.eu-west-2.amazonaws.com/public/plans/000/000/001/78x0/yclub-membership.png" alt="" width={78} height={49} />
                <div className='items-center flex flex-col m-auto' style={{maxWidth: "400px"}}>
                    <div className={styles.input}>
                        <span onClick={removeMonth}>-</span>
                        <input type="text" name="tickets_num" value={month} onChange={e=>setMonth(Number(e.target.value))}/>
                        <span onClick={addMonth}>+</span>
                    </div>
                    <div className={styles.button}>
                        <button>buy</button>
                    </div>
                </div>
                <div>
                    <span>Completion date of your membership</span>
                    <span className='block'>Febrary 2</span>
                </div>
            </div> */}
        </div>
       
    </div>
  );
}
