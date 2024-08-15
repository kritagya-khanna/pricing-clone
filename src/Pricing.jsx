function Pricing(){
    return(
            <>
            <div className="container">
                <div className="wrapper">
                    <h2 className="headings"> API Pricing </h2>
                    <p> Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs: </p>
                    {/* <div className="table">
                        <div className="table-head br-left">API</div>
                        <div className="table-head">MODEL</div>
                        <div className="table-head br-right">Price per 1K tokens</div>
                        <div>
                            <div className="table-content">OpenAI</div>
                            <div className="table-content">OpenAI</div>
                            <div className="table-cont" >together AI</div>
                            <div className="table-cont">together AI</div>
                        </div>
                        <div>
                            <div className="table-content">GPT-4</div>
                            <div className="table-content">GPT-3.5</div>
                            <div className="table-cont">Llma-2-70b</div>
                            <div className="table-cont">Llma-2-13b</div>
                        </div>
                        <div>
                            <div className="table-content">$0.002</div>
                            <div className="table-content">$0.03</div>
                            <div className="table-cont">$0.0008</div>
                            <div className="table-cont">$0.0006</div>
                        </div>
                    </div> */}
                    <table className="table">
                    <thead>
                        <tr>
                            <th className="table-head br-left">API</th>
                            <th className="table-head">Model</th>
                            <th className="table-head br-right">Price per 1K tokens</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className="table-content">OpenAI</td>
                            <td className="table-content">GPT-3.5</td>
                            <td className="table-content">$0.002</td>
                        </tr>
                        <tr>
                            <td className="table-content">OpenAI</td>
                            <td className="table-content">GPT-4</td>
                            <td className="table-content">$0.03</td>
                        </tr>
                        <tr>
                            <td className="table-cont">Together AI</td>
                            <td className="table-cont">Llama-2-70b</td>
                            <td className="table-cont">$0.0008</td>
                        </tr>
                        <tr>
                            <td className="table-cont">Together AI</td>
                            <td className="table-cont">Llama-2-13b</td>
                            <td className="table-cont">$0.0006</td>
                        </tr>
                    </tbody>
                    
                    </table>
                    <div>
                        <h3 className="headings"> Token Estimation </h3>
                        <p> On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool. </p>
                    </div>
                    <div>
                        <h3 className="headings"> Billing</h3>
                        <p> You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard. </p>
                    </div>
                </div>
            </div>
            </>
    );

}
export default Pricing;