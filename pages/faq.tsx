import Collapse from "components/Collaps"

const faq = [
    {
        question: 'Question one',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra  maecenas accumsan lacus vel facilisis.'
    },
    {
        question: 'Question two',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra  maecenas accumsan lacus vel facilisis.'
    },
    {
        question: 'Question three',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra  maecenas accumsan lacus vel facilisis.'
    },
    {
        question: 'Question four',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra  maecenas accumsan lacus vel facilisis.'
    },
    {
        question: 'Question five',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra  maecenas accumsan lacus vel facilisis.'
    },
    {
        question: 'Question six',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra  maecenas accumsan lacus vel facilisis.'
    }
]
export default function Faq() {

    return (
        <div className="page-wrapper">
            <div className="inner-hero-section style--five">
                <div className="bg-shape">
                    <img src="assets/images/elements/inner-hero-shape.png" alt="image"/>
                </div>
            </div>
            <div className="mt-minus-100 pb-120">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="faq-body-wrapper">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" role="tabpanel">
                                        <div className="accordion cmn-accordion">
                                            {faq.map((item:any)=>
                                                <Collapse 
                                                    question={item.question}
                                                    answer={item.answer}
                                                />
                                                
                                            )}
                                            

                                            <div className="card">
                                                <div className="card-header" id="h-2">
                                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                        Question two
                                                    </button>
                                                </div>
                                                <div id="collapse2" className="collapse" aria-labelledby="h-2" data-parent="#faqAcc-one">
                                                    <div className="card-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="h-3">
                                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                        Question three
                                                    </button>
                                                </div>
                                                <div id="collapse3" className="collapse" aria-labelledby="h-3" data-parent="#faqAcc-one">
                                                    <div className="card-body">
                                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dignissimos consectetur aspernatur expedita aut reiciendis magni tempore ullam libero, voluptate nam accusamus est a debitis, obcaecati beatae possimus veniam distinctio?</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="h-4">
                                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                        Question four
                                                    </button>
                                                </div>
                                                <div id="collapse4" className="collapse" aria-labelledby="h-4" data-parent="#faqAcc-one">
                                                    <div className="card-body">
                                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dignissimos consectetur aspernatur expedita aut reiciendis magni tempore ullam libero, voluptate nam accusamus est a debitis, obcaecati beatae possimus veniam distinctio?</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="h-5">
                                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                        Question five
                                                    </button>
                                                </div>
                                                <div id="collapse5" className="collapse" aria-labelledby="h-5" data-parent="#faqAcc-one">
                                                    <div className="card-body">
                                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dignissimos consectetur aspernatur expedita aut reiciendis magni tempore ullam libero, voluptate nam accusamus est a debitis, obcaecati beatae possimus veniam distinctio?</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="h-6">
                                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                        Question six
                                                    </button>
                                                </div>
                                                <div id="collapse6" className="collapse" aria-labelledby="h-6" data-parent="#faqAcc-one">
                                                    <div className="card-body">
                                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dignissimos consectetur aspernatur expedita aut reiciendis magni tempore ullam libero, voluptate nam accusamus est a debitis, obcaecati beatae possimus veniam distinctio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}