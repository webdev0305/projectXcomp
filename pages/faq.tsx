import FaqComponent from "components/FaqComponent"

export default function Faq() {
    const faq = [
        {
            question: 'What happens if not all tickets are sold in the time period?',
            answer: 'Draws are guaranteed draw regardless of ticket sales.  If not all tickets are sold the prize value will be proportionate to the amount of tickets sold as percentage. Example: Competition is for 0.1BTC, 100 tickets available, 50 sold by draw time, prize will be 0.05BTC.'
        },
        {
            question: 'How do we guarantee the draw is truly random?',
            answer: 'Solidity (the language of smart contracts) is a ‘predictable’ language, this makes generating random number, well, not very random!  We utilise Chainlink VRF (Verifiable Random Function) for absolute true randomness. Find out more about this visit https://chain.link/chainlink-vrf'
        },
        {
            question: 'Upon purchase of ticket, how do we know that we are entered?',
            answer: 'Please check the ‘My Draws’ section to see your active entries.'
        },
        {
            question: 'How will I be contacted if I win?',
            answer: 'You will not be contacted as competitionX is completely KYC free, simply check back on the ‘My Draws -> My Wins’ section to see if you’ve been lucky!'
        },
        {
            question: 'If I win, how long will it take to receive my prize?',
            answer: 'Prize delivery is manual after the draws close, we will aim to deliver prizes within 24hrs of win (usually much faster!)'
        },
        {
            question: 'How are my prizes delivered?',
            answer: 'ERC20 Token prizes are delivered directly to your entry wallet, for other prizes, claim instructions are displayed on ‘My Wins’ section.'
        },
        {
            question: 'Is KYC required?',
            answer: 'None, zilch, nadda.'
        }
        ,
        {
            question: 'Do I need to be of legal age to enter?',
            answer: 'Please refer to the laws in your local jurisdiction, If you enter you are self certifying your eligibility.'
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