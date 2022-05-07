import classNames from "classnames";
import { useState } from "react";

interface Prop  {
    question: string
    answer:string
}

export default function FaqComponent({question,answer}:Prop) {
    const [open, setOpen] = useState(false)
    return (
        <div className="card">
            <div className="card-header">
                <button className={classNames(open?"":"collapsed","btn btn-link btn-block text-left")} type="button" onClick={()=>setOpen(!open)}>
                    {question}
                </button>
            </div>
            <div className={classNames(open?"show":"","collapse")}>
                <div className="card-body">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}
    