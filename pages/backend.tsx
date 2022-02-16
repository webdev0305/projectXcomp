import { useState, useCallback } from 'react'
import base64  from 'base-64';
import axios from 'axios'
import Image from "next/image"
import styles from "styles/pages/Backend.module.scss"; // Page styles

interface ImageInfo {
    path: string
    content: string
}

export default function Backend() {
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[price, setPrice] = useState(0)
    const[mprice, setMPrice] = useState(0)
    const[totalTickets, setTotalTickets] = useState(0)
    const[maxTickets, setMaxTickets] = useState(0)
    const [endTime, onChangeDateTime] = useState(new Date());
    const [fileContent, updateFileContent] = useState<ImageInfo[]>([])
        
    const getBase64 = (file:File) => {
        return new Promise(resolve => {
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            const baseURL = reader.result;
            resolve(baseURL);
          };
        //   console.log(fileInfo);
        });
      };

    const onFileChange = async (e:any) => {
    // async function onChange(e) {
        const file = e?.target?.files[0]
        try {
        // const added = await client.add(file)
        // const url = `https://ipfs.infura.io/ipfs/${added.path}`
        getBase64(file).then(result => {
            updateFileContent(fileContent => {
                return [...fileContent, {"path": 'competition/'+(new Date().getTime()), "content":String(result)}]
            })
        })
        
        console.log(fileContent)

        } catch (error) {
        console.log('Error uploading file: ', error)
        }  
    }
    const onImageRemove = async (index:number) => {
        fileContent.splice(index, 1)
        updateFileContent(fileContent => {
            return [...fileContent]
        })
    }

    const changePrize = () => {

    }

    const uploadData = async (data:any) =>{
        const config = {
            headers: { 'content-type': 'application/json',
                        'accept': 'application/json',
                        'X-API-Key': 'cbRh4B5ZJE8gjPoIEKkK58IAfdxuysg1sVSOMtrso1mi7tJypTt3rr7m9M9vBAhG'
                    },
            onUploadProgress: (event:any) => {
              console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
            },
        };
        return await axios.post('https://deep-index.moralis.io/api/v2/ipfs/uploadFolder', data, config);
    }
    const submitContact = async (event:any) => {
        event.preventDefault();
        const res = await uploadData(fileContent)
        const images = []
        for(const r of res.data) {
            images.push(r.path)
        }
        const title = event.target.title.value;
        const price = event.target.price.value;
        const mprice = event.target.mprice.value;
        const description = event.target.description.value;
        const formData = [{
            path: 'competition.json',
            content: base64.encode(JSON.stringify({title,price,mprice,description,images}))
        }]
        const competitionItem =  await uploadData(formData)
        console.log(competitionItem)
        // const res = await fetch('/api/contact', {
        //     body: JSON.stringify({
        //     name: name,
        //     }),
        //     headers: {
        //     'Content-Type': 'application/json, multipart/form-data',
        //     },
        //     method: 'POST',
        // });
        // const result = await res.json();
        // alert(`Is this your full name: ${result.name}`);
      };
  return (
    <div style={{paddingTop: "85px"}} className={styles.backend}>
        <div className="container">
            <div className="flex flex-wrap mt-10">
                <div className='w-full md:w-1/3'>
                    <div className={styles.table}>
                        <h3>competition title</h3>
                        <span>created date</span>
                    </div>
                </div>
                <form onSubmit={submitContact} className="w-full md:w-2/3 text-center">
                    <div className="flex flex-wrap">
                        <label className='mt-2 font-bold md:w-1/3 md:flex md:justify-end'>Title</label>
                        <span className='mx-4'>&nbsp;</span>
                        <input 
                            className="mb-4 border-2 rounded-xl p-2 w-full md:w-3/6"
                            value={title}
                            name="title"
                            onChange={e=>setTitle(String(e.target.value))}
                            required
                        />
                    </div>
                    <div className="flex flex-wrap">
                        <label className='mt-2 font-bold md:w-1/3 md:flex md:justify-end'>Description</label>
                        <span className='mx-4'>&nbsp;</span>
                        <textarea 
                            className="mb-4 border-2 rounded-xl p-2 w-full md:w-3/6"
                            value={description}
                            name="description"
                            onChange={e=>setDescription(String(e.target.value))}
                            required
                        />
                    </div>
                    <div className="flex flex-wrap">
                        <label className='mt-2 font-bold md:w-1/3 md:flex md:justify-end'>Price of Ticket</label>
                        <span className='mx-4'>&nbsp;</span>
                        <div className="md:w-1/3">
                            <div className='flex flex-wrap'>
                                <div className="w-2/3 md:justify-end">
                                    <input type="checkbox" className="mt-3 "/><span className='m-2'>For Guest</span>
                                </div>
                                <input 
                                    className="mb-4 border-2 rounded-xl p-2 w-1/3"
                                    type='number'
                                    value={price}
                                    name="price"
                                    onChange={e=>setPrice(Number(e.target.value))}
                                />
                            </div>
                            <div className='flex flex-wrap'>
                                <div className="w-2/3 md:justify-end">
                                    <input type="checkbox" className="mt-3 "/><span className='m-2'>For Members</span>
                                </div>
                                <input 
                                    className="mb-4 border-2 rounded-xl p-2 w-1/3"
                                    type='number'
                                    value={mprice}
                                    name="mprice"
                                    onChange={e=>setMPrice(Number(e.target.value))}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <label className='mt-2 font-bold md:w-1/3 md:flex md:justify-end'>Number of Tickets</label>
                        <span className='mx-4'>&nbsp;</span>
                        <input 
                            type="number"
                            className="mb-4 border-2 rounded-xl p-2 w-full md:w-1/5"
                            value={totalTickets}
                            name="totalTickets"
                            onChange={e=>setTotalTickets(Number(e.target.value))}
                            required
                        />
                    </div>
                    <div className="flex flex-wrap">
                        <label className='mt-2 font-bold md:w-1/3 md:flex md:justify-end'>Max tickets per wallet</label>
                        <span className='mx-4'>&nbsp;</span>
                        <input 
                            type="number"
                            className="mb-4 border-2 rounded-xl p-2 w-full md:w-1/5"
                            value={maxTickets}
                            name="maxlTickets"
                            onChange={e=>setMaxTickets(Number(e.target.value))}
                            required
                        />
                    </div>
                    
                    <div className="flex flex-wrap">
                        <label className='mt-2 font-bold md:w-1/3 md:flex md:justify-end'>Images</label>
                        <span className='mx-4'>&nbsp;</span>
                        <div className="md:w-1/3">
                            <div className='flex flex-wrap'>
                                <input 
                                    className="mb-4 border-2 rounded-xl p-2 w-full md:w-3/6"
                                    type="file"
                                    multiple = {false}
                                    accept = "image/png, image/gif, image/jpeg"
                                    name="files"
                                    onChange={onFileChange}
                                    // onChange={e=>setDescription(String(e.target.value))}
                                />
                            </div>
                            <div className='flex flex-wrap'>
                                {fileContent.map((image, index) => (<div key={index}>
                                        <Image src={image?.content} width={100} height={100} alt='file' />
                                        <span onClick={() => onImageRemove(index)} className="cursor-pointer bg-red-600 rounded-full absolute text-white -ml-7 px-2 hover:text-black">&times;</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <label className='mt-2 font-bold md:w-1/3 md:flex md:justify-end'>Prize</label>
                        <span className='mx-4'>&nbsp;</span>
                        <div className="md:w-3/5">
                            <select name="prize" className='flex flex-wrap mr-2 border-2 rounded-xl p-2' onChange={changePrize}>
                                <option value="goods">Goods</option>
                                <option value="cash">Cash</option>
                                <option value="token">Token</option>
                                <option value="credit">Credit</option>
                            </select>
                            <div className="flex flex-wrap">
                                <span className='m-2 w-full md:w-1/6'>Name of Goods</span> 
                                <input type="text" name="goods_name" className="mb-4 border-2 rounded-xl p-2 w-full md:w-3/6"/>
                            </div>
                            <div className="flex flex-wrap">
                                <span className='m-2 w-full md:w-1/6'>Amount</span> 
                                <input type="number" name="goods_amount" className="mb-4 border-2 rounded-xl p-2 w-full md:w-1/6"/>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 my-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
       
    </div>
  );
}
