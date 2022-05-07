import FaqComponent from "components/FaqComponent"

export default function Faq() {
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
    ];
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
                                                <div className="my-4" key={item.question}>
                                                    <FaqComponent 
                                                        question={item.question}
                                                        answer={item.answer}
                                                    />
                                                </div>
                                            )}
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